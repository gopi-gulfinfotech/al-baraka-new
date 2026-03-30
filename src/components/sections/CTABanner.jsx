import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Shield, CheckCircle } from 'lucide-react';
import AmbientBackground from '../ui/AmbientBackground';

/*
  CTA Banner — final conversion section
  Motion enhancements:
  - Floating gold particle dots in background
  - Staggered text reveal with clip-path animation
  - Animated gold hairlines that extend outward
  - Trust signal sequential fade
*/

const trustSignals = [
  { icon: Shield,      text: 'PDO-approved since 2013' },
  { icon: CheckCircle, text: 'ISO 9001 · OHSAS 18001 · ISO 14001' },
  { icon: CheckCircle, text: '2M+ LTI-free man-hours' },
];

/* Particle positions for the CTA banner */
const ctaParticles = [
  { size: 2,   left: '5%',   top: '20%', anim: 'particleFloatA', dur: '9s',  delay: '0s' },
  { size: 3,   left: '15%',  top: '65%', anim: 'particleFloatB', dur: '12s', delay: '1.5s' },
  { size: 1.5, left: '80%',  top: '25%', anim: 'particleFloatC', dur: '8s',  delay: '3s' },
  { size: 2.5, left: '90%',  top: '70%', anim: 'particleFloatA', dur: '11s', delay: '0.8s' },
  { size: 2,   left: '65%',  top: '80%', anim: 'particleFloatD', dur: '14s', delay: '2.2s' },
  { size: 1.5, left: '30%',  top: '15%', anim: 'particleFloatB', dur: '10s', delay: '4s' },
  { size: 2,   left: '50%',  top: '85%', anim: 'particleFloatC', dur: '9.5s', delay: '1s' },
];

export default function CTABanner() {
  const shouldReduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  return (
    <section className="relative overflow-hidden bg-hero py-24 lg:py-32">
      <AmbientBackground variant="dark" />

      {/* Left red accent — Omani flag, restrained */}
      <div className="absolute left-0 inset-y-0 w-[3px] bg-gradient-to-b from-transparent via-red/40 to-transparent" />

      {/* Floating particles */}
      {!shouldReduce && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {ctaParticles.map((p, i) => (
            <div
              key={i}
              className="particle-dot"
              style={{
                width: p.size,
                height: p.size,
                left: p.left,
                top: p.top,
                background: 'rgba(184,147,42,0.45)',
                boxShadow: `0 0 ${p.size * 4}px rgba(184,147,42,0.25)`,
                animation: `${p.anim} ${p.dur} ease-in-out infinite`,
                animationDelay: p.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* Top/bottom gold hairlines — animated extend */}
      <motion.div
        className="absolute inset-x-0 top-0 h-px"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: 'linear-gradient(to right, transparent, rgba(184,147,42,0.25), transparent)',
          transformOrigin: 'center',
        }}
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 h-px"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: 'linear-gradient(to right, transparent, rgba(250,250,249,0.1), transparent)',
          transformOrigin: 'center',
        }}
      />

      {/* Single warm ambient orb */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(42,82,64,0.30) 0%, transparent 60%)',
        }}
      />

      <div className="container-main relative">
        <div className="max-w-2xl mx-auto text-center">

          {/* Gold label — animated hairlines extending outward */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45 }}
            className="flex items-center justify-center gap-3 mb-7"
          >
            <motion.div
              className="h-px bg-gold/45"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <span className="text-xs font-heading font-semibold tracking-[0.12em] uppercase text-gold/75">
              Partner With Us
            </span>
            <motion.div
              className="h-px bg-gold/45"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: shouldReduce ? 0 : 0.08, ease }}
            className="text-balance mb-5"
          >
            <span
              className="block font-heading font-semibold text-ivory"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.025em', lineHeight: '1.1' }}
            >
              Your Next Field Project
            </span>
            <span
              className="block font-display italic text-gold-light"
              style={{ fontSize: 'clamp(2rem, 3.8vw, 3.25rem)', lineHeight: '1.08' }}
            >
              Starts Here.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: shouldReduce ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: shouldReduce ? 0 : 0.18 }}
            className="font-body text-ivory/52 leading-relaxed mb-10"
            style={{ fontSize: '1.0625rem' }}
          >
            Workover rig deployment, EPC scopes, long-term manpower contracts —
            Al Baraka delivers with technical precision and an uncompromising safety culture.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: shouldReduce ? 0 : 0.28 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4
                         bg-ivory text-green-dark font-heading font-semibold text-sm rounded-sm
                         transition-all duration-200 cursor-pointer group
                         hover:bg-gold hover:text-ivory shadow-premium-lg
                         w-full sm:w-auto justify-center"
            >
              Contact Sales
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+96824000000"
              className="inline-flex items-center gap-2.5 px-8 py-4
                         border border-ivory/20 text-ivory/75 font-heading font-medium text-sm rounded-sm
                         transition-all duration-200 cursor-pointer
                         hover:border-ivory/40 hover:text-ivory
                         w-full sm:w-auto justify-center"
            >
              <Phone size={15} />
              +968 2400 0000
            </a>
          </motion.div>

          {/* Trust signals — sequential fade */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: shouldReduce ? 0 : 0.08 } } }}
            className="flex flex-wrap items-center justify-center gap-5"
          >
            {trustSignals.map((signal, i) => {
              const Icon = signal.icon;
              return (
                <motion.span
                  key={i}
                  variants={{
                    hidden:   { opacity: 0, y: shouldReduce ? 0 : 6 },
                    visible:  { opacity: 1, y: 0, transition: { duration: 0.3 } },
                  }}
                  className="flex items-center gap-1.5 text-xs font-body text-ivory/35"
                >
                  <Icon size={12} className="text-gold/45" />
                  {signal.text}
                </motion.span>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
