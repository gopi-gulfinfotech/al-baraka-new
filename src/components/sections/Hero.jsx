import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const trustSignals = [
  { label: 'PDO Approved' },
  { label: 'Est. 2011' },
  { label: 'MEM Registered' },
];

const stats = [
  { value: '13+', label: 'Years Active', sub: 'Since 2011' },
  { value: '70%+', label: 'Omanisation', sub: 'Omani Workforce' },
  { value: '6', label: 'Service Lines', sub: 'Integrated' },
  { value: '99%', label: 'Safety Record', sub: 'LTI-Free' },
];

// Precomputed particles — stable across renders
const PARTICLES = Array.from({ length: 32 }, (_, i) => ({
  id: i,
  left: 38 + ((i * 1.9 + i * i * 0.07) % 54),
  startBottom: 6 + ((i * 6.3) % 30),
  size: i % 6 === 0 ? 3.5 : i % 3 === 0 ? 2.5 : 2,
  dur: 5.5 + (i % 6) * 1.2,
  delay: i * 0.32,
  driftX: i % 2 === 0 ? 10 : -10,
  isTeal: i % 5 === 0,
}));

export default function Hero() {
  const shouldReduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: '#060e09' }}
      aria-label="Hero"
    >
      <AtmosphericBg reduced={shouldReduce} />
      <RigScene reduced={shouldReduce} />
      {!shouldReduce && <ParticleField />}

      {/* Gradient mask: left opaque for text, right open for rig */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: [
            'linear-gradient(105deg,#060e09 0%,#060e09 26%,rgba(6,14,9,0.88) 44%,rgba(6,14,9,0.52) 60%,rgba(6,14,9,0.15) 76%,transparent 88%)',
            'linear-gradient(to bottom,rgba(6,14,9,0.65) 0%,transparent 18%,transparent 76%,#060e09 100%)',
          ].join(', '),
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.011) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.011) 1px,transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      {/* Film grain */}
      <div className="absolute inset-0 noise-grain pointer-events-none z-[2]" style={{ opacity: 0.04 }} />

      {/* Scan line */}
      {!shouldReduce && <div className="scan-line z-[2]" />}

      {/* ── Content ── */}
      <div className="relative z-[3] flex-1 flex items-center">
        <div className="container-main w-full pt-32 pb-14 lg:pt-40 lg:pb-16">
          <div className="max-w-[700px]">

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: shouldReduce ? 0 : 0.1 }}
              className="flex flex-wrap items-center gap-2 mb-10"
            >
              {trustSignals.map((s, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-ivory/10 bg-ivory/[0.04] text-[11px] font-heading font-medium text-ivory/50 tracking-wide"
                >
                  <span className="w-1 h-1 rounded-full bg-gold/60 flex-shrink-0" />
                  {s.label}
                </span>
              ))}
            </motion.div>

            {/* Headline */}
            <h1 className="mb-8" style={{ letterSpacing: '-0.03em' }}>
              <span className="block overflow-hidden" style={{ lineHeight: '1.02' }}>
                {["Engineering", "Oman's"].map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: shouldReduce ? 0 : 44 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.74, delay: shouldReduce ? 0 : 0.2 + i * 0.1, ease }}
                    className="inline-block mr-[0.22em] font-heading font-semibold text-ivory"
                    style={{ fontSize: 'clamp(2.6rem,5.2vw,5rem)' }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block overflow-hidden" style={{ lineHeight: '1.02' }}>
                {['Oilfield', 'Future.'].map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: shouldReduce ? 0 : 44 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.74, delay: shouldReduce ? 0 : 0.4 + i * 0.1, ease }}
                    className="inline-block mr-[0.22em] font-display italic text-gold-light"
                    style={{ fontSize: 'clamp(2.9rem,5.6vw,5.4rem)' }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Gold rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.85, delay: shouldReduce ? 0 : 0.62, ease }}
              className="h-px w-20 bg-gold/40 mb-7 origin-left"
            />

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: shouldReduce ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: shouldReduce ? 0 : 0.55, ease }}
              className="font-body text-ivory/52 max-w-[520px] mb-11"
              style={{ fontSize: '1.0625rem', lineHeight: '1.74' }}
            >
              Precision oilfield services powered by local expertise, proven safety,
              and dependable field execution across Oman's southern concession areas.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduce ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: shouldReduce ? 0 : 0.7 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-ivory text-green-dark font-heading font-semibold text-sm rounded-sm transition-all duration-200 cursor-pointer group hover:bg-gold hover:text-ivory shadow-premium-lg"
              >
                Request a Proposal
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-ivory/18 text-ivory/70 font-heading font-medium text-sm rounded-sm transition-all duration-200 cursor-pointer hover:border-ivory/35 hover:text-ivory"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: shouldReduce ? 0 : 1.05 }}
        className="relative border-t border-ivory/[0.07] z-[3]"
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

