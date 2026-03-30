import { motion, useInView, useMotionValue, animate, useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import AmbientBackground from '../ui/AmbientBackground';

/*
  Stats section — animated counters + progress bars
  Motion enhancements:
  - CountUp: number animates from 0 to target on scroll entry
  - Progress bar: fills to a % width on scroll entry (visual reinforcement)
  - Staggered entrance per stat cell
*/

const stats = [
  { value: 2,  suffix: 'M+', label: 'Man-Hours',     sub: 'LTI-free · All operations', progress: 100 },
  { value: 99, suffix: '%',  label: 'Safety Record', sub: 'Zero-LTI commitment',        progress: 99  },
  { value: 13, suffix: '+',  label: 'Years Active',  sub: 'Since 2011, Oman',           progress: 72  },
  { value: 6,  suffix: '',   label: 'Service Lines', sub: 'Fully integrated',           progress: 60  },
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
      duration: 1.6,
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
  const shouldReduce = useReducedMotion();

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
              initial={{ opacity: 0, y: shouldReduce ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: shouldReduce ? 0 : i * 0.08, ease: 'easeOut' }}
              className={`
                relative text-center py-7 px-5 overflow-hidden
                ${i < stats.length - 1 ? 'border-r border-ivory/10' : ''}
              `}
            >
              {/* Animated progress bar — fills horizontally at bottom */}
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-gold/25"
                initial={{ width: '0%' }}
                whileInView={{ width: `${stat.progress}%` }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 1.4, delay: shouldReduce ? 0 : 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              />

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
