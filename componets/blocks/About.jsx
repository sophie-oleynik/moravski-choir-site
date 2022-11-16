/* eslint-disable @next/next/no-img-element */
import { MEMBERS } from '../../constants'
import { useLang, useText } from '../../locales'
import Image from 'next/image'

const AboutBlock = () => {
  const t = useText()
  const { lang } = useLang()
  return (
    <div className="about-block" id="about">
      <div className="about-block-side">
        <h3 className="title" data-aos="fade-right">
          {t('about')}
        </h3>
        <div className="members-list">
          {MEMBERS.map((member, i) => (
            <div className="member" data-aos="fade-right" key={i}>
              <div className="member__img">
                <Image
                  layout="fill"
                  src={member.avatar}
                  alt={member.name[lang]}
                />
              </div>
              <div className="member-content">
                <div className="member__name">{member.name[lang]}</div>
                <div className="member__position">{member.position[lang]}</div>
              </div>
            </div>
          ))}
        </div>
        <a href="#contact" className="btn btn-primary">
          {t('sing')}
        </a>
      </div>
      <div className="about-block-content">
        <div
          className="text"
          data-aos="fade-left"
          dangerouslySetInnerHTML={{ __html: t('aboutUs1') }}
        ></div>
        <img
          src="/assets/folk.png"
          alt="Moravski"
          className="illustration"
          data-aos="fade-left"
        />
        <img
          src="/assets/filarmonia.png"
          alt="Moravski"
          className="illustration"
          data-aos="fade-left"
        />
        <div
          className="text"
          data-aos="fade-left"
          dangerouslySetInnerHTML={{ __html: t('aboutUs2') }}
        ></div>
      </div>
    </div>
  )
}

export default AboutBlock
