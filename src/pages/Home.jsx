import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { featuredProducts } from '../data/products'
import ProductCard from '../components/ProductCard'
import ScrollReveal from '../components/ScrollReveal'

export default function Home() {
  const { t } = useLanguage()

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brown-dark via-brown to-brown-light overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(212,167,106,0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(199,91,57,0.2) 0%, transparent 50%)`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-32 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-wheat/20 text-wheat-light px-4 py-1.5 rounded-full text-sm mb-6 animate-fade-in">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              {t('hero.since')}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-cream mb-4 animate-fade-in-up leading-tight">
              Forn de Pa Bo
            </h1>
            <p className="text-xl sm:text-2xl font-serif italic text-wheat-light mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {t('hero.tagline')}
            </p>
            <p className="text-base sm:text-lg text-cream/70 mb-8 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t('hero.description')}
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/productes"
                className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-cream px-8 py-3.5 rounded-xl font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl no-underline"
              >
                {t('hero.cta')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="#FFFDF7"/>
          </svg>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brown-dark mb-3">
              {t('home.featured')}
            </h2>
            <p className="text-warm-gray text-lg">{t('home.featuredSub')}</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredProducts.slice(0, 6).map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 100}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <Link
              to="/productes"
              className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-dark font-medium text-lg transition-colors no-underline"
            >
              {t('home.viewAll')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Schedule & Location */}
      <section className="bg-cream/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brown-dark text-center mb-12">
              {t('home.schedule')}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-cream-dark/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-brown-dark">{t('home.scheduleLabel')}</h3>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-brown">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="font-medium">{t('home.hours')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-brown-light">
                    <div className="w-2 h-2 bg-red-400 rounded-full" />
                    <span>{t('home.closed')}</span>
                  </div>
                </div>

                <div className="border-t border-cream-dark/30 pt-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-terracotta mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-brown-dark">{t('home.address')}</p>
                      <p className="text-brown-light text-sm">{t('home.city')}</p>
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
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-cream-dark/30 h-full min-h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.3!2d1.1065!3d41.1545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a1415f4c8e0001%3A0x0!2sCarrer+de+les+Galanes%2C+27%2C+43201+Reus%2C+Tarragona!5e0!3m2!1sca!2ses!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '300px' }}
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

      {/* Artisan Seal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <ScrollReveal>
          <div className="bg-gradient-to-r from-brown-dark to-brown rounded-2xl p-8 sm:p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 border-3 border-wheat rounded-full mb-6">
              <svg className="w-10 h-10 text-wheat" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-cream mb-3">
              {t('home.artisanSeal')}
            </h2>
            <p className="text-cream/70 text-lg max-w-xl mx-auto">
              {t('home.artisanDesc')}
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
