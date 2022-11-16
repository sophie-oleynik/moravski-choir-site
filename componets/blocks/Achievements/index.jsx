/* eslint-disable @next/next/no-img-element */
import { useState, Fragment } from 'react'
import { useLang, useText } from '../../../locales'
// import { useMediaQuery } from '../../../utils/hooks'
import Timeline, { formatDate } from './YearsTimeline'
import Slider from 'react-slick'
import 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const AchievementsBlock = () => {
  const { lang } = useLang()
  const [active, setActive] = useState(null)
  const t = useText()
  // const isHorizontal = useMediaQuery('(min-width: 1200px)')
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
        },
      },
    ],
  }

  return (
    <div className="achievements-block" id="achievements">
      <h3 className="title">{t('achievements')}</h3>
      <div className="achievements-block-content">
        <Timeline onEventChange={(event) => setActive(event)} />

        {/* {active !== null && (
          <div className="timeline-content" data-aos="zoom-in-down">
            {active.items.map((item) => (
              <Fragment key={item.time}>
                <b>{formatDate(item.time)}</b>
                {item.content[lang]()}
              </Fragment>
            ))}
          </div>
        )} */}
        {active !== null && (
          <Slider {...settings}>
            {active.items.map((item) => (
              <div className="timeline-content" key={item.time}>
                <b>{formatDate(item.time)}</b>
                {item.content[lang]()}
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  )
}

export default AchievementsBlock
