import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const services = [
  { label: 'Workover Rig Services', href: '/services' },
  { label: 'Flowline Construction', href: '/services' },
  { label: 'EPC Projects', href: '/services' },
  { label: 'Pipeline Maintenance', href: '/services' },
  { label: 'Manpower Contract Services', href: '/services' },
  { label: 'Logistics Support', href: '/services' },
];

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'QHSE', href: '/qhse' },
  { label: 'Awards & Accolades', href: '/awards' },
  { label: 'Media Centre', href: '/media' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

// Trust & Authority pattern: certifications strip in footer
const certBadges = ['PDO Approved', 'ISO 9001', 'OHSAS 18001', 'ISO 14001'];

export default function Footer() {
  return (
    <footer className="bg-green-dark text-ivory/60">
      {/* Gold top accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />

      {/* Trust badge strip — Trust & Authority footer pattern */}
      <div className="border-b border-ivory/8">
        <div className="container-main py-4 flex flex-wrap items-center gap-3">
          <span className="text-xs font-heading text-ivory/30 tracking-widest uppercase mr-2">Certified</span>
          {certBadges.map((badge) => (
            <span
              key={badge}
              className="px-3 py-1 rounded-sm border border-ivory/12 bg-ivory/4
                         text-xs font-heading text-ivory/45 tracking-wide"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="container-main pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="4" fill="rgba(255,255,255,0.07)" />
                <path d="M7 24L16 8L25 24" stroke="#FAFAF9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.5 18.5H21.5" stroke="#B8932A" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="16" cy="8" r="1.5" fill="#B8932A" />
              </svg>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-semibold text-ivory text-sm tracking-tight">Al Baraka</span>
                <span className="text-xs text-ivory/40 font-body tracking-wide">Oilfield Services</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-ivory/45 mb-5 max-w-[240px]">
              Oman's southern oilfield specialists. PDO-preferred, Omanisation-committed, safety-first — since 2011.
            </p>
            <div className="text-xs text-ivory/30 font-body">Est. 2011 · Sultanate of Oman</div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-ivory/80 text-xs tracking-widest uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.href}
                    className="flex items-center gap-2 text-sm text-ivory/45
                               hover:text-gold/80 transition-colors duration-150 cursor-pointer"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/30 flex-shrink-0" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-ivory/80 text-xs tracking-widest uppercase mb-5">
              Company
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-ivory/45 hover:text-gold/80 transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-ivory/80 text-xs tracking-widest uppercase mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-gold/50 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-ivory/45 leading-relaxed">
                  Muscat, Sultanate of Oman<br />
                  Southern Concession Areas
                </span>
              </div>
              <a
                href="tel:+96824000000"
                className="flex items-center gap-3 text-sm text-ivory/45 hover:text-gold/80 transition-colors duration-150"
              >
                <Phone size={14} className="text-gold/50 flex-shrink-0" />
                +968 2400 0000
              </a>
              <a
                href="mailto:info@barakaoman.com"
                className="flex items-center gap-3 text-sm text-ivory/45 hover:text-gold/80 transition-colors duration-150"
              >
                <Mail size={14} className="text-gold/50 flex-shrink-0" />
                info@barakaoman.com
              </a>
            </div>

            <div className="mt-6 pt-5 border-t border-ivory/8">
              <p className="text-xs text-ivory/28 leading-relaxed">
                Trusted partner of Petroleum Development Oman and the Ministry of Energy and Minerals.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-5 border-t border-ivory/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ivory/28 font-body">
            &copy; {new Date().getFullYear()} Al Baraka Oilfield Services LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-ivory/28">
            <Link to="/qhse" className="hover:text-ivory/50 transition-colors">QHSE Policy</Link>
            <Link to="/contact" className="hover:text-ivory/50 transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
