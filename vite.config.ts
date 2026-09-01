import { sites } from '@openai/sites-vite-plugin';
import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import { defineConfig } from 'vite';
import hostingConfig from './.openai/hosting.json';
import { cdnAdapter } from '@vinext/cloudflare/cache/cdn-adapter';
import { cloudflare } from '@cloudflare/vite-plugin';

const SITE_CREATOR_PLACEHOLDER_DATABASE_ID =
  '00000000-0000-4000-8000-000000000000';

const { d1, r2 } = hostingConfig;

// macOS Seatbelt blocks FSEvents, so Codex previews need polling for HMR.
const isCodexSeatbeltSandbox = process.env.CODEX_SANDBOX === 'seatbelt';

// Keep Wrangler and Miniflare state project-local. These are non-secret tool
// settings; application environment belongs in ignored `.env*` files.
// NOTE: these must be set here, before the `@cloudflare/vite-plugin` import
// above executes, to take effect -- but static imports are hoisted ahead of
// any module-level statement, so they land after the import regardless of
// source order. `@vinext/cloudflare deploy` also requires a statically
// analyzable top-level `cloudflare(...)` plugin call, which rules out
// deferring the import. In practice this only affects where local `wrangler
// dev` writes its log/registry files; harmless if it falls back to defaults.
process.env.WRANGLER_WRITE_LOGS ??= 'false';
process.env.WRANGLER_LOG_PATH ??= '.wrangler/logs';
process.env.MINIFLARE_REGISTRY_PATH ??= '.wrangler/registry';

const localBindingConfig = {
  main: 'vinext/server/fetch-handler',
  // compatibility_flags intentionally omitted here -- wrangler.jsonc
  // already declares nodejs_compat, and merging both makes Miniflare
  // reject the config as a duplicate flag.
  d1_databases: d1
    ? [
        {
          binding: d1,
          database_name: 'site-creator-d1',
          database_id: SITE_CREATOR_PLACEHOLDER_DATABASE_ID,
        },
      ]
    : [],
  r2_buckets: r2
    ? [
        {
          binding: r2,
          bucket_name: 'site-creator-r2',
        },
      ]
    : [],
};

export default defineConfig({
  css: { postcss: { plugins: [tailwindcss()] } },
  server: isCodexSeatbeltSandbox
    ? { watch: { useFsEvents: false, usePolling: true } }
    : undefined,
  plugins: [
    vinext({
      cache: { cdn: cdnAdapter() },
    }),
    sites(),
    cloudflare({
      viteEnvironment: { name: 'rsc', childEnvironments: ['ssr'] },
      config: localBindingConfig,
    }),
  ],
});
