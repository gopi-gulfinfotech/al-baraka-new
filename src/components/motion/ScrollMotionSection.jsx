import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const easeOutExpo = [0.16, 1, 0.3, 1];

/**
 * Premium scroll-motion wrapper for sections.
 * Establishes a consistent "motion language" across pages:
 * - reveal timing and easing
 * - depth through parallax y-offset
 * - subtle opacity/scale interpolation for cinematic continuity
 */
export default function ScrollMotionSection({
  children,
  className = '',
  amount = 0.2,
  offset = ['start 88%', 'end 20%'],
  delay = 0,
  parallax = 26,
  blur = 8,
  as: Component = 'div',
}) {
  const sectionRef = useRef(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset,
  });

  const smoothed = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.3,
  });

  const y = useTransform(smoothed, [0, 1], [shouldReduce ? 0 : parallax, 0]);
  const opacity = useTransform(smoothed, [0, 0.35, 1], [0.65, 1, 1]);
  const scale = useTransform(smoothed, [0, 1], [0.985, 1]);
  const filter = useTransform(smoothed, [0, 1], [
    shouldReduce ? 'blur(0px)' : `blur(${blur}px)`,
    'blur(0px)',
  ]);

  return (
    <motion.div
      ref={sectionRef}
      initial={shouldReduce ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: shouldReduce ? 0 : 0.8, ease: easeOutExpo, delay }}
      style={{ y, opacity, scale, filter }}
      className={className}
    >
      <Component>{children}</Component>
    </motion.div>
  );
}
