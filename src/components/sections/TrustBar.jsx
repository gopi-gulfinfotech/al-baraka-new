import { motion, useReducedMotion } from 'framer-motion';
import AmbientBackground from '../ui/AmbientBackground';

/*
  Trust & Authority pattern (toolkit):
  - Certification badges with hover depth
  - PDO/MEM "primary" tier = heavier weight
  - ISO/HSE/ENV/OMA "standard" tier = lighter
  - Section label: Swiss Modernism small caps + gold accent line
  - CLAUDE.md: avoid clutter — minimal border on badges only
*/

const credentials = [
  { abbr: 'PDO',  name: 'Petroleum Development Oman',   role: 'Approved Contractor',   tier: 'primary' },
  { abbr: 'MEM',  name: 'Ministry of Energy & Minerals', role: 'Registered Contractor', tier: 'primary' },
  { abbr: 'ISO',  name: 'ISO 9001',                      role: 'Quality Management',    tier: 'standard' },
  { abbr: 'HSE',  name: 'OHSAS 18001',                   role: 'Health & Safety',       tier: 'standard' },
  { abbr: 'ENV',  name: 'ISO 14001',                     role: 'Environmental Mgmt.',   tier: 'standard' },
  { abbr: 'OMA',  name: 'Omanisation',                   role: 'Workforce Development', tier: 'standard' },
];

export default function TrustBar() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-10 bg-ivory border-b border-stone/50">
      <AmbientBackground variant="ivory" dots blobs={false} />
      <div className="relative z-10 container-main">
        {/* Label */}
        <div className="flex items-center gap-4 mb-7">
          <div className="h-px w-8 bg-gold/50" />
          <span className="text-xs font-heading font-semibold tracking-[0.12em] uppercase text-charcoal-muted">
            Certified & Trusted By
          </span>
        </div>

        {/* Badge row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: shouldReduce ? 0 : 0.05 } },
          }}
          className="flex flex-wrap gap-2.5"
        >
          {credentials.map((cred, i) => (
            <motion.div
              key={i}
              variants={{
                hidden:   { opacity: 0, y: 8 },
                visible:  { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
              }}
              className={`
                flex items-center gap-3 px-4 py-2.5 rounded-lg cursor-default
                transition-all duration-200
                ${cred.tier === 'primary'
                  ? 'bg-green/6 border border-green/15 hover:bg-green/10 hover:border-green/25'
                  : 'bg-white border border-stone/35 hover:border-stone/60 hover:shadow-card'}
              `}
            >
              {/* Badge mark */}
              <span className={`
                w-8 h-8 rounded-md flex-shrink-0 flex items-center justify-center
                font-heading font-bold text-xs
                ${cred.tier === 'primary' ? 'bg-green text-gold' : 'bg-green/8 text-green'}
              `}>
                {cred.abbr}
              </span>
              {/* Label — hide on smallest screens */}
              <div className="hidden sm:block">
                <div className="font-heading font-medium text-xs text-charcoal leading-none mb-0.5">
                  {cred.name}
                </div>
                <div className="font-body text-xs text-charcoal-muted leading-none">{cred.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
