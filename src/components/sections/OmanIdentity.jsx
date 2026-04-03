import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AmbientBackground from '../ui/AmbientBackground';

/*
  Oman Identity section — Editorial Grid + Storytelling-Driven pattern (toolkit)
  Background: bg-ivory + border-t — creates clear visual break from About (bg-sand)
  Layout: asymmetric 2-col, DM Serif Display editorial headline, pull quote
  Tone: executive, quiet pride — not loud nationalism
*/

const pillars = [
  {
    number: '01',
    title: 'Rooted in the South',
    body: "Our operations began — and remain — in the southern concession areas where Oman's oil heritage runs deepest. We know these fields not from a contract, but from years of presence.",
  },
  {
    number: '02',
    title: 'Investing in Omani Talent',
    body: 'Omanisation is not a compliance target — it is a conviction. We recruit, train, and promote Omani professionals into technical and leadership positions at every level.',
  },
  {
    number: '03',
    title: 'Built for the Long Term',
    body: "As Oman's energy sector evolves toward Vision 2040, Al Baraka grows with it. Our capability, standards, and commitment make us a partner for the nation's next chapter.",
  },
];

export default function OmanIdentity() {
  const shouldReduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  return (
    <section className="section-pad bg-ivory border-t border-stone/30 relative overflow-hidden">
      <AmbientBackground variant="ivory" blobs />
      <div className="relative z-10 container-main">

        {/* ─── Asymmetric editorial grid ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1.1fr] gap-12 lg:gap-0">

          {/* Left column — headline + pull quote */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduce ? 0 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease }}
            className="lg:pr-16"
          >
            <span className="label-section mb-8 block">Omani Identity</span>

            {/* DM Serif Display editorial headline */}
            <h2
              className="font-display text-green-dark text-balance mb-10"
              style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.9rem)', lineHeight: '1.14', letterSpacing: '-0.015em' }}
            >
              Oman's Fields<br />
              <span className="italic text-green">Shaped Us.</span><br />
              Its Future<br />
              <span className="italic">Drives Us.</span>
            </h2>

            {/* Pull quote — editorial pattern, animated gold bar */}
            <blockquote className="relative pl-6 mb-10">
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-gold via-gold/50 to-transparent rounded-full"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: shouldReduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'top' }}
              />
              <p
                className="font-body text-charcoal"
                style={{ fontSize: '1.0625rem', lineHeight: '1.74' }}
              >
                "We did not enter Oman's energy sector — we grew up inside it.
                The southern fields shaped our standards.
                The people of Oman drive our purpose."
              </p>
              <footer className="mt-4 text-xs font-heading font-semibold tracking-widest uppercase text-charcoal-muted">
                Al Baraka Oilfield Services · Est. 2011
              </footer>
            </blockquote>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-green hover:text-green-light transition-colors duration-150 group"
            >
              Our Story
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Vertical divider — desktop only */}
          <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-stone to-transparent mx-8" />

          {/* Right column — three pillars */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }}
            className="lg:pl-8 space-y-8"
          >
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.number}
                variants={{
                  hidden:   { opacity: 0, y: shouldReduce ? 0 : 20 },
                  visible:  { opacity: 1, y: 0, transition: { duration: 0.52, ease } },
                }}
                className="flex gap-6"
              >
                {/* Swiss-style number */}
                <div
                  className="flex-shrink-0 font-heading font-semibold text-stone/70 select-none tabular-nums"
                  style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.25rem)', lineHeight: '1', letterSpacing: '-0.04em', marginTop: '-1px' }}
                >
                  {pillar.number}
                </div>
                <div>
                  <h3
                    className="font-heading font-semibold text-green-dark mb-2"
                    style={{ fontSize: '1rem', letterSpacing: '-0.01em' }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="font-body text-sm text-charcoal-muted" style={{ lineHeight: '1.68' }}>
                    {pillar.body}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Identity stat strip */}
            <motion.div
              variants={{
                hidden:   { opacity: 0, y: shouldReduce ? 0 : 14 },
                visible:  { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.42 } },
              }}
              className="pt-8 mt-2 border-t border-stone/50 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {[
                { value: '70%+', label: 'Omani Workforce' },
                { value: '2011', label: 'Founded in Oman' },
                { value: 'PDO',  label: 'Approved Since 2013' },
              ].map((item) => (
                <div key={item.label} className="rounded-lg border border-stone/40 bg-white/60 px-4 py-3 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0">
                  <div className="font-heading font-semibold text-green text-lg tabular-nums">{item.value}</div>
                  <div className="font-body text-xs text-charcoal-muted mt-0.5" style={{ lineHeight: '1.4' }}>{item.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
