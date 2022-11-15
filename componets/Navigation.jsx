/* eslint-disable @next/next/no-img-element */
import { useLang, useText } from '../locales'
import { useState, useEffect } from 'react'

const Navigation = () => {
  const { lang, setLang } = useLang()
  const t = useText()
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (!process.browser) return
    document.body.style.overflow = show ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [show])

  const changeLanguage = () => setLang(lang !== 'ua' ? 'ua' : 'en')
  return (
    <div className="nav">
      <div className="nav-title">
        <img
          src={lang === 'ua' ? '/assets/LogoUA.png' : '/assets/LogoGB.png'}
          alt={lang === 'ua' ? 'LogoUA' : 'LogoGB'}
        />
      </div>
      <div
        className={`nav-buttons ${show ? 'active' : ''}`}
        onClick={() => setShow(false)}
      >
        <a href="#about" className="nav-buttons__about">
          {t('about')}
        </a>
        <a href="#achievements" className="nav-buttons__achievements">
          {t('achievements')}
        </a>
        <a href="#support" className="nav-buttons__support">
          {t('support')}
        </a>

        <LanguageButton lang={lang} onChange={changeLanguage} />
        <a
          href="https://send.monobank.ua/jar/8WEmCt9AyE"
          className="nav-buttons__cooperation"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate 🇺🇦
        </a>
      </div>

      <LanguageButton isMobile={true} lang={lang} onChange={changeLanguage} />
      <MenuButton active={show} onClick={() => setShow(!show)} />
    </div>
  )
}

export default Navigation

const MenuButton = ({ active, onClick }) => (
  <button className={`menu-btn ${active ? 'active' : ''}`} onClick={onClick}>
    <span />
    <span />
    <span />
  </button>
)

const LanguageButton = ({ lang, onChange, isMobile }) => (
  <button
    className={`nav-buttons__language ${isMobile ? 'mobile' : ''}`}
    onClick={onChange}
  >
    <img
      src={lang === 'ua' ? '/assets/UA.svg' : '/assets/GB.svg'}
      alt={lang === 'ua' ? 'UA' : 'GB'}
    />
  </button>
)
