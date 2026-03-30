import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Leaf, Star, AlertTriangle } from 'lucide-react';
import AmbientBackground from '../ui/AmbientBackground';

/*
  Design decisions:
  - CLAUDE.md: "lighter soothing tones" → QHSE is now a LIGHT section (ivory/sand)
    Previous dark-on-dark rhythm (Stats→QHSE→CTA) violated this rule.
    Only Hero + CTA Banner are dark; everything else is light.
  - Typography: H2 Lexend + body Source Sans 3
  - Cards: shadow-only, no border overuse (CLAUDE.md)
  - 4-pillar grid with icon + strong heading + clean description
*/

const pillars = [
  {
    icon: Shield,
    color: 'text-green',
    bg: 'bg-green/8',
    title: 'Zero Harm',
    description:
      'Every operation begins with a safety review. Our absolute commitment to protecting the health and safety of every worker, contractor, and community we serve.',
  },
  {
    icon: Star,
    color: 'text-gold',
    bg: 'bg-gold/8',
    title: 'Quality Assurance',
    description:
      'Rigorous quality management aligned with international standards and PDO requirements, from FEED through commissioning and handover.',
  },
  {
    icon: Leaf,
    color: 'text-green-light',
    bg: 'bg-green/6',
    title: 'Environmental Stewardship',
    description:
      'Responsible operations that minimise environmental impact across all project sites — protecting Oman\'s natural environment for future generations.',
  },
  {
    icon: AlertTriangle,
    color: 'text-red',
    bg: 'bg-red/6',
    title: 'Emergency Preparedness',
    description:
      'Rapid, coordinated response to incidents. Trained Emergency Response Teams, 24/7 capability, and mutual aid agreements with all major clients.',
  },
];

export default function QHSE() {
  const shouldReduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  return (
    <section className="section-pad bg-ivory relative overflow-hidden">
      <AmbientBackground variant="ivory" dots blobs />
      <div className="relative z-10 container-main">

        {/* Section header — centered editorial layout */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease }}
          className="max-w-2xl mb-16"
        >
          <div className="label-section mb-5">Safety & Quality</div>
          <h2
            className="font-heading font-semibold text-green-dark text-balance mb-5"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', letterSpacing: '-0.02em', lineHeight: '1.1' }}
          >
            A Culture of Zero Compromise
          </h2>
          <p className="font-body text-charcoal-light leading-relaxed" style={{ fontSize: '1.0625rem' }}>
            QHSE is not a policy at Al Baraka — it is the foundation of every decision,
            every project, and every team member we field across Oman's concession areas.
          </p>
        </motion.div>

        {/* Four pillars — clean white cards, shadow-only */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: shouldReduce ? 0 : 0.08 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14"
        >
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden:   { opacity: 0, y: 16 },
                  visible:  { opacity: 1, y: 0, transition: { duration: 0.42, ease: 'easeOut' } },
                }}
                className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 cursor-default"
              >
                <div className={`w-11 h-11 rounded-xl ${pillar.bg} flex items-center justify-center ${pillar.color} mb-5`}>
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3
                  className="font-heading font-semibold text-green-dark mb-2.5"
                  style={{ fontSize: '1.05rem', letterSpacing: '-0.01em' }}
                >
                  {pillar.title}
                </h3>
                <p className="font-body text-sm text-charcoal-light leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Statement + CTA row */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6
                     pt-10 border-t border-stone/50"
        >
          <blockquote className="font-display italic text-green-dark max-w-lg" style={{ fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', lineHeight: '1.5' }}>
            "No job is so important that it cannot be done safely."
            <span className="block font-body not-italic text-sm text-charcoal-muted mt-2 font-normal">
              — Al Baraka QHSE Policy Statement
            </span>
          </blockquote>

          <Link to="/qhse" className="btn-outline flex-shrink-0 group">
            View QHSE Policy
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
