import { motion, useReducedMotion } from 'framer-motion';
import { Briefcase, Users, TrendingUp, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import PageHero from '../components/ui/PageHero';
import AmbientBackground from '../components/ui/AmbientBackground';

const benefits = [
  {
    icon: <Briefcase size={20} />,
    title: 'Professional Growth',
    description: 'Structured career pathways with clear progression milestones and development programs.',
  },
  {
    icon: <Users size={20} />,
    title: 'Omanisation Focus',
    description: 'Committed to developing Omani talent and placing qualified nationals in leadership roles.',
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'Training Programs',
    description: 'Technical and soft skills training aligned with PDO and international standards.',
  },
  {
    icon: <Heart size={20} />,
    title: 'Welfare & Benefits',
    description: 'Competitive packages, medical coverage, and a safe working environment for all staff.',
  },
];

export default function CareersPage() {
  const shouldReduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  return (
    <main className="pt-20">
      <PageHero
        label="Careers"
        title="Build Your Career in Oman's Energy Sector"
        subtitle="Join a growing team of professionals powering Oman's oilfields with technical excellence and a safety-first culture."
      />

      {/* Why join us */}
      <section className="section-pad bg-ivory relative overflow-hidden">
        <AmbientBackground variant="ivory" dots blobs />
        <div className="relative z-10 container-main">
          <SectionHeader
            label="Why Al Baraka"
            title="More Than a Job — A Career That Matters"
            subtitle="We invest in our people because they are the foundation of everything we deliver."
            centered
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: shouldReduce ? 0 : 0.09 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12"
          >
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden:   { opacity: 0, y: 20 },
                  visible:  { opacity: 1, y: 0, transition: { duration: 0.44, ease: 'easeOut' } },
                }}
                className="bg-white rounded-2xl p-7 shadow-card
                           hover:shadow-card-hover hover:-translate-y-0.5
                           transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-green/8 flex items-center justify-center text-green mb-5">
                  {b.icon}
                </div>
                <h3 className="font-heading font-semibold text-green-dark text-base mb-2 tracking-tight">{b.title}</h3>
                <p className="font-body text-sm text-charcoal-muted leading-relaxed" style={{ lineHeight: '1.65' }}>{b.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Apply section */}
      <section className="section-pad bg-sand relative overflow-hidden border-t border-stone/30">
        <AmbientBackground variant="sand" blobs />
        <div className="relative z-10 container-main max-w-2xl mx-auto text-center">
          <SectionHeader
            label="Open Positions"
            title="Ready to Apply?"
            subtitle="We regularly recruit technical, operational, and support staff across our service lines. Send us your CV and we'll keep you in mind for suitable openings."
            centered
          />
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="mt-10"
          >
            <Link to="/contact" className="btn-primary text-base px-8 py-4 inline-flex">
              Send Your CV
            </Link>
            <p className="mt-5 font-body text-sm text-charcoal-muted">
              Or email us directly at{' '}
              <a href="mailto:careers@barakaoman.com" className="text-green hover:text-green-light transition-colors duration-150">
                careers@barakaoman.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
