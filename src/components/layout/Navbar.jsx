import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

/*
  Design decisions:
  - CLAUDE.md: avoid clutter → minimal nav, no borders when over hero
  - Transparent on homepage hero, solid ivory when scrolled or on inner pages
  - Typography: Lexend font-medium text-sm for nav links
  - Contact button: compact, clean, no decorative borders
  - Swiss Modernism: strict alignment, mathematical spacing
*/

const navLinks = [
  { label: 'About',    href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'QHSE',     href: '/qhse' },
  { label: 'Awards',   href: '/awards' },
  { label: 'Media',    href: '/media' },
  { label: 'Careers',  href: '/careers' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const shouldReduce = useReducedMotion();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  const solid = scrolled || !isHome;

  return (
    <>
      <motion.nav
        initial={{ y: shouldReduce ? 0 : -6, opacity: shouldReduce ? 1 : 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${solid
            ? 'bg-ivory/96 backdrop-blur-md border-b border-stone/40 shadow-premium'
            : 'bg-transparent'}
        `}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-18 lg:h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="4"
                  fill={solid ? '#1B3A2D' : 'rgba(255,255,255,0.12)'} />
                <path d="M7 24L16 8L25 24" stroke="#FAFAF9" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.5 18.5H21.5" stroke="#B8932A" strokeWidth="1.5"
                  strokeLinecap="round" />
                <circle cx="16" cy="8" r="1.5" fill="#B8932A" />
              </svg>
              <div className="flex flex-col leading-none">
                <span className={`font-heading font-semibold text-sm tracking-tight transition-colors duration-200
                  ${solid ? 'text-green-dark' : 'text-ivory'}`}>
                  Al Baraka
                </span>
                <span className={`text-xs font-body transition-colors duration-200
                  ${solid ? 'text-charcoal-muted' : 'text-ivory/50'}`}>
                  Oilfield Services
                </span>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`
                    font-heading font-medium text-sm transition-colors duration-150 cursor-pointer
                    relative pb-0.5
                    after:absolute after:bottom-0 after:left-0 after:h-px after:transition-all after:duration-200
                    ${location.pathname === link.href
                      ? `after:w-full ${solid ? 'after:bg-green text-green' : 'after:bg-ivory text-ivory'}`
                      : `after:w-0 hover:after:w-full ${solid ? 'text-charcoal-light hover:text-green after:bg-green' : 'text-ivory/75 hover:text-ivory after:bg-ivory'}`
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Contact CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className={`
                  hidden lg:inline-flex px-5 py-2 text-sm font-heading font-semibold rounded-sm
                  transition-all duration-200 cursor-pointer
                  ${solid
                    ? 'bg-green text-ivory hover:bg-green-light'
                    : 'bg-ivory/10 border border-ivory/25 text-ivory hover:bg-ivory/18'}
                `}
              >
                Contact
              </Link>

              <button
                onClick={() => setOpen(!open)}
                className={`lg:hidden p-2 rounded-sm transition-colors ${solid ? 'text-charcoal' : 'text-ivory'}`}
                aria-label="Toggle navigation"
                aria-expanded={open}
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed top-18 left-0 right-0 z-40 bg-ivory/98 backdrop-blur-lg border-b border-stone/40 shadow-premium-lg"
          >
            <div className="container-main py-6 flex flex-col gap-0.5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: shouldReduce ? 0 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03, duration: 0.2 }}
                >
                  <Link
                    to={link.href}
                    className={`block py-3 px-2 font-heading font-medium text-sm border-b border-stone/30 last:border-0
                      transition-colors cursor-pointer
                      ${location.pathname === link.href ? 'text-green' : 'text-charcoal-light hover:text-green'}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4">
                <Link to="/contact" className="btn-primary w-full justify-center">
                  Contact Sales
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
