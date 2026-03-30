import { useReducedMotion } from 'framer-motion';
import AmbientBackground from '../ui/AmbientBackground';

/*
  TrustBar — Infinite horizontal marquee strip
  Replaces the static badge grid with a continuously scrolling certification track.
  - Dual-row items provide seamless CSS loop (-50% translate)
  - Hover pauses the scroll (via CSS)
  - prefers-reduced-motion: track paused, all items visible in wrapped grid
  - Fade mask at edges via CSS mask-image
*/

const credentials = [
  { abbr: 'PDO',  name: 'Petroleum Development Oman',    role: 'Approved Contractor',    tier: 'primary' },
  { abbr: 'MEM',  name: 'Ministry of Energy & Minerals', role: 'Registered Contractor',  tier: 'primary' },
  { abbr: 'ISO',  name: 'ISO 9001',                      role: 'Quality Management',     tier: 'standard' },
  { abbr: 'HSE',  name: 'OHSAS 18001',                   role: 'Occupational Health',    tier: 'standard' },
  { abbr: 'ENV',  name: 'ISO 14001',                     role: 'Environmental Mgmt.',    tier: 'standard' },
  { abbr: 'OMA',  name: 'Omanisation Programme',         role: '70%+ Omani Workforce',   tier: 'standard' },
  { abbr: 'BLK',  name: 'Block 6 Concession',            role: 'Southern Oman',          tier: 'primary' },
  { abbr: '13+',  name: '13 Years Active',               role: 'Est. 2011 · Muscat',     tier: 'standard' },
  { abbr: '2M',   name: '2M+ Man-Hours',                 role: 'LTI-Free Operations',    tier: 'standard' },
];

function CredentialBadge({ abbr, name, role, tier }) {
  return (
    <div
      className={`
        flex items-center gap-3 px-4 py-2.5 rounded-lg flex-shrink-0 mx-2
        transition-all duration-200 cursor-default
        ${tier === 'primary'
          ? 'bg-green/6 border border-green/15 hover:bg-green/10'
          : 'bg-white border border-stone/35 hover:border-stone/55 hover:shadow-card'}
      `}
    >
      <span
        className={`
          w-8 h-8 rounded-md flex-shrink-0 flex items-center justify-center
          font-heading font-bold text-[11px]
          ${tier === 'primary' ? 'bg-green text-gold' : 'bg-green/8 text-green'}
        `}
      >
        {abbr}
      </span>
      <div>
        <div className="font-heading font-medium text-xs text-charcoal leading-none mb-0.5 whitespace-nowrap">
          {name}
        </div>
        <div className="font-body text-[11px] text-charcoal-muted leading-none whitespace-nowrap">
          {role}
        </div>
      </div>
    </div>
  );
}

export default function TrustBar() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-8 bg-ivory border-b border-stone/50">
      <AmbientBackground variant="ivory" dots blobs={false} />

      <div className="relative z-10">
        {/* Section label — left-aligned inside container */}
        <div className="flex items-center gap-4 mb-5 container-main">
          <div className="h-px w-8 bg-gold/50" />
          <span className="text-xs font-heading font-semibold tracking-[0.12em] uppercase text-charcoal-muted">
            Certified &amp; Trusted By
          </span>
        </div>

        {/* ── Marquee strip ───────────────────────────────────────────────── */}
        {shouldReduce ? (
          /* Reduced-motion fallback: static wrapping grid */
          <div className="container-main flex flex-wrap gap-2.5">
            {credentials.map((c, i) => (
              <CredentialBadge key={i} {...c} />
            ))}
          </div>
        ) : (
          <div
            className="overflow-hidden"
            style={{
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)',
              maskImage:
                'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)',
            }}
          >
            <div className="marquee-track">
              {/* First copy */}
              {credentials.map((c, i) => (
                <CredentialBadge key={`a-${i}`} {...c} />
              ))}
              {/* Duplicate for seamless loop */}
              {credentials.map((c, i) => (
                <CredentialBadge key={`b-${i}`} {...c} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