// ─── Atmospheric background ────────────────────────────────────────────────

function AtmosphericBg({ reduced }) {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
      {/* Deep green-amber bloom behind rig position */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 75% 65% at 72% 35%,rgba(184,147,42,0.11) 0%,rgba(27,58,45,0.13) 45%,transparent 72%)',
      }} />
      {/* Left ambient fill */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 55% 55% at 12% 58%,rgba(27,58,45,0.22) 0%,transparent 68%)',
      }} />
      {/* Ground warmth */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '38%',
        background: 'linear-gradient(to top,rgba(27,58,45,0.28) 0%,rgba(184,147,42,0.06) 45%,transparent 100%)',
      }} />

      {!reduced && (
        <>
          {/* Large drifting gold orb */}
          <motion.div
            style={{
              position: 'absolute',
              width: '58vw', height: '58vw',
              right: '-10vw', top: '-18vh',
              borderRadius: '9999px',
              background: 'radial-gradient(circle,rgba(184,147,42,0.09) 0%,rgba(27,58,45,0.07) 50%,transparent 72%)',
              filter: 'blur(55px)',
            }}
            animate={{ scale: [1, 1.07, 1], x: [0, '2.5vw', 0], y: [0, '2vh', 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Teal/teal secondary orb */}
          <motion.div
            style={{
              position: 'absolute',
              width: '38vw', height: '38vw',
              right: '8vw', bottom: '12vh',
              borderRadius: '9999px',
              background: 'radial-gradient(circle,rgba(76,173,180,0.07) 0%,rgba(27,58,45,0.08) 55%,transparent 72%)',
              filter: 'blur(70px)',
            }}
            animate={{ scale: [1, 1.05, 1], x: [0, '-2vw', 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
          />
          {/* Horizon haze */}
          <motion.div
            style={{
              position: 'absolute', bottom: '7%', left: 0, right: 0, height: '14%',
              background: 'radial-gradient(ellipse 85% 100% at 62% 100%,rgba(184,147,42,0.13) 0%,rgba(27,58,45,0.07) 55%,transparent 78%)',
              filter: 'blur(22px)',
            }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}
    </div>
  );
}

// ─── Particle field ────────────────────────────────────────────────────────

function ParticleField() {
  return (
    <div className="absolute inset-0 pointer-events-none z-[1]" aria-hidden="true">
      {PARTICLES.map(p => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            bottom: `${p.startBottom}%`,
            width: p.size,
            height: p.size,
            background: p.isTeal ? 'rgba(76,200,210,0.55)' : 'rgba(217,191,118,0.6)',
            boxShadow: p.isTeal
              ? '0 0 7px 2px rgba(76,200,210,0.22)'
              : '0 0 7px 2px rgba(217,191,118,0.22)',
          }}
          animate={{
            y: [0, -60, -130],
            opacity: [0, 0.9, 0],
            x: [0, p.driftX, p.driftX * 0.5],
          }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: 'easeOut' }}
        />
      ))}
    </div>
  );
}

// ─── Rig scene ─────────────────────────────────────────────────────────────

function RigScene({ reduced }) {
  // Tower geometry: apex → base legs
  // Apex (400,58), left base (288,492), right base (512,492)
  const apex  = { x: 400, y: 58 };
  const baseL = { x: 288, y: 492 };
  const baseR = { x: 512, y: 492 };
  const span  = baseR.x - baseL.x; // 224
  const height = baseL.y - apex.y; // 434

  // Tower level y-values and their x extents
  const levelYs = [58, 132, 208, 284, 360, 426, 492];
  const levels = levelYs.map(y => {
    const t = (y - apex.y) / height;
    return { y, xl: apex.x - (span / 2) * t, xr: apex.x + (span / 2) * t };
  });

  const GOLD      = 'rgba(196,162,74,0.72)';
  const GOLD_DIM  = 'rgba(196,162,74,0.30)';
  const GOLD_STR  = 'rgba(196,162,74,0.88)';
  const DARK      = '#081009';

  return (
    <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true">
      {/* Wrapper positions rig right-of-center */}
      <div
        style={{
          position: 'absolute',
          right: '-2%',
          top: 0,
          bottom: 0,
          width: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          paddingRight: '2%',
          paddingBottom: '5.5%',
        }}
      >
        <motion.svg
          viewBox="0 0 820 668"
          preserveAspectRatio="xMaxYMax meet"
          style={{ width: '70%', maxWidth: 820, height: '100%', overflow: 'visible' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.25 }}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="hg-strut" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c8a84e" />
              <stop offset="100%" stopColor="#7a6228" />
            </linearGradient>
            <linearGradient id="hg-steel" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#182618" />
              <stop offset="100%" stopColor="#091009" />
            </linearGradient>
            <radialGradient id="hg-rigbloom" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor="rgba(184,147,42,0.14)" />
              <stop offset="40%" stopColor="rgba(27,58,45,0.09)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <radialGradient id="hg-ground" cx="50%" cy="0%" r="80%">
              <stop offset="0%" stopColor="rgba(184,147,42,0.18)" />
              <stop offset="55%" stopColor="rgba(27,58,45,0.07)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <filter id="hg-bloom" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="18" />
            </filter>
            <filter id="hg-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="5" result="b" />
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="hg-softblur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>

          {/* ══ LARGE BLOOM BEHIND RIG ══ */}
          <ellipse cx="400" cy="310" rx="270" ry="320"
            fill="url(#hg-rigbloom)" filter="url(#hg-bloom)"
          />

          {/* ══ GROUND PLANE ══ */}
          <ellipse cx="400" cy="600" rx="360" ry="24" fill="url(#hg-ground)" />
          <line x1="60" y1="598" x2="750" y2="598"
            stroke="rgba(196,162,74,0.2)" strokeWidth="1.5"
          />

          {/* ══ GROUND-LEVEL EQUIPMENT (rendered behind tower) ══ */}

          {/* Mud tanks — left */}
          <rect x="96"  y="543" width="140" height="55" rx="3"
            fill="#0b1811" stroke="rgba(196,162,74,0.35)" strokeWidth="1.5" />
          <line x1="166" y1="543" x2="166" y2="598"
            stroke="rgba(196,162,74,0.18)" strokeWidth="1.5" />
          <rect x="105" y="552" width="50" height="13" rx="2"
            fill="rgba(27,58,45,0.9)" stroke="rgba(196,162,74,0.22)" strokeWidth="1" />
          <rect x="172" y="552" width="50" height="13" rx="2"
            fill="rgba(27,58,45,0.9)" stroke="rgba(196,162,74,0.22)" strokeWidth="1" />

          {/* Mud tanks — right */}
          <rect x="564" y="543" width="128" height="55" rx="3"
            fill="#0b1811" stroke="rgba(196,162,74,0.35)" strokeWidth="1.5" />
          <line x1="628" y1="543" x2="628" y2="598"
            stroke="rgba(196,162,74,0.18)" strokeWidth="1.5" />

          {/* Pipe rack */}
          {[550, 557, 564, 571].map((y, i) => (
            <line key={y} x1="648" y1={y} x2="718" y2={y}
              stroke="rgba(196,162,74,0.55)" strokeWidth={i === 0 ? 3.5 : 2.5}
              strokeLinecap="round"
            />
          ))}
          <line x1="648" y1="550" x2="648" y2="571"
            stroke="rgba(196,162,74,0.42)" strokeWidth="2.5" />
          <line x1="718" y1="550" x2="718" y2="571"
            stroke="rgba(196,162,74,0.42)" strokeWidth="2.5" />

          {/* ══ FLARE STACK ══ */}
          <rect x="660" y="308" width="10" height="268" rx="3"
            fill="#0c1711" stroke="rgba(196,162,74,0.36)" strokeWidth="1.5" />
          <line x1="642" y1="396" x2="664" y2="348"
            stroke="rgba(196,162,74,0.26)" strokeWidth="1.5" />
          <line x1="680" y1="396" x2="666" y2="348"
            stroke="rgba(196,162,74,0.26)" strokeWidth="1.5" />
          {/* Flare flame */}
          {!reduced ? (
            <>
              <motion.ellipse cx="665" cy="301" rx="15" ry="13"
                fill="rgba(255,145,12,0.55)"
                style={{ filter: 'blur(3px)' }}
                animate={{
                  rx: [15,20,12,17,15], ry: [13,17,10,14,13],
                  opacity: [0.55,0.78,0.44,0.65,0.55],
                }}
                transition={{ duration: 0.44, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.ellipse cx="665" cy="299" rx="8" ry="9"
                fill="rgba(255,225,65,0.88)"
                animate={{ ry: [9,13,7,11,9], opacity: [0.88,1,0.72,0.92,0.88] }}
                transition={{ duration: 0.36, repeat: Infinity, ease: 'easeInOut', delay: 0.07 }}
              />
              <motion.ellipse cx="665" cy="306" rx="28" ry="22"
                fill="rgba(255,130,8,0.12)"
                style={{ filter: 'blur(9px)' }}
                animate={{ rx: [28,35,22,30,28], opacity: [0.12,0.22,0.08,0.18,0.12] }}
                transition={{ duration: 0.55, repeat: Infinity, ease: 'easeInOut' }}
              />
            </>
          ) : (
            <ellipse cx="665" cy="302" rx="12" ry="10" fill="rgba(255,145,12,0.5)" />
          )}

          {/* ══ PUMP HOUSE ══ */}
          <rect x="102" y="468" width="84" height="62" rx="2"
            fill="#0c1811" stroke="rgba(196,162,74,0.4)" strokeWidth="1.5" />
          {/* Exhaust stacks */}
          {[114, 135, 155].map((x, i) => (
            <rect key={x} x={x} y={438 + i * 4} width="9" height={32 - i * 4} rx="2"
              fill="#0d1910" stroke="rgba(196,162,74,0.35)" strokeWidth="1.5" />
          ))}
          {/* Steam puffs */}
          {!reduced && [118, 139, 159].map((cx, i) => (
            <motion.ellipse
              key={cx}
              cx={cx} cy={432 - i * 3} rx="7" ry="5"
              fill="rgba(190,190,190,0.1)"
              style={{ filter: 'blur(5px)' }}
              animate={{ y: [0,-28,-62,-98], opacity: [0,0.32,0.18,0], rx: [7,12,20,28] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeOut', delay: i * 0.85 }}
            />
          ))}

          {/* ══ SUBSTRUCTURE ══ */}
          <rect x="268" y="510" width="60" height="66" rx="2"
            fill="#0d1912" stroke="rgba(196,162,74,0.45)" strokeWidth="1.5" />
          <rect x="472" y="510" width="60" height="66" rx="2"
            fill="#0d1912" stroke="rgba(196,162,74,0.45)" strokeWidth="1.5" />
          {/* Cross braces */}
          <line x1="268" y1="524" x2="532" y2="558"
            stroke="rgba(196,162,74,0.30)" strokeWidth="2" />
          <line x1="532" y1="524" x2="268" y2="558"
            stroke="rgba(196,162,74,0.30)" strokeWidth="2" />
          <line x1="268" y1="542" x2="532" y2="542"
            stroke="rgba(196,162,74,0.22)" strokeWidth="1.5" />

          {/* ══ DRILL FLOOR PLATFORM ══ */}
          <rect x="248" y="492" width="304" height="20" rx="2"
            fill="#0f1e14" stroke={GOLD} strokeWidth="2.2" />
          {Array.from({ length: 15 }, (_, i) => 262 + i * 19).map(x => (
            <line key={x} x1={x} y1={492} x2={x} y2={512}
              stroke="rgba(196,162,74,0.16)" strokeWidth="1" />
          ))}

          {/* ══ DRAWWORKS ══ */}
          <rect x="278" y="456" width="82" height="38" rx="3"
            fill="#0d1912" stroke={GOLD} strokeWidth="1.8" />
          {!reduced ? (
            <motion.g
              animate={{ rotate: 360 }}
              style={{ transformOrigin: '316px 475px' }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            >
              <circle cx="316" cy="475" r="13" fill={DARK} stroke={GOLD_STR} strokeWidth="2.5" />
              <line x1="316" y1="462" x2="316" y2="488" stroke="rgba(196,162,74,0.62)" strokeWidth="2" />
              <line x1="303" y1="475" x2="329" y2="475" stroke="rgba(196,162,74,0.62)" strokeWidth="2" />
              <line x1="307" y1="465" x2="325" y2="485" stroke="rgba(196,162,74,0.38)" strokeWidth="1.5" />
              <line x1="325" y1="465" x2="307" y2="485" stroke="rgba(196,162,74,0.38)" strokeWidth="1.5" />
              <circle cx="316" cy="475" r="4" fill="#0a1510" stroke="rgba(196,162,74,0.5)" strokeWidth="1.5" />
            </motion.g>
          ) : (
            <circle cx="316" cy="475" r="13" fill={DARK} stroke={GOLD_STR} strokeWidth="2.5" />
          )}
          {/* Console panel */}
          <rect x="374" y="462" width="26" height="22" rx="2"
            fill="#0a140d" stroke="rgba(196,162,74,0.38)" strokeWidth="1" />
          <rect x="378" y="466" width="8" height="4" rx="1" fill="rgba(76,190,200,0.6)" />
          <rect x="388" y="466" width="8" height="4" rx="1" fill="rgba(196,162,74,0.55)" />

          {/* ══ DOGHOUSE ══ */}
          <rect x="204" y="454" width="60" height="58" rx="2"
            fill="#0c1811" stroke="rgba(196,162,74,0.42)" strokeWidth="1.5" />
          <rect x="213" y="462" width="22" height="17" rx="1"
            fill="rgba(180,210,255,0.07)" stroke="rgba(196,162,74,0.36)" strokeWidth="1" />
          <rect x="240" y="474" width="14" height="38" rx="1"
            fill="rgba(196,162,74,0.1)" stroke="rgba(196,162,74,0.36)" strokeWidth="1" />
          {!reduced && (
            <motion.rect x="213" y="462" width="22" height="17" rx="1"
              fill="rgba(255,230,145,0.1)"
              animate={{ opacity: [0.1, 0.24, 0.1] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}

          {/* ══ TOWER SILHOUETTE (fill behind lattice) ══ */}
          <polygon
            points={`${apex.x},${apex.y} ${baseL.x},${baseL.y} ${baseR.x},${baseR.y}`}
            fill="#070f08" opacity="0.94"
          />

          {/* Main legs */}
          <line x1={apex.x} y1={apex.y} x2={baseL.x} y2={baseL.y}
            stroke="url(#hg-strut)" strokeWidth="6" strokeLinecap="round" />
          <line x1={apex.x} y1={apex.y} x2={baseR.x} y2={baseR.y}
            stroke="url(#hg-strut)" strokeWidth="6" strokeLinecap="round" />

          {/* Horizontal cross-members */}
          {levels.slice(1).map(({ y, xl, xr }) => (
            <line key={y} x1={xl} y1={y} x2={xr} y2={y}
              stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
          ))}

          {/* Diagonal X bracing — bay by bay */}
          {levels.slice(0, -1).map((lo, i) => {
            const hi = levels[i + 1];
            return (
              <g key={i}>
                <line x1={lo.xl} y1={lo.y} x2={hi.xr} y2={hi.y}
                  stroke={GOLD_DIM} strokeWidth="1.8" strokeLinecap="round" />
                <line x1={lo.xr} y1={lo.y} x2={hi.xl} y2={hi.y}
                  stroke={GOLD_DIM} strokeWidth="1.8" strokeLinecap="round" />
              </g>
            );
          })}

          {/* Monkey board / setback platform at level 4 */}
          {(() => {
            const lv = levels[4];
            return (
              <rect x={lv.xl - 8} y={lv.y - 5} width={lv.xr - lv.xl + 16} height="9" rx="1.5"
                fill="#0e1d12" stroke="rgba(196,162,74,0.52)" strokeWidth="1.5" />
            );
          })()}

          {/* ══ CROWN BLOCK ASSEMBLY ══ */}
          <rect x="368" y="43" width="64" height="33" rx="3"
            fill="#0e1d12" stroke={GOLD_STR} strokeWidth="2.2" />
          {/* Top cap bar */}
          <rect x="360" y="49" width="80" height="10" rx="2"
            fill="rgba(196,162,74,0.72)" />
          {/* Center sheave — rotates */}
          {!reduced ? (
            <motion.g
              animate={{ rotate: 360 }}
              style={{ transformOrigin: '400px 62px' }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
            >
              <circle cx="400" cy="62" r="12" fill={DARK} stroke={GOLD_STR} strokeWidth="2.5" />
              <line x1="400" y1="50" x2="400" y2="74" stroke="rgba(196,162,74,0.68)" strokeWidth="2" />
              <line x1="388" y1="62" x2="412" y2="62" stroke="rgba(196,162,74,0.68)" strokeWidth="2" />
              <line x1="391" y1="53" x2="409" y2="71" stroke="rgba(196,162,74,0.42)" strokeWidth="1.3" />
              <line x1="409" y1="53" x2="391" y2="71" stroke="rgba(196,162,74,0.42)" strokeWidth="1.3" />
              <circle cx="400" cy="62" r="4.5" fill="#0c1810" stroke="rgba(196,162,74,0.48)" strokeWidth="1.5" />
            </motion.g>
          ) : (
            <circle cx="400" cy="62" r="12" fill={DARK} stroke={GOLD_STR} strokeWidth="2.5" />
          )}
          {/* Side sheaves */}
          {[380, 420].map((cx, si) => (
            !reduced ? (
              <motion.g key={cx}
                animate={{ rotate: si === 0 ? -360 : 360 }}
                style={{ transformOrigin: `${cx}px 62px` }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
              >
                <circle cx={cx} cy="62" r="9" fill={DARK} stroke="rgba(196,162,74,0.65)" strokeWidth="2" />
                <line x1={cx} y1="53" x2={cx} y2="71" stroke="rgba(196,162,74,0.52)" strokeWidth="1.5" />
                <line x1={cx - 9} y1="62" x2={cx + 9} y2="62" stroke="rgba(196,162,74,0.52)" strokeWidth="1.5" />
              </motion.g>
            ) : (
              <circle key={cx} cx={cx} cy="62" r="9" fill={DARK} stroke="rgba(196,162,74,0.65)" strokeWidth="2" />
            )
          ))}

          {/* ══ WIRE LINES (crown → floor, full-height animated cables) ══ */}
          {[385, 392, 400, 408, 415].map((x, idx) => (
            !reduced ? (
              <motion.line
                key={x}
                x1={x} y1={74} x2={x} y2={495}
                stroke={idx === 2 ? 'rgba(196,162,74,0.52)' : 'rgba(196,162,74,0.26)'}
                strokeWidth={idx === 2 ? 2.5 : 1.6}
                strokeDasharray="7 5"
                animate={{ strokeDashoffset: [0, -24] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
              />
            ) : (
              <line key={x} x1={x} y1={74} x2={x} y2={495}
                stroke="rgba(196,162,74,0.28)" strokeWidth="1.6" />
            )
          ))}

          {/* ══ TRAVELING BLOCK (moves up / down) ══ */}
          {!reduced ? (
            <motion.g
              animate={{ y: [0, 158, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
            >
              {/* Block body */}
              <rect x="381" y="152" width="38" height="46" rx="3"
                fill="#0e1d12" stroke={GOLD_STR} strokeWidth="2.3" />
              {/* Sheave circles (static inside block — visual only) */}
              <circle cx="391" cy="170" r="7.5" fill={DARK} stroke="rgba(196,162,74,0.7)" strokeWidth="2" />
              <circle cx="409" cy="170" r="7.5" fill={DARK} stroke="rgba(196,162,74,0.7)" strokeWidth="2" />
              <line x1="391" y1="162" x2="391" y2="178" stroke="rgba(196,162,74,0.5)" strokeWidth="1.5" />
              <line x1="383" y1="170" x2="399" y2="170" stroke="rgba(196,162,74,0.5)" strokeWidth="1.5" />
              <line x1="409" y1="162" x2="409" y2="178" stroke="rgba(196,162,74,0.5)" strokeWidth="1.5" />
              <line x1="401" y1="170" x2="417" y2="170" stroke="rgba(196,162,74,0.5)" strokeWidth="1.5" />
              {/* Bottom cap */}
              <rect x="386" y="193" width="28" height="5" rx="1" fill="rgba(196,162,74,0.55)" />
              {/* Swivel + hook */}
              <line x1="400" y1="198" x2="400" y2="214" stroke={GOLD_STR} strokeWidth="3.5" strokeLinecap="round" />
              <circle cx="400" cy="211" r="6.5" fill="#0e1d12" stroke={GOLD_STR} strokeWidth="2" />
              <line x1="400" y1="217" x2="400" y2="234" stroke="rgba(196,162,74,0.78)" strokeWidth="3" strokeLinecap="round" />
              <path d="M 400 234 Q 391 234 388 246 Q 385 258 394 261 Q 403 264 408 254"
                fill="none" stroke="rgba(196,162,74,0.82)" strokeWidth="3" strokeLinecap="round" />
              {/* Ambient glow on block */}
              <circle cx="400" cy="205" r="30"
                fill="rgba(184,147,42,0.055)"
                style={{ filter: 'blur(10px)' }}
              />
            </motion.g>
          ) : (
            <g>
              <rect x="381" y="245" width="38" height="46" rx="3"
                fill="#0e1d12" stroke={GOLD_STR} strokeWidth="2.3" />
              <circle cx="391" cy="263" r="7.5" fill={DARK} stroke="rgba(196,162,74,0.7)" strokeWidth="2" />
              <circle cx="409" cy="263" r="7.5" fill={DARK} stroke="rgba(196,162,74,0.7)" strokeWidth="2" />
              <line x1="400" y1="291" x2="400" y2="310" stroke="rgba(196,162,74,0.75)" strokeWidth="3" strokeLinecap="round" />
            </g>
          )}

          {/* ══ ROTARY TABLE ══ */}
          {!reduced ? (
            <motion.g
              animate={{ rotate: 360 }}
              style={{ transformOrigin: '400px 498px' }}
              transition={{ duration: 2.1, repeat: Infinity, ease: 'linear' }}
            >
              <circle cx="400" cy="498" r="21" fill={DARK} stroke={GOLD_STR} strokeWidth="3" />
              <circle cx="400" cy="498" r="11" fill="#0c1610" stroke="rgba(196,162,74,0.55)" strokeWidth="2" />
              {[0, 60, 120, 180, 240, 300].map(angle => {
                const r = (angle * Math.PI) / 180;
                return (
                  <line key={angle}
                    x1={400 + 11 * Math.cos(r)} y1={498 + 11 * Math.sin(r)}
                    x2={400 + 21 * Math.cos(r)} y2={498 + 21 * Math.sin(r)}
                    stroke="rgba(196,162,74,0.52)" strokeWidth="2.3"
                  />
                );
              })}
            </motion.g>
          ) : (
            <circle cx="400" cy="498" r="21" fill={DARK} stroke={GOLD_STR} strokeWidth="3" />
          )}

          {/* ══ DRILL STRING (below rotary table, going to ground) ══ */}
          {!reduced ? (
            <motion.line
              x1="400" y1="519" x2="400" y2="576"
              stroke="rgba(196,162,74,0.58)" strokeWidth="4.5"
              strokeDasharray="11 8"
              animate={{ strokeDashoffset: [0, -38] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
          ) : (
            <line x1="400" y1="519" x2="400" y2="576"
              stroke="rgba(196,162,74,0.48)" strokeWidth="4.5" />
          )}

          {/* Drill floor flood glow */}
          {!reduced && (
            <motion.ellipse cx="400" cy="512" rx="135" ry="18"
              fill="rgba(245,185,65,0.07)"
              style={{ filter: 'blur(10px)' }}
              animate={{ rx: [135,152,135], opacity: [0.07,0.14,0.07] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}

          {/* Rig nameplate */}
          <rect x="358" y="473" width="84" height="16" rx="2"
            fill="#060e08" stroke="rgba(196,162,74,0.42)" strokeWidth="1" />
          <text x="400" y="485" textAnchor="middle"
            fontSize="7.5" fill="rgba(196,162,74,0.58)"
            fontFamily="monospace" letterSpacing="1.4"
          >
            AL BARAKA · RIG 01
          </text>

          {/* ══ LIGHTING / BEACONS ══ */}

          {/* Crown beacon — red blink */}
          {!reduced ? (
            <motion.g filter="url(#hg-glow)">
              <motion.circle cx="400" cy="41" r="6"
                fill="#ff3030"
                animate={{ opacity: [1,0.06,1,0.06,1], r: [6,4.5,6,4.5,6] }}
                transition={{ duration: 2.5, repeat: Infinity, times: [0,0.18,0.5,0.68,1] }}
              />
              <motion.circle cx="400" cy="41" r="12"
                fill="rgba(255,48,48,0.13)"
                style={{ filter: 'blur(4px)' }}
                animate={{ opacity: [0.13,0,0.13,0,0.13], r: [12,16,12,16,12] }}
                transition={{ duration: 2.5, repeat: Infinity, times: [0,0.18,0.5,0.68,1] }}
              />
            </motion.g>
          ) : (
            <circle cx="400" cy="41" r="6" fill="#ff3030" />
          )}

          {/* Level amber lights */}
          {levels.slice(1, 5).map(({ y, xl, xr }, i) => (
            !reduced ? (
              <g key={y}>
                <motion.circle cx={xl - 5} cy={y} r="3.5"
                  fill="#f2b030" filter="url(#hg-glow)"
                  animate={{ opacity: [0.45,1,0.45] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.55 }}
                />
                <motion.circle cx={xr + 5} cy={y} r="3.5"
                  fill="#f2b030" filter="url(#hg-glow)"
                  animate={{ opacity: [1,0.38,1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.55 + 1.5 }}
                />
              </g>
            ) : (
              <g key={y}>
                <circle cx={xl - 5} cy={y} r="3.5" fill="#f2b030" />
                <circle cx={xr + 5} cy={y} r="3.5" fill="#f2b030" />
              </g>
            )
          ))}

          {/* ══ SUBTLE STRUCTURAL VIBRATION ══ */}
          {/* Wrapped in motion.g on the outer SVG for micro-shudder effect — see below */}

        </motion.svg>
      </div>
    </div>
  );
}
