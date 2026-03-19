import ca from './ca'
import es from './es'

const translations = { ca, es }

export function getTranslation(lang, key) {
  const keys = key.split('.')
  let result = translations[lang]
  for (const k of keys) {
    if (result && typeof result === 'object') {
      result = result[k]
    } else {
      return key
    }
  }
  return result || key
}

export { ca, es }
export default translations
