import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

/*
  Premium hero — split-screen editorial layout
  Motion enhancements:
  - Scroll-parallax on topographic SVG (slower scroll = depth illusion)
  - Scroll-parallax on credential card (lifts away on scroll)
  - Floating gold particle dots (CSS keyframe, 8 particles)
  - Scan line effect (premium field-monitor aesthetic)
  - Word-level stagger on headline
  - All motion gated by prefers-reduced-motion
*/

const trustSignals = [
  { label: 'PDO Approved' },
  { label: 'Est. 2011' },
  { label: 'MEM Registered' },
];

const stats = [
  { value: '13+',  label: 'Years Active',   sub: 'Since 2011' },
  { value: '70%+', label: 'Omanisation',    sub: 'Omani Workforce' },
  { value: '6',    label: 'Service Lines',  sub: 'Integrated' },
  { value: '99%',  label: 'Safety Record',  sub: 'LTI-Free' },
];

const credentialItems = [
  { label: 'PDO Approved Contractor', value: 'Since 2013' },
  { label: 'LTI-Free Operations',     value: '2M+ Man-Hours' },
  { label: 'Southern Concession',     value: 'Block 6 Specialist' },
];

/* Particle positions and animation config — left panel only */
const particles = [
  { size: 3,   left: '12%',  top: '28%', anim: 'particleFloatA', dur: '8.5s',  delay: '0s' },
  { size: 2,   left: '24%',  top: '58%', anim: 'particleFloatB', dur: '11s',   delay: '1.2s' },
  { size: 2.5, left: '40%',  top: '35%', anim: 'particleFloatC', dur: '9.8s',  delay: '2.4s' },
  { size: 1.5, left: '55%',  top: '70%', anim: 'particleFloatD', dur: '13s',   delay: '0.6s' },
  { size: 2,   left: '8%',   top: '72%', anim: 'particleFloatA', dur: '10.5s', delay: '3.1s' },
  { size: 3,   left: '47%',  top: '18%', anim: 'particleFloatC', dur: '7.9s',  delay: '1.8s' },
  { size: 1.5, left: '32%',  top: '82%', anim: 'particleFloatB', dur: '12.2s', delay: '4s' },
  { size: 2.5, left: '18%',  top: '45%', anim: 'particleFloatD', dur: '9.2s',  delay: '2.8s' },
];

