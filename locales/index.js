import en from './en'
import ua from './ua'
import { useRouter } from 'next/router'
const translations = {
  en,
  ua,
}

export const defaultLang = 'ua'
export const langs = Object.keys(translations)

export const useLang = () => {
  const router = useRouter()
  const { langId } = router.query
  const setLang = (lang) => {
    let langPath = defaultLang === lang ? '' : lang
    const newRoute =
      router.route.search('langId') !== -1
        ? router.route.replace('[langId]', langPath)
        : '/' + langPath
    router.push(newRoute)
  }

  return { lang: langId || defaultLang, setLang }
}
export const useText = () => {
  const { lang } = useLang()
  return (key) =>
    translations[lang || defaultLang][key] !== undefined
      ? translations[lang || defaultLang][key]
      : key
}