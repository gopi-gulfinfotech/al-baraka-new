import { motion, useReducedMotion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import PageHero from '../components/ui/PageHero';
import AmbientBackground from '../components/ui/AmbientBackground';

const updates = [
  {
    date: 'March 2024',
    category: 'Operations',
    title: 'Al Baraka Expands Workover Rig Fleet in Southern Oman',
    summary: 'Al Baraka Oilfield Services has expanded its workover rig fleet with the addition of two new modern units, strengthening capacity in the southern concession areas.',
  },
  {
    date: 'January 2024',
    category: 'Safety',
    title: 'Two Million LTI-Free Man Hours Achieved',
    summary: 'Our operations team reached a significant safety milestone, completing two million man hours without a lost time incident — a testament to our zero-harm commitment.',
  },
  {
    date: 'October 2023',
    category: 'Awards',
    title: 'Recognized for Excellence in Contractor Performance by PDO',
    summary: 'Petroleum Development Oman honored Al Baraka with its annual contractor excellence award, citing consistent quality delivery and QHSE standards.',
  },
  {
    date: 'July 2023',
    category: 'Projects',
    title: 'Completion of Major EPC Facility Project in Block 6',
    summary: 'Al Baraka successfully completed a complex EPC project for a new production facility, delivered on schedule and within budget in Block 6 of the southern fields.',
  },
  {
    date: 'April 2023',
    category: 'Community',
    title: 'Al Baraka Sponsors Oman Energy Sector Scholarship Program',
    summary: "Reinforcing our commitment to Oman's future, Al Baraka sponsored scholarships for Omani engineering students pursuing careers in the oil and gas sector.",
  },
];

const categoryStyles = {
  Operations: 'bg-green/7 text-green',
  Safety:     'bg-gold/10 text-gold-warm',
  Awards:     'bg-stone/80 text-charcoal-light',
  Projects:   'bg-green/7 text-green',
  Community:  'bg-red/7 text-red',
};

export default function MediaPage() {
  const shouldReduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  return (
    <main className="pt-20">
      <PageHero
        label="News & Updates"
        title="Media Centre"
        subtitle="Latest news, project milestones, and announcements from Al Baraka Oilfield Services."
      />

      <section className="section-pad bg-ivory relative overflow-hidden">
        <AmbientBackground variant="ivory" dots blobs />
        <div className="relative z-10 container-main">
          <SectionHeader
            label="Latest News"
            title="What's Happening at Al Baraka"
          />
          <div className="mt-10 space-y-4">
            {updates.map((item, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: shouldReduce ? 0 : 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.44, delay: shouldReduce ? 0 : i * 0.06, ease }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover
                           transition-all duration-200 p-6 lg:p-8"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`text-[11px] font-heading font-semibold px-2.5 py-1 rounded-full ${categoryStyles[item.category] ?? 'bg-stone/80 text-charcoal-light'}`}>
                    {item.category}
                  </span>
                  <span className="text-xs text-charcoal-muted font-body">{item.date}</span>
                </div>
                <h3
                  className="font-heading font-semibold text-green-dark leading-snug mb-3"
                  style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', letterSpacing: '-0.01em' }}
                >
                  {item.title}
                </h3>
                <p className="font-body text-sm text-charcoal-light leading-relaxed" style={{ lineHeight: '1.68' }}>
                  {item.summary}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
