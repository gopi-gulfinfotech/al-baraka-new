import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Shield, CheckCircle } from 'lucide-react';
import AmbientBackground from '../ui/AmbientBackground';

/*
  Design decisions:
  - Enterprise Gateway CTA (toolkit): Contact Sales primary + Call secondary
  - Trust signals strip below buttons: 3 brief credentials (Trust & Authority)
  - CLAUDE.md: avoid heavy gradients → single radial + linear only
  - DM Serif Display italic accent in headline for premium feel
  - Last dark section on the page — provides visual closure
*/

const trustSignals = [
  { icon: Shield,        text: 'PDO-approved since 2013' },
  { icon: CheckCircle,   text: 'ISO 9001 · OHSAS 18001 · ISO 14001' },
  { icon: CheckCircle,   text: '2M+ LTI-free man-hours' },
];

export default function CTABanner() {
  const shouldReduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  return (
    <section className="relative overflow-hidden bg-hero py-24 lg:py-32">
      <AmbientBackground variant="dark" />
      {/* Left red accent — Omani flag, restrained */}
      <div className="absolute left-0 inset-y-0 w-[3px] bg-gradient-to-b from-transparent via-red/40 to-transparent" />

      {/* Top/bottom gold hairlines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ivory/10 to-transparent" />

      {/* Single warm ambient orb — NOT a heavy gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(42,82,64,0.30) 0%, transparent 60%)',
        }}
      />

      <div className="container-main relative">
        <div className="max-w-2xl mx-auto text-center">

          {/* Gold label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45 }}
            className="flex items-center justify-center gap-3 mb-7"
          >
            <div className="h-px w-8 bg-gold/45" />
            <span className="text-xs font-heading font-semibold tracking-[0.12em] uppercase text-gold/75">
              Partner With Us
            </span>
            <div className="h-px w-8 bg-gold/45" />
          </motion.div>

          {/* Headline — Lexend + DM Serif Display italic accent */}
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

          {/* Trust signals strip */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: shouldReduce ? 0 : 0.38 }}
            className="flex flex-wrap items-center justify-center gap-5"
          >
            {trustSignals.map((signal, i) => {
              const Icon = signal.icon;
              return (
                <span key={i} className="flex items-center gap-1.5 text-xs font-body text-ivory/35">
                  <Icon size={12} className="text-gold/45" />
                  {signal.text}
                </span>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
