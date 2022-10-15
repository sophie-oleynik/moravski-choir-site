/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, Fragment } from 'react'
import { useLang, useText } from '../../locales'

const AchievementsBlock = () => {
  const { lang } = useLang()
  const [state, setState] = useState({
    list: [],
    min_date: null,
    max_date: null,
  })
  const [active, setActive] = useState(0)

  useEffect(() => {
    setState(initializeTimelimeDates(DATA))
  }, [])

  const t = useText()

  return (
    <div className="achievements-block" id="achievements">
      <h3 className="title">{t('achievements')}</h3>
      <div className="achievements-block-content">
        <div className="timeline">
          {state.list.map((event, i) => (
            <Fragment key={i}>
              <div
                className={`event ${i === active ? 'active' : ''} ${
                  i < active ? 'before-active' : ''
                }`}
                style={{
                  top: event.top + '%',
                }}
                onClick={() => setActive(i)}
              >
                <div className="event-label">{formatDate(event.date)}</div>
              </div>
              {event.yearLabel && (
                <div
                  className="timeline__year"
                  style={{ top: (event.top || 0) + '%' }}
                >
                  {event.yearLabel}
                </div>
              )}
            </Fragment>
          ))}

          <div
            className="timeline-value"
            style={{ height: (state.list[active]?.top || 0) + '%' }}
          />
        </div>

        {active !== null && state.list[active] && (
          <div className="timeline-content" data-aos="zoom-in-down">
            {state.list[active].content[lang]()}
          </div>
        )}
      </div>
    </div>
  )
}

export default AchievementsBlock

