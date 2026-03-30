import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const easeOutExpo = [0.16, 1, 0.3, 1];

/**
 * Premium scroll-motion wrapper for sections.
 * Establishes a consistent "motion language" across pages:
 * - reveal timing and easing
 * - depth through parallax y-offset
 * - subtle opacity interpolation for continuity without reducing legibility
 */
export default function ScrollMotionSection({
  children,
  className = '',
  amount = 0.25,
  offset = ['start 92%', 'end 12%'],
  delay = 0,
  parallax = 20,
  as: Component = 'div',
}) {
  const sectionRef = useRef(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset,
  });

  const smoothed = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.25,
  });

  const y = useTransform(smoothed, [0, 1], [shouldReduce ? 0 : parallax, 0]);
  const opacity = useTransform(smoothed, [0, 0.18, 1], [0.78, 1, 1]);

  return (
    <motion.div
      ref={sectionRef}
      initial={shouldReduce ? false : { opacity: 0, y: 18 }}
      whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: shouldReduce ? 0 : 0.72, ease: easeOutExpo, delay }}
      style={{ y, opacity, willChange: 'transform, opacity' }}
      className={className}
    >
      <Component>{children}</Component>
    </motion.div>
  );
}