export default function Hero() {
  const shouldReduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  /* Scroll-parallax values */
  const { scrollY } = useScroll();
  const topoY    = useTransform(scrollY, [0, 700], [0, shouldReduce ? 0 : -70]);
  const cardY    = useTransform(scrollY, [0, 700], [0, shouldReduce ? 0 : -40]);
  const bgScale  = useTransform(scrollY, [0, 700], [1, shouldReduce ? 1 : 1.06]);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: '#0D1F15' }}>

      {/* ─── Ambient blobs ─────────────────────────────────────────────────── */}
      <div
        className="ambient-blob ambient-blob-primary pointer-events-none"
        style={{
          width: '55vw', height: '55vw',
          top: '-20%', left: '-5%',
          background: 'radial-gradient(circle, rgba(42,82,64,0.28) 0%, transparent 68%)',
          opacity: shouldReduce ? 0 : 1,
        }}
      />
      <div
        className="ambient-blob ambient-blob-secondary pointer-events-none"
        style={{
          width: '30vw', height: '30vw',
          bottom: '10%', left: '30%',
          background: 'radial-gradient(circle, rgba(184,147,42,0.07) 0%, transparent 65%)',
          opacity: shouldReduce ? 0 : 1,
        }}
      />

      {/* ─── Floating particle dots ────────────────────────────────────────── */}
      {!shouldReduce && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
          {particles.map((p, i) => (
            <div
              key={i}
              className="particle-dot"
              style={{
                width: p.size,
                height: p.size,
                left: p.left,
                top: p.top,
                background: 'rgba(184,147,42,0.5)',
                boxShadow: `0 0 ${p.size * 3}px rgba(184,147,42,0.3)`,
                animation: `${p.anim} ${p.dur} ease-in-out infinite`,
                animationDelay: p.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* ─── Scan line ─────────────────────────────────────────────────────── */}
      {!shouldReduce && <div className="scan-line" style={{ zIndex: 1 }} />}

      {/* ─── Grain texture ─────────────────────────────────────────────────── */}
      <div className="absolute inset-0 noise-grain pointer-events-none" style={{ opacity: 0.04 }} />

      {/* ─── Grid overlay ──────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.016) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(255,255,255,0.016) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Left red accent */}
      <div className="absolute left-0 inset-y-0 w-[3px] bg-gradient-to-b from-transparent via-red/50 to-transparent z-10" />

      {/* ─── Main split grid ───────────────────────────────────────────────── */}
      <div className="relative flex-1 grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px]" style={{ zIndex: 2 }}>

        {/* ── LEFT PANEL ─ Headline + CTAs ─────────────────────────────── */}
        <div className="flex flex-col justify-center container-main lg:max-w-none lg:px-10 xl:px-16 pt-36 pb-10 lg:pt-32 lg:pb-10">
          <div className="max-w-[640px]">

            {/* Trust chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: shouldReduce ? 0 : 0.08 }}
              className="flex flex-wrap items-center gap-2 mb-11"
            >
              {trustSignals.map((s, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                             border border-ivory/10 bg-ivory/4
                             text-[11px] font-heading font-medium text-ivory/45 tracking-wide"
                >
                  <span className="w-1 h-1 rounded-full bg-gold/50 flex-shrink-0" />
                  {s.label}
                </span>
              ))}
            </motion.div>

            {/* Headline — word-level stagger */}
            <h1 className="mb-8" style={{ letterSpacing: '-0.025em' }}>
              <span className="block overflow-hidden" style={{ lineHeight: '1.04' }}>
                {["Oman's", 'Premier'].map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: shouldReduce ? 0 : 36 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.68, delay: shouldReduce ? 0 : 0.15 + i * 0.09, ease }}
                    className="inline-block mr-[0.28em] font-heading font-semibold text-ivory"
                    style={{ fontSize: 'clamp(2.5rem, 4.8vw, 4.25rem)' }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block overflow-hidden" style={{ lineHeight: '1.04' }}>
                {['Oilfield', 'Contractor.'].map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: shouldReduce ? 0 : 36 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.68, delay: shouldReduce ? 0 : 0.33 + i * 0.09, ease }}
                    className="inline-block mr-[0.22em] font-display italic text-gold-light"
                    style={{ fontSize: 'clamp(2.75rem, 5.2vw, 4.75rem)' }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Gold hairline — animated scaleX */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: shouldReduce ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="h-px w-16 bg-gold/35 mb-7 origin-left"
            />

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0, y: shouldReduce ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: shouldReduce ? 0 : 0.50, ease }}
              className="font-body text-ivory/50 max-w-[460px] mb-11"
              style={{ fontSize: '1.0625rem', lineHeight: '1.72' }}
            >
              Oman's preferred oilfield partner — trusted by Petroleum Development
              Oman since 2013. Thirteen years of safe, technically superior
              operations across the southern concession areas.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduce ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: shouldReduce ? 0 : 0.60 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4
                           bg-ivory text-green-dark font-heading font-semibold text-sm rounded-sm
                           transition-all duration-200 cursor-pointer group
                           hover:bg-gold hover:text-ivory shadow-premium-lg"
              >
                Request a Proposal
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4
                           border border-ivory/18 text-ivory/65 font-heading font-medium text-sm rounded-sm
                           transition-all duration-200 cursor-pointer
                           hover:border-ivory/35 hover:text-ivory"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ── RIGHT PANEL ─ Visual credentials ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: shouldReduce ? 0 : 0.2 }}
          className="hidden lg:flex flex-col justify-center relative overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #0A1810 0%, #111F17 100%)' }}
        >
          {/* Vertical separator */}
          <div className="absolute left-0 inset-y-0 w-px bg-gradient-to-b from-transparent via-ivory/8 to-transparent" />

          {/* Topographic field map SVG — parallax wrapper */}
          <motion.div
            className="absolute inset-0"
            style={{ y: topoY, scale: bgScale }}
          >
            <TopoMapSVG />
          </motion.div>

          {/* Gold ambient orb */}
          <div
            className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(184,147,42,0.07) 0%, transparent 65%)' }}
          />

          {/* Credential card — subtle parallax */}
          <div className="relative z-10 px-10 py-12">
            <motion.div
              initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: shouldReduce ? 0 : 0.55, ease }}
              className="rounded-2xl overflow-hidden relative"
              style={{
                y: cardY,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Gold top accent line — animated */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(184,147,42,0.5), transparent)',
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.0, delay: shouldReduce ? 0 : 0.7 }}
              />

              {/* Card header */}
              <div className="px-6 pt-5 pb-4 border-b border-ivory/6">
                <div className="flex items-center justify-between">
                  <div className="font-heading font-semibold text-ivory/88 text-sm">
                    Al Baraka Oilfield Services
                  </div>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-light/55 animate-pulse" />
                    <span className="text-[10px] font-body text-ivory/28">Active</span>
                  </span>
                </div>
                <div className="font-body text-xs text-ivory/32 mt-0.5">
                  Sultanate of Oman · Southern Concession Areas
                </div>
              </div>

              {/* Credential rows */}
              <div className="divide-y divide-ivory/5">
                {credentialItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: shouldReduce ? 0 : 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: shouldReduce ? 0 : 0.70 + i * 0.08 }}
                    className="flex items-center justify-between px-6 py-3.5"
                  >
                    <span className="font-body text-xs text-ivory/45">{item.label}</span>
                    <span className="font-heading font-semibold text-xs text-gold/80 tabular-nums">
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Card footer stat */}
              <div className="px-6 py-4 border-t border-ivory/8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-heading font-semibold text-xl text-ivory tabular-nums">99%</div>
                    <div className="font-body text-[10px] text-ivory/35 mt-0.5">
                      Safety record · All operations
                    </div>
                  </div>
                  <div className="w-px h-8 bg-ivory/8" />
                  <div className="text-right">
                    <div className="font-heading font-semibold text-xl text-gold tabular-nums">2M+</div>
                    <div className="font-body text-[10px] text-ivory/35 mt-0.5">
                      LTI-free man-hours logged
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* PDO badge below card */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: shouldReduce ? 0 : 1.0 }}
              className="mt-5 flex items-center gap-3"
            >
              <div className="h-px flex-1 bg-ivory/6" />
              <span className="text-[10px] font-heading text-ivory/25 tracking-widest uppercase">
                PDO Preferred Contractor · MEM Registered
              </span>
              <div className="h-px flex-1 bg-ivory/6" />
            </motion.div>
          </div>

          {/* Scroll hint */}
          {!shouldReduce && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
            >
              <div className="w-px h-8 bg-gradient-to-b from-ivory/0 to-ivory/15" />
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ChevronDown size={13} className="text-ivory/18" />
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* ─── Stats bar ─────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: shouldReduce ? 0 : 0.88 }}
        className="relative border-t border-ivory/[0.07] z-10"
      >
        <div className="container-main">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-5 px-4 sm:px-6 ${i < 3 ? 'border-r border-ivory/[0.07]' : ''}`}
              >
                <div className="font-heading font-semibold text-xl text-gold tabular-nums mb-0.5">
                  {stat.value}
                </div>
                <div className="font-heading text-ivory/60 text-xs font-medium tracking-wide">
                  {stat.label}
                </div>
                <div className="font-body text-ivory/25 text-[11px] hidden sm:block mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ─── Topographic field map SVG ─────────────────────────────────────────────
   Abstract concentric contour lines — geological survey aesthetic.          */
function TopoMapSVG() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 480 720"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <ellipse cx="280" cy="320" rx="310" ry="210" stroke="rgba(250,250,249,0.04)"  strokeWidth="1" />
      <ellipse cx="280" cy="320" rx="255" ry="168" stroke="rgba(250,250,249,0.05)"  strokeWidth="1" />
      <ellipse cx="280" cy="320" rx="200" ry="130" stroke="rgba(250,250,249,0.055)" strokeWidth="1" />
      <ellipse cx="280" cy="320" rx="148" ry="96"  stroke="rgba(250,250,249,0.06)"  strokeWidth="1" />
      <ellipse cx="280" cy="320" rx="100" ry="65"  stroke="rgba(250,250,249,0.065)" strokeWidth="1" />
      <ellipse cx="280" cy="320" rx="58"  ry="38"  stroke="rgba(250,250,249,0.06)"  strokeWidth="1" />
      <ellipse cx="280" cy="320" rx="26"  ry="18"  stroke="rgba(184,147,42,0.12)"   strokeWidth="1" />

      <ellipse cx="160" cy="520" rx="220" ry="140" stroke="rgba(250,250,249,0.03)"  strokeWidth="1" />
      <ellipse cx="160" cy="520" rx="165" ry="100" stroke="rgba(250,250,249,0.035)" strokeWidth="1" />
      <ellipse cx="160" cy="520" rx="112" ry="68"  stroke="rgba(250,250,249,0.04)"  strokeWidth="1" />
      <ellipse cx="160" cy="520" rx="68"  ry="42"  stroke="rgba(250,250,249,0.04)"  strokeWidth="1" />

      <line x1="0"   y1="180" x2="480" y2="460" stroke="rgba(250,250,249,0.025)" strokeWidth="0.75" strokeDasharray="4 8" />
      <line x1="0"   y1="360" x2="480" y2="640" stroke="rgba(250,250,249,0.02)"  strokeWidth="0.75" strokeDasharray="3 9" />
      <line x1="120" y1="0"   x2="400" y2="720" stroke="rgba(250,250,249,0.018)" strokeWidth="0.75" strokeDasharray="4 10" />

      <circle cx="280" cy="320" r="3"  fill="rgba(184,147,42,0.35)" />
      <circle cx="280" cy="320" r="6"  stroke="rgba(184,147,42,0.15)" strokeWidth="1" fill="none" />
      <circle cx="280" cy="320" r="10" stroke="rgba(184,147,42,0.07)" strokeWidth="1" fill="none" />
      <circle cx="160" cy="520" r="2.5" fill="rgba(184,147,42,0.25)" />
      <circle cx="160" cy="520" r="5"   stroke="rgba(184,147,42,0.10)" strokeWidth="1" fill="none" />

      <text x="300" y="246" fontSize="8" fill="rgba(250,250,249,0.12)" fontFamily="monospace" letterSpacing="1">-1200m</text>
      <text x="316" y="278" fontSize="7" fill="rgba(250,250,249,0.08)" fontFamily="monospace" letterSpacing="1">-1800m</text>
      <text x="326" y="308" fontSize="6" fill="rgba(250,250,249,0.06)" fontFamily="monospace" letterSpacing="1">-2400m</text>
    </svg>
  );
}
