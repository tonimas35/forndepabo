import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-brown-dark text-cream/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-terracotta rounded-xl flex items-center justify-center">
                <span className="text-cream font-serif font-bold text-lg">Bo</span>
              </div>
              <div>
                <div className="font-serif font-bold text-cream text-xl">Forn de Pa Bo</div>
                <div className="text-sm text-cream/60">{t('footer.artisan')}</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-cream/60">
              Farina, aigua i molta paciència.<br />
              Tradició familiar a cada mossegada.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-serif text-cream text-lg mb-4">Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">{t('nav.home')}</Link>
              <Link to="/nosaltres" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">{t('nav.about')}</Link>
              <Link to="/productes" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">{t('nav.products')}</Link>
              <Link to="/contacte" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">{t('nav.contact')}</Link>
              <Link to="/comandes" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">{t('nav.orders')}</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-cream text-lg mb-4">{t('contact.title')}</h3>
            <div className="flex flex-col gap-2 text-sm text-cream/60">
              <p>{t('home.address')}</p>
              <p>{t('home.city')}</p>
              <a href="tel:+34977344041" className="text-cream/60 hover:text-cream transition-colors no-underline">{t('home.phone')}</a>
              <a
                href="https://www.instagram.com/forndepabo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/60 hover:text-cream transition-colors no-underline inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                @forndepabo
              </a>
            </div>
          </div>
        </div>

        {/* Seal */}
        <div className="mt-8 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-wheat rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-wheat" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <div className="text-sm">
              <div className="text-wheat font-medium">{t('home.artisanSeal')}</div>
              <div className="text-cream/50 text-xs">{t('footer.seal')}</div>
            </div>
          </div>
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} Forn de Pa Bo. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  )
}
