/* eslint-disable @next/next/no-img-element */
import { useText } from '../../locales'

const AboutConductor = () => {
  const t = useText()
  return (
    <div className="about-conductor-block">
      <div
        className="about-conductor-block__text"
        data-aos="fade-up-right"
        dangerouslySetInnerHTML={{ __html: t('aboutOlena') }}
      ></div>
      <img
        src="/assets/OlenaRadko1.jpg"
        alt="OlenaRadko"
        className="about-conductor-block__img"
        data-aos="fade-up-left"
      />
    </div>
  )
}

export default AboutConductor
