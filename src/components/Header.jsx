import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useAuth } from '../context/AuthContext'

export default function Header() {
  const { t, lang, toggleLang } = useLanguage()
  const { user, logout, isAdmin } = useAuth()
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/nosaltres', label: t('nav.about') },
    { to: '/productes', label: t('nav.products') },
    { to: '/contacte', label: t('nav.contact') },
  ]

  return (
    <header className="bg-warm-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-cream-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline" onClick={() => setMobileOpen(false)}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-terracotta rounded-xl flex items-center justify-center shadow-md">
              <span className="text-cream font-serif font-bold text-sm sm:text-lg">Bo</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-serif font-bold text-brown-dark text-lg leading-tight">Forn de Pa Bo</div>
              <div className="text-xs text-brown-light">{t('hero.subtitle')}</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors no-underline ${
                  isActive(link.to)
                    ? 'bg-terracotta/10 text-terracotta'
                    : 'text-brown hover:bg-cream hover:text-brown-dark'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {user ? (
              <>
                {isAdmin ? (
                  <Link
                    to="/admin"
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors no-underline ${
                      location.pathname.startsWith('/admin')
                        ? 'bg-terracotta/10 text-terracotta'
                        : 'text-brown hover:bg-cream hover:text-brown-dark'
                    }`}
                  >
                    {t('nav.admin')}
                  </Link>
                ) : (
                  <Link
                    to="/comandes"
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors no-underline ${
                      location.pathname.startsWith('/comandes')
                        ? 'bg-terracotta/10 text-terracotta'
                        : 'text-brown hover:bg-cream hover:text-brown-dark'
                    }`}
                  >
                    {t('nav.orders')}
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-brown hover:bg-cream hover:text-brown-dark transition-colors cursor-pointer bg-transparent border-none"
                >
                  {t('nav.logout')}
                </button>
              </>
            ) : (
              <Link
                to="/comandes"
                className="px-4 py-2 bg-terracotta text-cream rounded-lg text-sm font-medium hover:bg-terracotta-dark transition-colors no-underline"
              >
                {t('nav.orders')}
              </Link>
            )}

            <button
              onClick={toggleLang}
              className="ml-2 px-3 py-1.5 border border-cream-dark rounded-lg text-xs font-medium text-brown hover:bg-cream transition-colors cursor-pointer bg-transparent"
              aria-label={lang === 'ca' ? 'Canviar a Castellano' : 'Cambiar a Català'}
            >
              {lang === 'ca' ? 'ES' : 'CA'}
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLang}
              className="px-2 py-1 border border-cream-dark rounded-lg text-xs font-medium text-brown cursor-pointer bg-transparent"
            >
              {lang === 'ca' ? 'ES' : 'CA'}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-brown cursor-pointer bg-transparent border-none"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-cream-dark/30 pt-2 animate-fade-in">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium no-underline ${
                  isActive(link.to)
                    ? 'bg-terracotta/10 text-terracotta'
                    : 'text-brown hover:bg-cream'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {user ? (
              <>
                <Link
                  to={isAdmin ? '/admin' : '/comandes'}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm font-medium text-brown hover:bg-cream no-underline"
                >
                  {isAdmin ? t('nav.admin') : t('nav.orders')}
                </Link>
                <button
                  onClick={() => { logout(); setMobileOpen(false) }}
                  className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-brown hover:bg-cream cursor-pointer bg-transparent border-none"
                >
                  {t('nav.logout')}
                </button>
              </>
            ) : (
              <Link
                to="/comandes"
                onClick={() => setMobileOpen(false)}
                className="block mx-4 mt-2 px-4 py-2.5 bg-terracotta text-cream rounded-lg text-sm font-medium text-center no-underline"
              >
                {t('nav.orders')}
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  )
}
