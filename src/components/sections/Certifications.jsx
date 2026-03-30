import { motion } from 'framer-motion';

const credentials = [
  { name: 'Petroleum Development Oman', abbr: 'PDO', role: 'Approved Contractor' },
  { name: 'Ministry of Energy & Minerals', abbr: 'MEM', role: 'Registered Contractor' },
  { name: 'ISO 9001', abbr: 'ISO', role: 'Quality Management' },
  { name: 'OHSAS 18001', abbr: 'HSE', role: 'Health & Safety' },
  { name: 'ISO 14001', abbr: 'ENV', role: 'Environmental Mgmt.' },
  { name: 'Omanisation', abbr: 'OMA', role: 'Workforce Development' },
];

export default function Certifications() {
  return (
    <section className="py-16 lg:py-20 bg-ivory border-t border-stone/40">
      <div className="container-main">
        <div className="text-center mb-10">
          <span className="section-label justify-center mb-3">Trust & Accreditation</span>
          <p className="text-sm text-charcoal-muted mt-1">Endorsed by Oman's leading energy authorities</p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
        >
          {credentials.map((cred, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="flex flex-col items-center text-center py-5 px-3 rounded-sm border border-stone/50 bg-white hover:border-green/30 hover:shadow-card transition-all duration-200 cursor-default"
            >
              <div className="w-10 h-10 rounded-sm bg-green/8 flex items-center justify-center mb-3">
                <span className="font-heading font-semibold text-xs text-green">{cred.abbr}</span>
              </div>
              <div className="font-heading font-medium text-charcoal text-xs leading-tight mb-1">{cred.name}</div>
              <div className="text-xs text-charcoal-muted/70">{cred.role}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
