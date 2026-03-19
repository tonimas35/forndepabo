import { useLanguage } from '../context/LanguageContext'

const placeholderColors = {
  bread: 'from-wheat/40 to-wheat-light/60',
  savory: 'from-terracotta/30 to-wheat/40',
  pastry: 'from-terracotta-light/30 to-cream-dark/60',
  seasonal: 'from-terracotta/40 to-terracotta-light/40',
}

const placeholderIcons = {
  bread: (
    <svg className="w-16 h-16 text-brown/30" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6 2 10.5c0 3 2 5.5 5 7v2.5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V17.5c3-1.5 5-4 5-7C22 6 17.52 2 12 2zm0 2c4.42 0 8 3.13 8 6.5 0 2.13-1.41 4.16-3.8 5.5H7.8C5.41 14.66 4 12.63 4 10.5 4 7.13 7.58 4 12 4z"/>
    </svg>
  ),
  savory: (
    <svg className="w-16 h-16 text-brown/30" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
    </svg>
  ),
  pastry: (
    <svg className="w-16 h-16 text-brown/30" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9z"/>
    </svg>
  ),
  seasonal: (
    <svg className="w-16 h-16 text-brown/30" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
    </svg>
  ),
}

export default function ProductCard({ product, showPrice = true }) {
  const { lang } = useLanguage()
  const name = lang === 'ca' ? product.ca : product.es
  const desc = lang === 'ca' ? product.descCa : product.descEs
  const gradient = placeholderColors[product.category] || placeholderColors.bread
  const icon = placeholderIcons[product.category] || placeholderIcons.bread

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-cream-dark/30">
      {/* Placeholder Image */}
      <div className={`h-48 bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
        <div className="transform group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        {/* Badges */}
        {product.badges && (
          <div className="absolute top-3 left-3 flex gap-1.5">
            {product.badges.includes('glutenFree') && (
              <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                Sense gluten
              </span>
            )}
            {product.badges.includes('vegan') && (
              <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                Vegà
              </span>
            )}
          </div>
        )}
        {product.seasonal && (
          <div className="absolute top-3 right-3">
            <span className="bg-terracotta text-cream text-xs px-2 py-0.5 rounded-full font-medium">
              Temporada
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-serif text-lg font-semibold text-brown-dark mb-1 group-hover:text-terracotta transition-colors">
          {name}
        </h3>
        <p className="text-sm text-warm-gray leading-relaxed mb-3">{desc}</p>
        {showPrice && (
          <div className="text-terracotta font-semibold text-lg">
            {product.price.toFixed(2)} €
          </div>
        )}
      </div>
    </div>
  )
}
