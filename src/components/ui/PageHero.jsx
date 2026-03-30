import { motion } from 'framer-motion';
import AmbientBackground from './AmbientBackground';

/*
  Shared inner-page hero — consistent typography hierarchy across all pages.
  Typography: label-section → H1 (clamp) → body sub-copy
  CLAUDE.md: large spacing, no heavy gradients, red left accent
*/
export default function PageHero({ label, title, subtitle }) {
  return (
    <section className="relative bg-hero pt-32 pb-24 lg:pb-32 overflow-hidden">
      <AmbientBackground variant="dark" blobs={false} />
      {/* Ambient radial depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 65% 60% at 75% 30%, rgba(42,82,64,0.28) 0%, transparent 60%)' }}
      />
      {/* Left Oman red accent */}
      <div className="absolute left-0 inset-y-0 w-[3px] bg-gradient-to-b from-transparent via-red/40 to-transparent" />
      {/* Bottom hairline */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/22 to-transparent" />

      <div className="container-main relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {label && (
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold/40" />
              <span className="text-[11px] font-heading font-semibold tracking-[0.14em] uppercase text-gold/70">
                {label}
              </span>
              <div className="h-px w-8 bg-gold/40" />
            </div>
          )}
          <h1
            className="font-heading font-semibold text-ivory text-balance mb-5"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.75rem)', letterSpacing: '-0.025em', lineHeight: '1.06' }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="font-body text-ivory/48 max-w-lg mx-auto"
              style={{ fontSize: '1.0625rem', lineHeight: '1.72' }}
            >
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
