import { motion, useReducedMotion } from 'framer-motion';

/*
  Typography hierarchy (toolkit + CLAUDE.md):
  - label-section: Swiss Modernism small caps, tracking-[0.12em], gold
  - H2: Lexend semibold, clamp(1.75rem → 2.6rem), letter-spacing -0.02em
  - Body: Source Sans 3, 1.65 line-height, charcoal-light (5.2:1 contrast AA)
*/

export default function SectionHeader({ label, title, subtitle, centered = false, light = false }) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduce ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={centered ? 'text-center' : ''}
    >
      {label && (
        <div className={`
          label-section mb-4
          ${centered ? 'justify-center' : ''}
          ${light ? 'text-gold/75 [&::before]:bg-gold/75' : ''}
        `}>
          {label}
        </div>
      )}

      <h2
        className={`font-heading font-semibold text-balance mb-4
          ${light ? 'text-ivory' : 'text-green-dark'}
          ${centered ? 'mx-auto' : ''}
        `}
        style={{
          fontSize: 'clamp(1.75rem, 3.2vw, 2.6rem)',
          letterSpacing: '-0.02em',
          lineHeight: '1.1',
          maxWidth: centered ? '36rem' : undefined,
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p className={`
          font-body leading-relaxed
          ${light ? 'text-ivory/58' : 'text-charcoal-light'}
          ${centered ? 'mx-auto' : ''}
        `}
          style={{
            fontSize: '1.0625rem',
            maxWidth: centered ? '38rem' : '36rem',
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
