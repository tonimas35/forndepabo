import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import ScrollReveal from '../components/ScrollReveal'

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-cream to-cream-dark/50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brown-dark mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-lg text-warm-gray">{t('contact.subtitle')}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-cream-dark/30">
              {sent && (
                <div className="mb-6 bg-green-50 text-green-700 px-4 py-3 rounded-xl text-sm font-medium">
                  {t('contact.sent')}
                </div>
              )}

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-brown-dark mb-1.5">{t('contact.name')}</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 border border-cream-dark/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta bg-warm-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brown-dark mb-1.5">{t('contact.email')}</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 border border-cream-dark/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta bg-warm-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brown-dark mb-1.5">{t('contact.phone')}</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-2.5 border border-cream-dark/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta bg-warm-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brown-dark mb-1.5">{t('contact.message')}</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 border border-cream-dark/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta bg-warm-white transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-terracotta hover:bg-terracotta-dark text-cream py-3 rounded-xl font-medium transition-colors cursor-pointer border-none text-base"
                >
                  {t('contact.send')}
                </button>
              </div>
            </form>
          </ScrollReveal>

          {/* Info & Map */}
          <div className="space-y-6">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-cream-dark/30">
                <h3 className="font-serif text-xl font-semibold text-brown-dark mb-6">{t('contact.findUs')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-terracotta mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-brown-dark">{t('home.address')}</p>
                      <p className="text-warm-gray text-sm">{t('home.city')}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-terracotta shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+34977344041" className="text-brown hover:text-terracotta transition-colors no-underline font-medium">
                      {t('home.phone')}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-terracotta shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-brown-dark">{t('home.hours')}</p>
                      <p className="text-warm-gray text-sm">{t('home.closed')}</p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="mt-6 pt-6 border-t border-cream-dark/30">
                  <h4 className="font-medium text-brown-dark mb-3">{t('contact.followUs')}</h4>
                  <div className="flex gap-3">
                    <a
                      href="https://www.instagram.com/forndepabo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center text-brown hover:text-terracotta hover:bg-terracotta/10 transition-colors no-underline"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-cream-dark/30 h-64 lg:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.3!2d1.1065!3d41.1545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a1415f4c8e0001%3A0x0!2sCarrer+de+les+Galanes%2C+27%2C+43201+Reus%2C+Tarragona!5e0!3m2!1sca!2ses!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Forn de Pa Bo - Ubicació"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
