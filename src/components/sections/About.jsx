import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import AmbientBackground from '../ui/AmbientBackground';

/*
  Design decisions:
  - Scroll-Triggered Storytelling (toolkit): left = identity narrative, right = visual proof
  - Swiss Modernism: mathematical grid, clear hierarchy
  - CLAUDE.md: large spacing, sand warm bg, no border overuse
  - Typography: H2 heading (Lexend, -0.02em), body Source Sans 3
  - Heritage card: dark green, NO heavy gradients (CLAUDE.md rule)
*/

const pillars = [
  "Deeply rooted in Oman's southern producing concession areas",
  'PDO-preferred contractor since 2013 — not just registered, trusted',
  'Ministry of Energy & Minerals registered and compliant',
  'Over 70% Omani workforce — Omanisation as conviction, not quota',
  'ISO 9001, OHSAS 18001, and ISO 14001 certified systems',
];

const milestones = [
  { year: '2011', text: 'Founded in the Sultanate of Oman' },
  { year: '2013', text: 'First major PDO contract awarded' },
  { year: '2016', text: 'EPC and pipeline capabilities expanded' },
  { year: '2020', text: 'Zero-LTI milestone — 2M+ man-hours without incident' },
  { year: '2024', text: 'Established as a regional leader in integrated oilfield services' },
];

export default function About() {
  const shouldReduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  return (
    <section className="section-pad bg-sand relative overflow-hidden">
      <AmbientBackground variant="sand" blobs />
      <div className="relative z-10 container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Identity narrative */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="label-section mb-5">Who We Are</div>

            <h2
              className="font-heading font-semibold text-green-dark text-balance mb-5"
              style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', letterSpacing: '-0.02em', lineHeight: '1.1' }}
            >
              Thirteen Years in Oman's<br />Southern Fields.
            </h2>

            <p className="font-body text-charcoal-light leading-relaxed mb-8" style={{ fontSize: '1.0625rem', lineHeight: '1.74' }}>
              Founded in Muscat in 2011, Al Baraka Oilfield Services has built its reputation
              entirely in Oman — not through expansion from abroad, but through years of
              consistent delivery in the southern concession areas where the work is hardest.
            </p>

            {/* Pillar checklist — clear, uncluttered */}
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: shouldReduce ? 0 : 0.06 } },
              }}
              className="space-y-3 mb-10"
            >
              {pillars.map((item, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden:   { opacity: 0, x: shouldReduce ? 0 : -12 },
                    visible:  { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
                  }}
                  className="flex items-start gap-3 font-body text-sm text-charcoal-light leading-relaxed"
                >
                  <CheckCircle size={14} className="text-green mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <Link to="/about" className="btn-primary group">
              Our Full Story
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right — Heritage card */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduce ? 0 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.1, ease }}
            className="relative"
          >
            <div className="bg-green rounded-2xl p-9 lg:p-10 relative overflow-hidden shadow-premium-lg">
              {/* Single subtle warmth orb — NOT a heavy gradient */}
              <div
                className="absolute -top-8 -right-8 w-36 h-36 rounded-full pointer-events-none opacity-15"
                style={{ background: 'radial-gradient(circle, #B8932A, transparent)' }}
              />

              <div className="relative">
                <div className="label-section mb-7 text-gold/50 [&::before]:bg-gold/50">
                  Our Heritage
                </div>

                <div className="space-y-5">
                  {milestones.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: shouldReduce ? 0 : 0.15 + i * 0.07 }}
                      className="flex items-start gap-5"
                    >
                      {/* Year */}
                      <span className="font-heading font-semibold text-sm text-gold tabular-nums w-9 flex-shrink-0 pt-0.5">
                        {item.year}
                      </span>
                      {/* Divider */}
                      <div className="flex flex-col items-center flex-shrink-0 pt-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold/40 flex-shrink-0" />
                        {i < milestones.length - 1 && (
                          <div className="w-px flex-1 bg-gold/12 mt-1 min-h-6" />
                        )}
                      </div>
                      {/* Text */}
                      <span className="font-body text-sm text-ivory/62 leading-relaxed">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating stat badge — subtle motion only */}
            <motion.div
              animate={shouldReduce ? {} : { y: [0, -5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 -left-4 bg-ivory rounded-xl px-5 py-4 shadow-card-hover"
            >
              <div className="font-heading font-semibold text-2xl text-green-dark tabular-nums mb-0.5">
                13+
              </div>
              <div className="font-body text-xs text-charcoal-muted">Years in Oman's Fields</div>
            </motion.div>

            {/* Gold accent dot */}
            <div className="absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full bg-gold shadow-premium" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
