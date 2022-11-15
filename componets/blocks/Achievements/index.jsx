/* eslint-disable @next/next/no-img-element */
import { useState, Fragment } from 'react'
import { useLang, useText } from '../../../locales'
import useMediaQuery from '../../../utils/hooks'
import Timeline, { formatDate } from './Timeline'

const AchievementsBlock = () => {
  const { lang } = useLang()
  const [active, setActive] = useState(null)
  const t = useText()
  const isHorizontal = useMediaQuery('(min-width: 1200px)')

  return (
    <div className="achievements-block" id="achievements">
      <h3 className="title">{t('achievements')}</h3>
      <div
        className="achievements-block-content"
        style={{ flexDirection: isHorizontal ? 'column' : 'row' }}
      >
        <Timeline
          isHorizontal={isHorizontal}
          onEventChange={(event) => setActive(event)}
        />

        {/* {active !== null && state.list[active] && (
          <div className="timeline-content" data-aos="zoom-in-down">
            {state.list[active].content[lang]()}
          </div>
        )} */}
        {active !== null && (
          <div className="timeline-content" data-aos="zoom-in-down">
            {active.items.map((item) => (
              <Fragment key={item.time}>
                <b>{formatDate(item.time)}</b>
                {item.content[lang]()}
              </Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default AchievementsBlock
