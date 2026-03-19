import { createContext, useContext, useState, useCallback } from 'react'
import { getTranslation } from '../i18n'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('forn-lang')
    return saved || 'ca'
  })

  const toggleLang = useCallback(() => {
    setLang(prev => {
      const next = prev === 'ca' ? 'es' : 'ca'
      localStorage.setItem('forn-lang', next)
      return next
    })
  }, [])

  const t = useCallback((key) => getTranslation(lang, key), [lang])

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
