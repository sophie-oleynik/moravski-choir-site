import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/index.scss'
import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (process.browser) {
      AOS.init();
    }
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
