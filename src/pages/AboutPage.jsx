import { motion, useReducedMotion } from 'framer-motion';
import { Users, Target, Eye } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import PageHero from '../components/ui/PageHero';
import CTABanner from '../components/sections/CTABanner';
import AmbientBackground from '../components/ui/AmbientBackground';

const values = [
  {
    icon: <ShieldIcon />,
    title: 'Safety First',
    description: 'Every operation begins with a safety review. Our people go home safe — always.',
  },
  {
    icon: <Target size={20} />,
    title: 'Excellence',
    description: 'We deliver projects on time, within budget, and to the highest technical standards.',
  },
  {
    icon: <Users size={20} />,
    title: 'People',
    description: 'Our workforce is our greatest asset. We invest in training, Omanisation, and career growth.',
  },
  {
    icon: <Eye size={20} />,
    title: 'Integrity',
    description: 'We operate transparently, ethically, and in full compliance with Omani regulations.',
  },
];

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export default function AboutPage() {
  const shouldReduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  return (
    <main className="pt-20">
      <PageHero
        label="Our Story"
        title="About Al Baraka"
        subtitle="Over a decade of building trust, delivering results, and contributing to Oman's energy sector."
      />

      {/* Story */}
      <section className="section-pad bg-ivory relative overflow-hidden">
        <AmbientBackground variant="ivory" dots />
        <div className="relative z-10 container-main">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              label="Founded in Oman"
              title="Rooted in the South. Trusted Nationwide."
              subtitle="Al Baraka Oilfield Services was established in 2011 in the Sultanate of Oman, with operations centered in the southern oil-producing concession areas — the heart of Oman's energy production."
            />
            <motion.div
              initial={{ opacity: 0, y: shouldReduce ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="mt-8 space-y-5"
            >
              {[
                "From our earliest days, we recognized that the southern concession areas of Oman demanded contractors who could operate safely, efficiently, and with a deep understanding of the local environment and culture. That understanding became our competitive advantage.",
                "Today, Al Baraka serves as a trusted partner to Petroleum Development Oman (PDO) and operates in alignment with the standards set by the Ministry of Energy and Minerals. Our service portfolio spans workover rig operations, flowline construction, EPC project delivery, pipeline maintenance, manpower contracting, and full logistics support for oilfield companies.",
                "We are proud of our Omani heritage, our commitment to Omanisation, and the role we play in building a sustainable energy future for the Sultanate.",
              ].map((para, i) => (
                <p key={i} className="font-body text-charcoal-light" style={{ fontSize: '1.0625rem', lineHeight: '1.75' }}>
                  {para}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-sand relative overflow-hidden">
        <AmbientBackground variant="sand" blobs />
        <div className="relative z-10 container-main">
          <SectionHeader label="Our Values" title="What We Stand For" centered />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: shouldReduce ? 0 : 0.09 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12"
          >
            {values.map((val, i) => (
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
                  {val.icon}
                </div>
                <h3 className="font-heading font-semibold text-green-dark text-base mb-2 tracking-tight">{val.title}</h3>
                <p className="font-body text-sm text-charcoal-muted leading-relaxed" style={{ lineHeight: '1.65' }}>{val.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision / Mission — clean dark green, no pattern */}
      <section className="section-pad bg-hero relative overflow-hidden">
        <AmbientBackground variant="dark" />
        {/* Gold hairlines */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/22 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ivory/8 to-transparent" />
        {/* Left accent */}
        <div className="absolute left-0 inset-y-0 w-[3px] bg-gradient-to-b from-transparent via-red/35 to-transparent" />

        <div className="relative z-10 container-main">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold/40" />
              <span className="text-[11px] font-heading font-semibold tracking-[0.14em] uppercase text-gold/65">Direction</span>
              <div className="h-px w-8 bg-gold/40" />
            </div>
            <h2
              className="font-heading font-semibold text-ivory text-balance"
              style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.6rem)', letterSpacing: '-0.02em', lineHeight: '1.1' }}
            >
              Vision & Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {[
              {
                label: 'Our Vision',
                title: 'To be the foremost oilfield services company in Oman',
                text: "Recognized for technical excellence, safety leadership, and our unwavering commitment to the sustainable development of Oman's energy resources.",
              },
              {
                label: 'Our Mission',
                title: 'Delivering reliable, safe, and efficient oilfield services',
                text: "We partner with our clients to optimize operations, protect people and the environment, and contribute to Oman's long-term energy security and economic development.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: shouldReduce ? 0 : 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.52, delay: shouldReduce ? 0 : i * 0.12, ease }}
                className="rounded-2xl p-8 lg:p-10 transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div className="text-[10px] font-heading font-semibold tracking-[0.14em] uppercase text-gold/65 mb-4">
                  {item.label}
                </div>
                <h3
                  className="font-heading font-semibold text-ivory mb-4 leading-snug"
                  style={{ fontSize: '1.15rem', letterSpacing: '-0.01em' }}
                >
                  {item.title}
                </h3>
                <p className="font-body text-sm text-ivory/52 leading-relaxed" style={{ lineHeight: '1.7' }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
