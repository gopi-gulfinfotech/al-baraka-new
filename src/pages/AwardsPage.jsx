import { motion, useReducedMotion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import CTABanner from '../components/sections/CTABanner';
import PageHero from '../components/ui/PageHero';
import AmbientBackground from '../components/ui/AmbientBackground';

const awards = [
  {
    year: '2023',
    title: 'Best Safety Performance',
    issuer: 'Petroleum Development Oman',
    description: 'Recognized for maintaining an exemplary LTI-free safety record across all contracted operations.',
  },
  {
    year: '2022',
    title: 'Excellence in Omanisation',
    issuer: 'Ministry of Labour, Sultanate of Oman',
    description: 'Awarded for outstanding progress in workforce nationalization and Omani talent development.',
  },
  {
    year: '2021',
    title: 'Contractor of the Year',
    issuer: 'PDO Southern Operations',
    description: 'Recognized as the leading oilfield contractor in the southern concession area for consistent delivery excellence.',
  },
  {
    year: '2020',
    title: 'QHSE Leadership Award',
    issuer: 'Oman Society for Petroleum Services',
    description: 'Honored for leadership in implementing and sustaining world-class QHSE management systems.',
  },
  {
    year: '2019',
    title: 'Innovation in Field Operations',
    issuer: 'Petroleum Development Oman',
    description: 'Recognized for introducing improved workover methods that reduced well intervention time by 30%.',
  },
];

export default function AwardsPage() {
  const shouldReduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  return (
    <main className="pt-20">
      <PageHero
        label="Recognition"
        title="Awards & Accolades"
        subtitle="Recognized by Oman's leading energy authorities for safety, excellence, and national contribution."
      />

      <section className="section-pad bg-ivory relative overflow-hidden">
        <AmbientBackground variant="ivory" dots blobs />
        <div className="relative z-10 container-main">
          <SectionHeader
            label="Our Achievements"
            title="A Track Record of Recognition"
            subtitle="Our awards reflect the daily commitment of every Al Baraka team member to excellence, safety, and Oman's development."
          />
          <div className="mt-12 space-y-4">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: shouldReduce ? 0 : -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: shouldReduce ? 0 : i * 0.07, ease }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover
                           transition-all duration-200 p-6 lg:p-8 flex gap-6 items-start"
              >
                {/* Year badge */}
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-green flex items-center justify-center">
                  <span className="font-heading font-semibold text-sm text-gold tabular-nums">{award.year}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-2.5 mb-1.5">
                    <Star size={14} className="text-gold mt-0.5 flex-shrink-0" />
                    <h3
                      className="font-heading font-semibold text-green-dark leading-snug"
                      style={{ fontSize: '1.05rem', letterSpacing: '-0.01em' }}
                    >
                      {award.title}
                    </h3>
                  </div>
                  <div className="text-[10px] font-heading font-semibold text-charcoal-muted tracking-[0.11em] uppercase mb-3">
                    {award.issuer}
                  </div>
                  <p className="font-body text-sm text-charcoal-light leading-relaxed" style={{ lineHeight: '1.65' }}>
                    {award.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
