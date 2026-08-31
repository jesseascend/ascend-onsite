import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarCheck, ChartNoAxesColumnIncreasing, HeartHandshake, RefreshCw, ShieldCheck, UsersRound } from 'lucide-react';
import { DiscoveryCta } from '@/components/discovery-cta';
import { FinalCta } from '@/components/final-cta';
import { SiteShell } from '@/components/site-shell';

const verticals = [
  {
    title: 'Active Adult & 55+ Communities',
    copy: 'A dependable wellness amenity designed around active lifestyles, resident connection, and the community experience.',
    href: '/active-adult-55-plus-communities/',
    image: '/active-adult-wellness.jpg',
    alt: 'Older adults moving together in a community wellness class',
  },
  {
    title: 'Senior & Assisted Living',
    copy: 'Appropriate, professionally delivered programming that can support your team without requiring a full internal fitness operation.',
    href: '/senior-assisted-living/',
    image: '/senior-wellness.jpg',
    alt: 'Senior residents participating in a seated group movement class',
  },
];

const responsibilities = [
  { icon: UsersRound, title: 'Program design', copy: 'A thoughtful programming mix shaped by your population, space, existing program, and goals.' },
  { icon: ShieldCheck, title: 'Professional delivery', copy: 'Instructor sourcing, screening, standards, scheduling, and coverage managed around the agreed scope.' },
  { icon: CalendarCheck, title: 'Operating support', copy: 'Communication, administration, booking, attendance, and facility coordination where the program calls for it.' },
  { icon: ChartNoAxesColumnIncreasing, title: 'Ongoing improvement', copy: 'Participation visibility, facility feedback, and program adjustments that keep the experience relevant.' },
];

const process = [
  ['01', 'Discovery', 'We learn about your community, residents, current program, facility, and priorities.'],
  ['02', 'Program design', 'We shape the right mix of programming, staffing, systems, and operating support.'],
  ['03', 'Installation', 'We prepare the agreed program, coordinate delivery, and make the transition clear.'],
  ['04', 'Ongoing management', 'We manage the approved scope and refine the program as the community evolves.'],
];

