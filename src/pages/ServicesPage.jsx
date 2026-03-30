import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTABanner from '../components/sections/CTABanner';
import PageHero from '../components/ui/PageHero';
import AmbientBackground from '../components/ui/AmbientBackground';

const services = [
  {
    id: 'workover',
    number: '01',
    title: 'Workover Rig Services',
    category: 'Well Services',
    description: "Al Baraka operates a fleet of workover rigs deployed across Oman's producing fields. Our crews are trained to the highest international standards, ensuring safe and efficient well intervention, stimulation, and completion operations.",
    capabilities: [
      'Mechanical and hydraulic workover operations',
      'Coiled tubing and wireline services',
      'Well stimulation and perforation',
      'Sand and scale removal',
      'Production enhancement programs',
      'Well abandonment and plugging',
    ],
  },
  {
    id: 'flowline',
    number: '02',
    title: 'Flowline Construction & Replacement',
    category: 'Construction',
    description: "We design, construct, and replace flowline systems that connect wellheads to gathering stations and processing facilities. Our teams operate efficiently in the demanding desert terrain of Oman's southern concession areas.",
    capabilities: [
      'New flowline installation',
      'Emergency and planned flowline replacement',
      'Tie-in and hook-up services',
      'Integrity testing and commissioning',
      'Cathodic protection systems',
      'GRE and carbon steel pipeline expertise',
    ],
  },
  {
    id: 'epc',
    number: '03',
    title: 'EPC Projects',
    category: 'Engineering & Construction',
    description: 'Our EPC division handles complex oilfield facility projects from concept through commissioning. We provide engineering, procurement, and construction services under a single accountable contract structure.',
    capabilities: [
      'FEED and detailed engineering',
      'Equipment procurement and supply chain',
      'Civil, structural, and mechanical construction',
      'Electrical and instrumentation installation',
      'Commissioning and start-up support',
      'Documentation and handover packages',
    ],
  },
  {
    id: 'pipeline',
    number: '04',
    title: 'Pipeline Maintenance',
    category: 'Integrity & Maintenance',
    description: "Our pipeline maintenance teams keep Oman's oilfield networks running safely and reliably. We provide both scheduled preventive maintenance and rapid-response emergency services across the concession area.",
    capabilities: [
      'Routine inspection and pigging',
      'Leak detection and repair',
      'Corrosion management programs',
      'Valve and fitting maintenance',
      'Chemical treatment programs',
      'Emergency response and repair',
    ],
  },
  {
    id: 'manpower',
    number: '05',
    title: 'Manpower Contract Services',
    category: 'Workforce',
    description: 'We supply highly qualified technical, operational, and supervisory personnel on flexible contract terms. Our manpower solutions help clients scale their operations rapidly while maintaining quality and compliance.',
    capabilities: [
      'Rig operators and supervisors',
      'Mechanical and electrical technicians',
      'QHSE officers and advisors',
      'Camp management and catering personnel',
      'Administrative and logistics support',
      'Omanisation-compliant workforce planning',
    ],
  },
  {
    id: 'logistics',
    number: '06',
    title: 'Logistics Support',
    category: 'Field Support',
    description: 'Al Baraka provides comprehensive logistics services that keep oilfield operations running smoothly — from equipment transport and material handling to camp management and supply chain coordination.',
    capabilities: [
      'Heavy equipment transportation',
      'Warehousing and materials management',
      'Camp setup and management',
      'Catering and accommodation services',
      'Light and heavy vehicle fleet',
      'Supply chain coordination',
    ],
  },
];

export default function ServicesPage() {
  const shouldReduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  return (
    <main className="pt-20">
      <PageHero
        label="Capabilities"
        title="Six Integrated Service Lines"
        subtitle="End-to-end oilfield solutions across Oman's southern concession areas — delivered with precision, accountability, and a safety-first culture."
      />

      <section className="section-pad bg-ivory relative overflow-hidden">
        <AmbientBackground variant="ivory" dots />
        <div className="relative z-10 container-main">
          <div className="space-y-5">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.52, delay: 0.04, ease }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover
                           transition-all duration-200 overflow-hidden group"
              >
                <div className="p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-14">

                  {/* Left — title + description */}
                  <div>
                    {/* Number + category */}
                    <div className="flex items-center gap-3 mb-5">
                      <span
                        className="font-heading font-semibold text-stone tabular-nums select-none"
                        style={{ fontSize: '1.5rem', letterSpacing: '-0.04em', lineHeight: '1' }}
                      >
                        {service.number}
                      </span>
                      <span className="w-px h-4 bg-stone" />
                      <span className="text-[10px] font-heading font-semibold tracking-[0.13em] uppercase text-gold/70">
                        {service.category}
                      </span>
                    </div>

                    <h2
                      className="font-heading font-semibold text-green-dark mb-4 leading-snug"
                      style={{ fontSize: 'clamp(1.35rem, 2.2vw, 1.75rem)', letterSpacing: '-0.018em' }}
                    >
                      {service.title}
                    </h2>
                    <p className="font-body text-charcoal-light leading-relaxed mb-7" style={{ lineHeight: '1.7' }}>
                      {service.description}
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-heading font-semibold
                                 text-green hover:text-green-light transition-colors duration-150 cursor-pointer group/link"
                    >
                      Request a proposal
                      <ArrowRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-1" />
                    </Link>
                  </div>

                  {/* Right — capabilities */}
                  <div className="lg:pl-2 lg:border-l lg:border-stone/40">
                    <div className="text-[10px] font-heading font-semibold tracking-[0.13em] uppercase text-charcoal-muted mb-5">
                      Key Capabilities
                    </div>
                    <ul className="space-y-3">
                      {service.capabilities.map((cap, j) => (
                        <li key={j} className="flex items-start gap-3 font-body text-sm text-charcoal-light" style={{ lineHeight: '1.6' }}>
                          <span className="w-1 h-1 rounded-full bg-green/50 mt-2 flex-shrink-0" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom accent — appears on hover */}
                <div className="h-px bg-gradient-to-r from-transparent via-green/15 to-transparent
                                group-hover:via-gold/25 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
