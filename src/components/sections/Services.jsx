import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AmbientBackground from '../ui/AmbientBackground';

/*
  Premium services — two-tier layout (toolkit: Enterprise Gateway + Bento Grid)

  Tier 1: Cinematic featured card (Workover Rig Services)
    - Full-width dark green banner with topographic SVG mesh background
    - DM Serif Display italic title, inline credential chips, CTA arrow
    - This is Al Baraka's headline capability — it gets the full spotlight

  Tier 2: Swiss-numbered grid (5 remaining services)
    - Clean white cards, Swiss-style 01–05 numbering, subtle top accent on hover
    - 2+3 or 3+2 responsive grid
    - Shadow-only, no borders (CLAUDE.md rule)
    - Source Sans 3 body, Lexend headings
*/

const featured = {
  id: 'workover',
  number: '01',
  category: 'Well Services',
  title: 'Workover Rig Services',
  tagline: "Oman's most demanding wells. Handled with precision.",
  description:
    "Full-spectrum well intervention across the southern producing fields — restoring, optimising, and maximising well productivity. Modern rig fleet, precision-trained crews, zero-compromise safety.",
  chips: ['12 Active Rigs', '200+ Wells Intervened', 'PDO Preferred'],
  href: '/services',
};

const services = [
  {
    id: 'flowline',
    number: '02',
    category: 'Construction',
    title: 'Flowline Construction',
    description:
      'Expert construction and replacement of flowline infrastructure — safe fluid transport from wellhead to facility, on time and to specification.',
    icon: FlowlineIcon,
  },
  {
    id: 'epc',
    number: '03',
    category: 'Engineering',
    title: 'EPC Projects',
    description:
      'End-to-end Engineering, Procurement, and Construction — oilfield facilities delivered under a single accountable contract with full QHSE governance.',
    icon: EPCIcon,
  },
  {
    id: 'pipeline',
    number: '04',
    category: 'Integrity',
    title: 'Pipeline Maintenance',
    description:
      'Scheduled and reactive maintenance keeping concession area pipeline networks safe, reliable, and compliant with PDO and regulatory standards.',
    icon: PipelineIcon,
  },
  {
    id: 'manpower',
    number: '05',
    category: 'Workforce',
    title: 'Manpower Contract Services',
    description:
      'Qualified technical and operational personnel on flexible contracts — scalable workforce solutions without compromise on competency or compliance.',
    icon: ManpowerIcon,
  },
  {
    id: 'logistics',
    number: '06',
    category: 'Field Support',
    title: 'Logistics & Camp Support',
    description:
      'Integrated supply chain, heavy transport, and camp management — the operational backbone your remote oilfield project depends on.',
    icon: LogisticsIcon,
  },
];