export default function Home() {
  return (
    <SiteShell pageId="A-HOME">
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Managed wellness for communities and facilities</p>
            <h1>A wellness program your community can count on.</h1>
            <p className="hero-lede">Ascend designs, assembles, and manages on-site wellness programs around your facility, your residents, and the level of support your organization actually needs.</p>
            <div className="hero-actions">
              <DiscoveryCta id="cta-discovery-a-home-hero" location="hero" />
              <Link className="text-link" href="#who-we-serve">Explore who we serve <ArrowRight aria-hidden="true" size={18} /></Link>
            </div>
          </div>
          <div className="hero-visual" aria-label="A calm, professional wellness program built around community needs">
            <div className="hero-orbit hero-orbit-one" /><div className="hero-orbit hero-orbit-two" />
            <div className="hero-card hero-card-primary"><span className="hero-card-label">Designed around</span><strong>Your residents</strong><span>Population, interests, ability levels, and goals</span></div>
            <div className="hero-card hero-card-secondary"><span className="hero-card-label">Managed for</span><strong>Your facility</strong><span>Programming, staffing, scheduling, and ongoing support</span></div>
            <Image className="hero-mark-image" src="/ascend-mark.png" alt="" width={1500} height={1500} priority />
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Ascend program principles">
        <div className="shell signal-grid"><span>Population-aware</span><span>Professionally managed</span><span>Flexible in scope</span><span>Built for your environment</span></div>
      </section>

      <section id="managed-wellness" className="category-section">
        <div className="shell category-grid">
          <p className="eyebrow">More than a class schedule</p>
          <div><h2>Professional wellness, managed around your environment.</h2><p>A managed wellness program brings programming, people, systems, and service together into one coherent experience. Ascend can support a focused component or take on broader operating responsibility—without forcing every organization into the same model.</p></div>
        </div>
      </section>

      <section id="who-we-serve" className="vertical-section section-pad">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow">Built for your environment</p><h2>We understand the organization—and the people it serves.</h2></div>
          <div className="vertical-grid">
            {verticals.map((vertical, index) => (
              <Link className="vertical-card vertical-card-image" href={vertical.href} key={vertical.href}>
                <Image src={vertical.image} alt={vertical.alt} width={1800} height={1200} sizes="(max-width: 680px) 100vw, 50vw" />
                <div className="vertical-card-body"><span className="vertical-number">0{index + 1}</span><h3>{vertical.title}</h3><p>{vertical.copy}</p><span className="card-link">Explore this approach <ArrowRight aria-hidden="true" size={18} /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="problem-section section-pad">
        <div className="shell split-heading"><div><p className="eyebrow">From fragmented to dependable</p><h2>Your team should not have to hold every moving piece together.</h2></div><p>Wellness programming becomes difficult when the experience depends on individual availability, manual administration, and disconnected systems. Ascend helps turn those moving pieces into a coherent program—without criticizing the people already doing their best to support it.</p></div>
        <div className="shell before-after">
          <div className="state-card state-before"><span>Common pressure points</span><ul><li>Instructor coverage gaps</li><li>Manual scheduling and payments</li><li>Limited participation visibility</li><li>Programming shaped by availability</li></ul></div>
          <div className="state-arrow" aria-hidden="true"><RefreshCw /></div>
          <div className="state-card state-after"><span>A managed program</span><ul><li>Coordinated professional delivery</li><li>Clear processes and support</li><li>Programming designed around demand</li><li>A consistent resident experience</li></ul></div>
        </div>
      </section>

      <section className="responsibility-section section-pad">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow">What Ascend can manage</p><h2>One professional partner. The right level of responsibility.</h2><p>Every engagement is shaped around what your organization wants to delegate and what your community needs.</p></div>
          <div className="responsibility-grid">{responsibilities.map(({ icon: Icon, title, copy }) => <article className="responsibility-card" key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="scope-section section-pad">
        <div className="shell scope-grid">
          <div><p className="eyebrow">Flexible by design</p><h2>From one program component to a comprehensive wellness operation.</h2><p>Turnkey is a capability, not a requirement. Ascend can manage a defined recurring service, coordinate broader programming, or take on comprehensive operating support based on your environment.</p><DiscoveryCta id="cta-discovery-a-home-scope" location="scope" className="text-button" /></div>
          <ol className="scope-list"><li><span>01</span><div><strong>Defined program component</strong><p>Focused support for an agreed class or service.</p></div></li><li><span>02</span><div><strong>Managed recurring programming</strong><p>Broader staffing, scheduling, and delivery management.</p></div></li><li><span>03</span><div><strong>Comprehensive wellness program</strong><p>Multiple services coordinated with operating support.</p></div></li><li><span>04</span><div><strong>Turnkey wellness operation</strong><p>Broad responsibility for the agreed wellness function.</p></div></li></ol>
        </div>
      </section>

      <section className="resident-section section-pad">
        <div className="shell resident-grid">
          <div className="resident-image"><Image src="/active-adult-wellness.jpg" alt="Active older adults taking part in a social movement class" width={1800} height={1202} sizes="(max-width: 920px) 100vw, 50vw" /></div>
          <div><p className="eyebrow">Your residents at the center</p><h2>A program that fits the people who actually use it.</h2><p>Appropriate wellness begins with understanding the population—not simply filling a calendar. Ascend considers ability levels, interests, participation patterns, social connection, facility context, and the experience your organization wants residents to have.</p><div className="resident-points"><span><HeartHandshake aria-hidden="true" /> Belonging and connection</span><span><UsersRound aria-hidden="true" /> Variety and appropriate challenge</span></div></div>
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="shell"><div className="section-heading"><p className="eyebrow">How it works</p><h2>A clear path from conversation to a managed program.</h2></div><ol className="process-grid">{process.map(([number, title, copy]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol></div>
      </section>

      <section className="proof-section section-pad">
        <div className="shell proof-grid"><div><p className="eyebrow">Operating experience, brought on-site</p><h2>Built from approximately a decade of hands-on fitness operations.</h2></div><div><p>Ascend has refined its fitness operation in Lake Mary, Florida for approximately 10 years. Ascend On-Site Wellness brings that operating experience into client communities and facilities as an on-site amenity.</p><p>At launch, our authority rests on process, standards, operational specificity, and the discipline to build each program around its setting—not on invented logos, testimonials, or claims.</p><Link className="text-link" href="/about/">Learn about Ascend <ArrowRight aria-hidden="true" size={18} /></Link></div></div>
      </section>

      <FinalCta pageId="A-HOME" heading="Let’s talk about what wellness could look like in your community." copy="We’ll start with your environment, your residents, your current program, and the level of support that would be most useful." />
    </SiteShell>
  );
}