const DATA = [
  {
    date: '2018-10-20',
    content: {
      ua: () => (
        <>
          <p>
            20 жовтня 2018 року відбувся VIII Всеукраїнський хоровий конкурс
            імені Миколи Леонтовича. Хор Moravski став лауреатом ІІ премії в
            категорії камерних ансамблів. Головна мета VIII Всеукраїнського
            хорового конкурсу імені Миколи Леонтовича — сприяти подальшому
            розвитку хорового мистецтва, продовжувати і збагачувати традиції
            української музично-хорової культури, збільшувати її значення у
            духовному житті суспільства, ініціювати створення додаткового
            мистецького простору можливостей для молодих співаків і диригентів
            України.
          </p>
          <img src="/assets/LeontovichCompetition.jpg" alt="Leontovich" />
        </>
      ),
      en: () => (
        <>
          <p>
            On October 20, 2018, the 8th All-Ukrainian Choir Competition named
            after Mykola Leontovych was held. Moravski won the 2nd prize in the
            category of chamber ensembles. The main goal of the 8th
            All-Ukrainian Choral Competition named after Mykola Leontovych is to
            promote the further development of choral art, to continue and
            enrich the traditions of Ukrainian musical and choral culture, to
            increase its importance in the spiritual life of society, to
            initiate the creation of an additional artistic space of
            opportunities for young singers and conductors of Ukraine.
          </p>
          <img src="/assets/LeontovichCompetition.jpg" alt="Leontovich" />
        </>
      ),
    },
  },
  {
    date: '2018-12-22',
    content: {
      ua: () => (
        <>
          <p>
            22 грудня 2018 року в Колонній залі ім. М. Лисенка Національної
            філармонії України відбувся концерт «Viva Puccini» у супроводі
            Президентського оркестру за участю камерного хору Moravski.
          </p>
          <img src="/assets/Puccini.jpg" alt="Puccini" />
        </>
      ),
      en: () => (
        <>
          <p>
            On December 22, 2018 «Viva Puccini» concert accompanied by the
            Presidential Orchestra took place in the Column Hall named after M.
            Lysenko of the National Philharmonic of Ukraine with the
            participation of the Moravski Chamber Choir.
          </p>
          <img src="/assets/Puccini.jpg" alt="Puccini" />
        </>
      ),
    },
  },
  {
    date: '2019-10-08',
    content: {
      ua: () => (
        <>
          <p>
            8 жовтня 2019 року хор «Moravski» взяв участь у VI хоровому
            фестивалі «Школа Павла Муравського» та виконав композицію «Не
            сходило враці сонечко» В. Криштофовича разом з народною артисткою
            України Ніною Матвієнко. «Moravski» також брав участь у цьому
            фестивалі раніше, у 2017 та 2018 роках.
          </p>
          <img src="/assets/Matvienko.jpg" alt="Matvienko" />
        </>
      ),
      en: () => (
        <>
          <p>
            On October 8, 2019, the Moravski Choir took part in the 6th choral
            festival «School of Pavlo Muravskyi» and performed the composition
            «The sun did not rise in the morning» by V. Kryshtofovych together
            with People&apos;s Artist of Ukraine Nina Matvienko. Moravski also
            participated in this festival earlier, in 2017 and 2018.
          </p>
          <img src="/assets/Matvienko.jpg" alt="Matvienko" />
        </>
      ),
    },
  },
  {
    date: '2021-10-09',
    content: {
      ua: () => (
        <>
          <p>
            Moravski став лауреатом І премії Всеукраїнського пісенного
            фестивалю-конкурсу «Вишгородська Покрова». Мистецький захід
            покликаний популяризувати самодіяльний хоровий спів, продовжити
            традиції українського хорового співу, релігійних та народних
            обрядів, залучити до участі якнайбільшу кількість самодіяльних
            хорових колективів з різних куточків України, ознайомити широкий
            загал слухачів з найкращими зразками української духовної і народної
            музики.
          </p>
          <img src="/assets/pokrova.jpg" alt="pokrova" />
        </>
      ),
      en: () => (
        <>
          <p>
            Moravski became the laureate of the 1st prize of the All-Ukrainian
            song festival-competition «Vyshgorodska Pokrova». The artistic event
            is designed to popularize amateur choral singing, to continue the
            traditions of Ukrainian choral singing, religious and folk rites, to
            attract as many amateur choral groups from different parts of
            Ukraine as possible to participate, to acquaint a wide audience with
            the best samples of Ukrainian spiritual and folk music.
          </p>
          <img src="/assets/pokrova.jpg" alt="pokrova" />
        </>
      ),
    },
  },
  {
    date: '2021-12-17',
    content: {
      ua: () => (
        <>
          <p>
            Moravski взяв участь у хоровому святі «Хто, хто Миколая любить», що
            відбувся 17 грудня 2021 року в Національній філармонії України.
            Концерт циклу «Вечори української музики. Спадщина і сучасність». У
            програмі прозвучали хорові твори українських композиторів ХІХ-ХХ
            століть, а також колядки народів світу.
          </p>
          <img src="/assets/filarmonia1.jpg" alt="filarmonia" />
        </>
      ),
      en: () => (
        <>
          <p>
            Moravski took part in the choral celebration «Who, who loves
            Mykolai», which took place on December 17, 2021 at the National
            Philharmonic of Ukraine. Concert of the cycle «Evenings of Ukrainian
            music. Heritage and modernity». The program included choral works by
            Ukrainian composers of the 19th and 20th centuries, as well as
            carols of the peoples of the world.
          </p>
          <img src="/assets/filarmonia1.jpg" alt="filarmonia" />
        </>
      ),
    },
  },
]

const formatDate = (date) =>
  new Date(date)
    .toISOString()
    .slice(0, 10)
    .split('-')
    .reverse()
    .slice(0, 2)
    .join('.')

const initializeTimelimeDates = (events) => {
  let result = events.map((event) => ({
    ...event,
    left: 0,
    time: new Date(event.date).getTime(),
  }))
  let min_date = result.reduce(
    (acc, el) => (acc < el.time ? acc : el.time),
    Infinity
  )
  let max_date = result.reduce((acc, el) => (acc > el.time ? acc : el.time), 0)
  const duration = max_date - min_date

  const getPercent = (time) => {
    return (((time - min_date) * 100) / duration).toFixed(2)
  }

  let years = {}

  result = result.map((event) => {
    let el = { ...event, top: getPercent(event.time) }
    const year = new Date(el.date).getFullYear()
    if (!years[year]) {
      el.yearLabel = year
      years[year] = true
    }
    return el
  })

  return {
    list: result,
    min_date,
    max_date,
  }
}
