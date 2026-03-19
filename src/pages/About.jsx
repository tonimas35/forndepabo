import { useLanguage } from '../context/LanguageContext'
import ScrollReveal from '../components/ScrollReveal'

const galleryItems = [
  { label: 'Obrador', gradient: 'from-wheat/30 to-cream-dark' },
  { label: 'Massa mare', gradient: 'from-brown-light/20 to-wheat/30' },
  { label: 'Forn de llenya', gradient: 'from-terracotta/20 to-wheat/30' },
  { label: 'La botiga', gradient: 'from-cream-dark to-wheat-light/40' },
  { label: 'Pa acabat de fer', gradient: 'from-wheat/40 to-wheat-light/50' },
  { label: 'El nostre equip', gradient: 'from-brown/20 to-cream-dark' },
]

export default function About() {
  const { t } = useLanguage()

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-cream to-cream-dark/50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brown-dark mb-4">
            {t('about.title')}
          </h1>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* History */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <ScrollReveal>
          <div className="prose prose-lg max-w-none">
            <div className="flex items-start gap-6 mb-12">
              <div className="hidden sm:block w-1 bg-gradient-to-b from-terracotta to-wheat rounded-full self-stretch shrink-0" />
              <div className="space-y-6">
                <p className="text-brown text-lg leading-relaxed">{t('about.history1')}</p>
                <p className="text-brown text-lg leading-relaxed">{t('about.history2')}</p>
                <p className="text-brown text-lg leading-relaxed">{t('about.history3')}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {[
              { value: '21', label: 'Anys' },
              { value: '5', label: 'Persones' },
              { value: '24+', label: 'Productes' },
              { value: '∞', label: 'Passió' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm border border-cream-dark/30">
                <div className="text-3xl font-serif font-bold text-terracotta mb-1">{stat.value}</div>
                <div className="text-sm text-warm-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Philosophy */}
        <ScrollReveal>
          <div className="bg-brown-dark rounded-2xl p-8 sm:p-12 mb-16">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-cream mb-6">
              {t('about.philosophy')}
            </h2>
            <p className="text-cream/80 text-lg leading-relaxed">
              {t('about.philosophyText')}
            </p>
          </div>
        </ScrollReveal>

        {/* Team */}
        <ScrollReveal>
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brown-dark mb-3">
              {t('about.team')}
            </h2>
            <p className="text-warm-gray text-lg">{t('about.teamText')}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            <div className="bg-gradient-to-br from-wheat/30 to-cream-dark rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-brown/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-brown/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-brown-dark mb-1">Salvador López</h3>
              <p className="text-warm-gray text-sm">Mestre forner</p>
            </div>
            <div className="bg-gradient-to-br from-terracotta/20 to-cream-dark rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-brown/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-brown/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-brown-dark mb-1">Marta Castro</h3>
              <p className="text-warm-gray text-sm">Co-propietària</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Gallery */}
      <section className="bg-cream/50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brown-dark text-center mb-12">
              {t('about.gallery')}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className={`bg-gradient-to-br ${item.gradient} rounded-xl aspect-square flex items-center justify-center group cursor-pointer overflow-hidden`}>
                  <div className="text-center">
                    <svg className="w-12 h-12 text-brown/20 mx-auto mb-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                    <span className="text-sm text-brown/40 font-medium">{item.label}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
