import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const requiredRoutes = ['', 'active-adult-55-plus-communities', 'senior-assisted-living', 'about', 'schedule-a-discovery-call', 'thank-you', 'privacy', 'accessibility'];
const errors = [];

for (const route of requiredRoutes) {
  const page = join(root, 'app', route, 'page.tsx');
  try { await readFile(page, 'utf8'); } catch { errors.push(`Missing route source: ${route || '/'}`); }
}

async function collect(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await collect(path));
    else if (/\.(tsx|ts|md)$/.test(entry.name)) files.push(path);
  }
  return files;
}

const sourceFiles = [...await collect(join(root, 'app')), ...await collect(join(root, 'components')), ...await collect(join(root, 'lib'))];
const source = (await Promise.all(sourceFiles.map((file) => readFile(file, 'utf8')))).join('\n');

for (const phrase of ['Get Pricing', 'Buy Now', 'Purchase Membership', 'nationwide coverage', 'neurological preservation']) {
  if (source.includes(phrase)) errors.push(`Prohibited production phrase found: ${phrase}`);
}

if (!source.includes('data-cta-key="discovery-call"')) errors.push('Shared Discovery Call hook is missing.');
if (!source.includes('/schedule-a-discovery-call/')) errors.push('Valid Discovery Call route is missing.');
if (!source.includes('robots(): MetadataRoute.Robots')) errors.push('Robots metadata route is missing.');
if (!source.includes('sitemap(): MetadataRoute.Sitemap')) errors.push('Sitemap metadata route is missing.');
if (source.includes("from 'next/link'")) errors.push('Client-routed Next links remain; use standard anchors for deployment-safe navigation.');

const idMatches = [...source.matchAll(/id="(cta-discovery-[^"]+)"/g)].map((match) => match[1]);
const duplicates = idMatches.filter((id, index) => idMatches.indexOf(id) !== index);
if (duplicates.length) errors.push(`Duplicate literal CTA IDs: ${[...new Set(duplicates)].join(', ')}`);

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Ascend source checks passed across ${sourceFiles.length} files.`);
