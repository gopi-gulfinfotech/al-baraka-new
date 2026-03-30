import { motion, useInView, useMotionValue, animate, useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import AmbientBackground from '../ui/AmbientBackground';

/*
  Design decisions:
  - Sits between TrustBar (light) and Services (light) — acts as a dark green accent break
  - Swiss Modernism: clean dividers, mathematical spacing, tabular-nums
  - Toolkit: metric pulse (stat reveal) from Trust & Authority pattern
  - CLAUDE.md: avoid heavy gradients → single radial only, restrained
*/

const stats = [
  { value: 2,  suffix: 'M+', label: 'Man-Hours',     sub: 'LTI-free · All operations' },
  { value: 99, suffix: '%',  label: 'Safety Record', sub: 'Zero-LTI commitment' },
  { value: 13, suffix: '+',  label: 'Years Active',  sub: 'Since 2011, Oman' },
  { value: 6,  suffix: '',   label: 'Service Lines', sub: 'Fully integrated' },
];

function CountUp({ target, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (shouldReduce) {
      if (ref.current) ref.current.textContent = target.toLocaleString() + suffix;
      return;
    }
    const controls = animate(count, target, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toLocaleString() + suffix;
      },
    });
    return controls.stop;
  }, [inView, target, suffix, count, shouldReduce]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="bg-green py-12 lg:py-14 relative overflow-hidden">
      <AmbientBackground variant="dark" dots blobs={false} />
      {/* Hairline borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
      {/* Single warm radial */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{ background: 'radial-gradient(ellipse 50% 80% at 85% 50%, #B8932A, transparent)' }}
      />

      <div className="relative z-10 container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
              className={`
                text-center py-7 px-5
                ${i < stats.length - 1 ? 'border-r border-ivory/10' : ''}
              `}
            >
              <div className="font-heading font-semibold text-3xl lg:text-4xl text-gold mb-1 tabular-nums">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-heading font-medium text-ivory/85 text-sm mb-0.5">{stat.label}</div>
              <div className="font-body text-xs text-ivory/38 hidden sm:block">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
