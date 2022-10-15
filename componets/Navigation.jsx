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
  return (
    <div className="nav">
      <div className="nav-title">
        {/* <img src="/assets/logo.png" alt="logo" className="nav-title__logo" /> */}
        {t('choir')}
      </div>
      <div className={`nav-buttons ${show ? 'active' : ''}`}>
        <a href="#about" className="nav-buttons__about">
          {t('about')}
        </a>
        <a href="#achievements" className="nav-buttons__achievements">
          {t('achievements')}
        </a>
        <a href="#support" className="nav-buttons__support">
          {t('support')}
        </a>
        <button
          className="nav-buttons__language"
          onClick={() => setLang(lang !== 'ua' ? 'ua' : 'en')}
        >
          <img
            src={lang === 'ua' ? '/assets/UA.svg' : '/assets/GB.svg'}
            alt={lang === 'ua' ? 'UA' : 'GB'}
          />
        </button>
        <a
          href="https://send.monobank.ua/jar/8WEmCt9AyE"
          className="nav-buttons__cooperation"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate 🇺🇦
        </a>
      </div>

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
