import { motion, useReducedMotion } from 'framer-motion';
import { Shield, CheckCircle, AlertCircle, Leaf, Star } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import CTABanner from '../components/sections/CTABanner';
import PageHero from '../components/ui/PageHero';
import AmbientBackground from '../components/ui/AmbientBackground';

const pillars = [
  {
    icon: <Shield size={22} />,
    color: 'text-green',
    bg: 'bg-green/8',
    title: 'Health & Safety',
    description: 'We maintain a zero-harm culture across all operations. Every employee, subcontractor, and site visitor is covered by our comprehensive HSE management system.',
    points: [
      'Daily toolbox talks and site inductions',
      'Permit to Work system',
      'Personal Protective Equipment (PPE) program',
      'Emergency response plans at all sites',
    ],
  },
  {
    icon: <Star size={22} />,
    color: 'text-gold',
    bg: 'bg-gold/8',
    title: 'Quality Assurance',
    description: 'Our quality management system ensures that every deliverable meets or exceeds client specifications and international standards.',
    points: [
      'ISO-aligned quality frameworks',
      'Inspection and test plans (ITP)',
      'Non-conformance management',
      'Supplier and subcontractor qualification',
    ],
  },
  {
    icon: <Leaf size={22} />,
    color: 'text-green-light',
    bg: 'bg-green/6',
    title: 'Environmental Protection',
    description: "We operate with full respect for Oman's environment — minimizing waste, protecting natural resources, and complying with all environmental regulations.",
    points: [
      'Environmental impact assessments',
      'Waste management and disposal',
      'Spill prevention and containment',
      'Carbon footprint reduction programs',
    ],
  },
  {
    icon: <AlertCircle size={22} />,
    color: 'text-red',
    bg: 'bg-red/8',
    title: 'Emergency Response',
    description: 'Rapid, coordinated response to incidents is critical in oilfield operations. Our teams are trained and equipped to handle emergencies at any time.',
    points: [
      '24/7 emergency response capability',
      'Trained Emergency Response Teams (ERTs)',
      'Mutual aid agreements with clients',
      'Regular emergency drills and exercises',
    ],
  },
];

const qhseStats = [
  { value: '99%',  label: 'Safety Record',  sub: 'LTI-free operations' },
  { value: 'PDO',  label: 'Approved',        sub: 'Petroleum Development Oman' },
  { value: 'Zero', label: 'Tolerance',       sub: 'For safety violations' },
  { value: 'ISO',  label: 'Aligned',         sub: 'Quality management systems' },
];

export default function QHSEPage() {
  const shouldReduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  return (
    <main className="pt-20">
      <PageHero
        label="Safety & Quality"
        title="QHSE"
        subtitle="Quality, Health, Safety, and Environment — the four commitments that guide every decision we make."
      />

      {/* Policy statement */}
      <section className="relative overflow-hidden py-20 lg:py-24 bg-sand border-b border-stone/30">
        <AmbientBackground variant="sand" blobs={false} />
        <div className="relative z-10 container-main">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: shouldReduce ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              {/* DM Serif Display italic — premium pull quote treatment */}
              <blockquote
                className="font-display italic text-green-dark text-balance"
                style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)', lineHeight: '1.65' }}
              >
                "At Al Baraka, we believe that no job is so important or deadline so critical
                that it cannot be done safely. Safety is not negotiable."
              </blockquote>
              <div className="flex items-center justify-center gap-3 mt-6">
                <div className="h-px w-6 bg-gold/40" />
                <span className="font-body text-xs text-charcoal-muted tracking-wide">
                  Al Baraka Oilfield Services · QHSE Policy Statement
                </span>
                <div className="h-px w-6 bg-gold/40" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Four pillars */}
      <section className="section-pad bg-ivory relative overflow-hidden">
        <AmbientBackground variant="ivory" dots blobs />
        <div className="relative z-10 container-main">
          <SectionHeader
            label="Our Framework"
            title="The Four Pillars of QHSE"
            subtitle="Our QHSE management system is structured around four core pillars that collectively ensure safe, high-quality, and environmentally responsible operations."
            centered
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: shouldReduce ? 0 : 0.09 } } }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12"
          >
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden:   { opacity: 0, y: 18 },
                  visible:  { opacity: 1, y: 0, transition: { duration: 0.44, ease: 'easeOut' } },
                }}
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-200"
              >
                <div className={`w-11 h-11 rounded-xl ${pillar.bg} flex items-center justify-center ${pillar.color} mb-5`}>
                  {pillar.icon}
                </div>
                <h3
                  className="font-heading font-semibold text-green-dark mb-3"
                  style={{ fontSize: '1.1rem', letterSpacing: '-0.01em' }}
                >
                  {pillar.title}
                </h3>
                <p className="font-body text-sm text-charcoal-light leading-relaxed mb-5" style={{ lineHeight: '1.68' }}>
                  {pillar.description}
                </p>
                <ul className="space-y-2.5">
                  {pillar.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2.5 font-body text-sm text-charcoal-light">
                      <CheckCircle size={13} className="text-green mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats — consistent with homepage Stats strip */}
      <section className="bg-green relative overflow-hidden py-14 lg:py-16">
        <AmbientBackground variant="dark" dots blobs={false} />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/22 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ background: 'radial-gradient(ellipse 50% 80% at 85% 50%, #B8932A, transparent)' }}
        />
        <div className="relative z-10 container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {qhseStats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: shouldReduce ? 0 : 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: shouldReduce ? 0 : i * 0.08, ease: 'easeOut' }}
                className={`text-center py-7 px-5 ${i < qhseStats.length - 1 ? 'border-r border-ivory/[0.08]' : ''}`}
              >
                <div className="font-heading font-semibold text-3xl lg:text-4xl text-gold mb-1 tabular-nums">
                  {item.value}
                </div>
                <div className="font-heading font-medium text-ivory/85 text-sm mb-0.5">{item.label}</div>
                <div className="font-body text-xs text-ivory/38 hidden sm:block">{item.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
