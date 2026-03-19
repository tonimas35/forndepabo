import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { products, categories } from '../data/products'
import ProductCard from '../components/ProductCard'
import ScrollReveal from '../components/ScrollReveal'

export default function Products() {
  const { t, lang } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-cream to-cream-dark/50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brown-dark mb-4">
            {t('products.title')}
          </h1>
          <p className="text-lg text-warm-gray">{t('products.subtitle')}</p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer border-none ${
              activeCategory === 'all'
                ? 'bg-terracotta text-cream shadow-md'
                : 'bg-white text-brown hover:bg-cream border border-cream-dark/30'
            }`}
          >
            {t('products.all')}
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer border-none ${
                activeCategory === cat.id
                  ? 'bg-terracotta text-cream shadow-md'
                  : 'bg-white text-brown hover:bg-cream'
              }`}
            >
              {lang === 'ca' ? cat.ca : cat.es}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 50}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-warm-gray py-12">No hi ha productes en aquesta categoria.</p>
        )}
      </section>
    </div>
  )
}
