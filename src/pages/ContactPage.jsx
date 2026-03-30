import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import AmbientBackground from '../components/ui/AmbientBackground';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, integrate with your backend or form service
    setSubmitted(true);
  };

  return (
    <main className="pt-20">
      <PageHero label="Let's Talk" title="Contact Us" subtitle="Ready to discuss your project? Our team is here to help." />

      {/* Contact grid */}
      <section className="section-pad bg-ivory relative overflow-hidden">
        <AmbientBackground variant="ivory" dots blobs />
        <div className="relative z-10 container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading font-semibold text-2xl text-green-dark mb-2">Get In Touch</h2>
              <p className="text-charcoal-muted text-sm leading-relaxed mb-8">
                Contact our team to discuss your project requirements, request a proposal, or inquire about career opportunities.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-green/8 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-green" />
                  </div>
                  <div>
                    <div className="font-heading font-medium text-sm text-green-dark mb-1">Head Office</div>
                    <p className="text-sm text-charcoal-muted leading-relaxed">
                      Muscat, Sultanate of Oman<br />
                      (Southern Concession Area Operations)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-green/8 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-green" />
                  </div>
                  <div>
                    <div className="font-heading font-medium text-sm text-green-dark mb-1">Telephone</div>
                    <a href="tel:+96824000000" className="text-sm text-charcoal-muted hover:text-green transition-colors">
                      +968 2400 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-green/8 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-green" />
                  </div>
                  <div>
                    <div className="font-heading font-medium text-sm text-green-dark mb-1">Email</div>
                    <a href="mailto:info@barakaoman.com" className="text-sm text-charcoal-muted hover:text-green transition-colors">
                      info@barakaoman.com
                    </a>
                    <br />
                    <a href="mailto:careers@barakaoman.com" className="text-sm text-charcoal-muted hover:text-green transition-colors">
                      careers@barakaoman.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Trusted by */}
              <div className="mt-10 pt-8 border-t border-stone/40">
                <p className="text-xs font-heading font-semibold tracking-widest uppercase text-charcoal-muted mb-4">
                  Trusted By
                </p>
                <div className="flex gap-3 flex-wrap">
                  {['PDO', 'MEM', 'OPAL'].map((org) => (
                    <div key={org} className="px-4 py-2 bg-sand rounded-lg border border-stone/40 text-xs font-heading font-semibold text-green">
                      {org}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {submitted ? (
                <div className="h-full flex items-center justify-center bg-white rounded-2xl shadow-card p-12 text-center">
                  <div>
                    <CheckCircle size={48} className="text-green mx-auto mb-4" strokeWidth={1.5} />
                    <h3 className="font-heading font-semibold text-xl text-green-dark mb-2">Message Received</h3>
                    <p className="text-sm text-charcoal-muted leading-relaxed max-w-xs">
                      Thank you for reaching out. Our team will respond to your inquiry within one business day.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl shadow-card p-8 lg:p-10 space-y-5"
                >
                  <h3 className="font-heading font-semibold text-lg text-green-dark mb-1">Send a Message</h3>
                  <p className="text-xs text-charcoal-muted pb-2">All fields marked with * are required.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-heading font-semibold text-charcoal mb-1.5 tracking-wide">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-stone/50 bg-ivory text-sm text-charcoal placeholder-charcoal-muted/40
                                   focus:outline-none focus:ring-2 focus:ring-green/15 focus:border-green/60 transition-colors duration-150"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs font-heading font-semibold text-charcoal mb-1.5 tracking-wide">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-stone/50 bg-ivory text-sm text-charcoal placeholder-charcoal-muted/40
                                   focus:outline-none focus:ring-2 focus:ring-green/15 focus:border-green/60 transition-colors duration-150"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs font-heading font-semibold text-charcoal mb-1.5 tracking-wide">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-stone/50 bg-ivory text-sm text-charcoal placeholder-charcoal-muted/40
                                   focus:outline-none focus:ring-2 focus:ring-green/15 focus:border-green/60 transition-colors duration-150"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-heading font-semibold text-charcoal mb-1.5 tracking-wide">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-stone/50 bg-ivory text-sm text-charcoal placeholder-charcoal-muted/40
                                   focus:outline-none focus:ring-2 focus:ring-green/15 focus:border-green/60 transition-colors duration-150"
                        placeholder="+968 XXXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-heading font-semibold text-charcoal mb-1.5 tracking-wide">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-stone/50 bg-ivory text-sm text-charcoal placeholder-charcoal-muted/40
                                 focus:outline-none focus:ring-2 focus:ring-green/15 focus:border-green/60 transition-colors duration-150 resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center text-base py-3.5 group"
                  >
                    Send Message
                    <Send size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