export default function Services() {
  const shouldReduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  return (
    <section className="section-pad bg-ivory relative overflow-hidden">
      <AmbientBackground variant="ivory" dots blobs />
      <div className="relative z-10 container-main">

        {/* ─── Section header ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-12"
        >
          <div>
            <div className="label-section mb-4">What We Do</div>
            <h2
              className="font-heading font-semibold text-green-dark text-balance mb-3"
              style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.6rem)', letterSpacing: '-0.02em', lineHeight: '1.08' }}
            >
              End-to-End<br className="hidden sm:block" /> Field Capability
            </h2>
            <p className="font-body text-charcoal-muted text-sm max-w-sm" style={{ lineHeight: '1.65' }}>
              Six integrated service lines — delivered under one accountable team, one safety culture.
            </p>
          </div>
          <Link
            to="/services"
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-heading font-medium
                       text-green hover:text-green-light transition-colors duration-150 cursor-pointer group"
          >
            Full Capability Overview
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* ─── Tier 1: Cinematic featured card ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease }}
          className="mb-4"
        >
          <Link
            to={featured.href}
            className="group relative flex flex-col lg:flex-row overflow-hidden rounded-2xl cursor-pointer
                       min-h-[300px] lg:min-h-[260px]
                       transition-shadow duration-300 hover:shadow-lifted"
            style={{ background: 'linear-gradient(135deg, #0F2218 0%, #1B3A2D 60%, #1F4232 100%)' }}
          >
            {/* Topographic mesh background */}
            <ServiceTopoSVG />

            {/* Gold radial warmth — top right */}
            <div
              className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
              style={{ background: 'radial-gradient(circle at 85% 10%, rgba(184,147,42,0.10) 0%, transparent 55%)' }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between p-8 lg:p-10 flex-1">
              {/* Top row */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-3">
                  <span
                    className="font-heading font-semibold text-gold/40 tabular-nums select-none"
                    style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-0.04em', lineHeight: '1' }}
                  >
                    {featured.number}
                  </span>
                  <span className="w-px h-5 bg-ivory/10" />
                  <span className="text-[10px] font-heading font-semibold tracking-[0.14em] uppercase text-gold/55">
                    {featured.category}
                  </span>
                </div>
                <WellIcon featured />
              </div>

              {/* Title */}
              <div>
                <h3
                  className="font-display italic text-ivory text-balance mb-3"
                  style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', lineHeight: '1.12', letterSpacing: '-0.01em' }}
                >
                  {featured.title}
                </h3>
                <p
                  className="font-heading font-medium text-gold/70 mb-5"
                  style={{ fontSize: '0.9rem', letterSpacing: '-0.005em' }}
                >
                  {featured.tagline}
                </p>
                <p className="font-body text-ivory/45 text-sm leading-relaxed max-w-[560px]" style={{ lineHeight: '1.68' }}>
                  {featured.description}
                </p>
              </div>

              {/* Bottom row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-8 pt-7 border-t border-ivory/8">
                {/* Chips */}
                <div className="flex flex-wrap gap-2">
                  {featured.chips.map((chip) => (
                    <span
                      key={chip}
                      className="px-3 py-1 rounded-full text-[11px] font-heading font-medium text-ivory/50
                                 border border-ivory/10 bg-ivory/4"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-heading font-semibold text-gold/70
                                group-hover:text-gold transition-colors duration-200 flex-shrink-0">
                  View Full Capability
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1.5" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* ─── Tier 2: Swiss-numbered service grid ─────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: shouldReduce ? 0 : 0.07 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={{
                  hidden:   { opacity: 0, y: shouldReduce ? 0 : 18 },
                  visible:  { opacity: 1, y: 0, transition: { duration: 0.44, ease: 'easeOut' } },
                }}
              >
                <Link
                  to="/services"
                  className="group relative flex flex-col h-full bg-white rounded-2xl p-7 cursor-pointer
                             shadow-card hover:shadow-card-hover
                             transition-all duration-200 hover:-translate-y-0.5 overflow-hidden"
                  style={{ minHeight: '220px' }}
                >
                  {/* Hover top accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] bg-green
                               scale-x-0 group-hover:scale-x-100
                               transition-transform duration-300 origin-left rounded-t-2xl"
                  />

                  {/* Number + category */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="font-heading font-semibold text-stone select-none tabular-nums"
                      style={{ fontSize: '1.75rem', letterSpacing: '-0.04em', lineHeight: '1' }}
                    >
                      {service.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-green/6 flex items-center justify-center text-green
                                    group-hover:bg-green group-hover:text-ivory transition-all duration-200">
                      <Icon />
                    </div>
                  </div>

                  {/* Category label */}
                  <div className="text-[10px] font-heading font-semibold tracking-[0.12em] uppercase text-gold/65 mb-2">
                    {service.category}
                  </div>

                  {/* Title */}
                  <h3
                    className="font-heading font-semibold text-charcoal flex-shrink-0 mb-3"
                    style={{ fontSize: '1.05rem', letterSpacing: '-0.015em', lineHeight: '1.25' }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm text-charcoal-light leading-relaxed flex-1" style={{ lineHeight: '1.65' }}>
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-5 flex items-center gap-1.5 text-xs font-heading font-medium text-green/60
                                  group-hover:text-green transition-colors duration-200">
                    Learn more
                    <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

/* ─── Background SVG — sparse topographic mesh for featured card ─────── */
function ServiceTopoSVG() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 900 300"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <ellipse cx="700" cy="150" rx="340" ry="220" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      <ellipse cx="700" cy="150" rx="270" ry="170" stroke="rgba(255,255,255,0.045)" strokeWidth="1" />
      <ellipse cx="700" cy="150" rx="200" ry="125" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <ellipse cx="700" cy="150" rx="135" ry="85"  stroke="rgba(255,255,255,0.055)" strokeWidth="1" />
      <ellipse cx="700" cy="150" rx="78"  ry="50"  stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <ellipse cx="700" cy="150" rx="38"  ry="25"  stroke="rgba(184,147,42,0.14)" strokeWidth="1" />
      <circle  cx="700" cy="150" r="3.5"  fill="rgba(184,147,42,0.4)" />
      <circle  cx="700" cy="150" r="7"    stroke="rgba(184,147,42,0.15)" strokeWidth="1" fill="none" />

      <ellipse cx="200" cy="240" rx="200" ry="120" stroke="rgba(255,255,255,0.025)" strokeWidth="0.75" />
      <ellipse cx="200" cy="240" rx="140" ry="80"  stroke="rgba(255,255,255,0.03)" strokeWidth="0.75" />
      <circle  cx="200" cy="240" r="2.5"  fill="rgba(184,147,42,0.25)" />

      <line x1="0"   y1="80"  x2="900" y2="220" stroke="rgba(255,255,255,0.02)" strokeWidth="0.6" strokeDasharray="5 10" />
      <line x1="0"   y1="180" x2="900" y2="50"  stroke="rgba(255,255,255,0.015)" strokeWidth="0.6" strokeDasharray="4 12" />
    </svg>
  );
}

/* ─── SVG icon components ─────────────────────────────────────────────── */
function WellIcon({ featured }) {
  return (
    <svg
      viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"
      className={featured ? 'w-6 h-6 text-gold/50' : 'w-5 h-5'}
    >
      <line x1="10" y1="2" x2="10" y2="18" />
      <path d="M14 5H7a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6H5" />
    </svg>
  );
}
function FlowlineIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="w-5 h-5">
      <path d="M2 10h16M13 5l5 5-5 5" />
    </svg>
  );
}
function EPCIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="w-5 h-5">
      <rect x="2" y="2" width="16" height="16" rx="2" />
      <path d="M2 8h16M8 20V8" />
    </svg>
  );
}
function PipelineIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="w-5 h-5">
      <path d="M2 10h16" />
      <ellipse cx="10" cy="10" rx="8" ry="3.5" />
    </svg>
  );
}
function ManpowerIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="w-5 h-5">
      <path d="M14 17v-1.5A3.5 3.5 0 0 0 10.5 12h-5A3.5 3.5 0 0 0 2 15.5V17" />
      <circle cx="8" cy="6" r="3.5" />
      <path d="M18 17v-1a3 3 0 0 0-2.25-2.9M13 3.13a3 3 0 0 1 0 5.74" />
    </svg>
  );
}
function LogisticsIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="w-5 h-5">
      <rect x="1" y="4" width="12" height="10" rx="1" />
      <path d="M13 7h3l3 3v4h-6V7z" />
      <circle cx="5" cy="16" r="2" />
      <circle cx="16" cy="16" r="2" />
    </svg>
  );
}
