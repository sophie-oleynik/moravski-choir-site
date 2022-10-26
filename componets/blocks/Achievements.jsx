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
    date: '2018-04-26',
    content: {
      ua: () => (
        <>
          <p>
            26 квітня 2018 року відбувся концерт камерного хору «Moravski» у Мистецькому салон КНУ ім. Тараса Шевченка, що відбувся у межах Х Міжнародної пасхальної асамблеї «Христос Воскресе».
          </p>
          <img src="/assets/ChristRisen.jpg" alt="Christ is Risen" />
        </>
      ),
      en: () => (
        <>
          <p>
            On April 26, 2018, the concert of the «Moravski» chamber choir in the Art Salon of KNU named after Taras Shevchenko, held within the X International Easter Assembly «Christ is Risen».
          </p>
          <img src="/assets/ChristRisen.jpg" alt="Christ is Risen" />
        </>
      ),
    },
  },
  {
    date: '2018-04-28',
    content: {
      ua: () => (
        <>
          <p>
            28 квітня 2018 року участь камерного хору «Moravski» у заключному гала-концерті міського огляду-конкурсу народної творчості міста Києва. Колектив отримав І місце у номінації «Академічні хори».
          </p>
          <img src="/assets/ReviewCompetition.jpg" alt="City review-competition" />
        </>
      ),
      en: () => (
        <>
          <p>
            On April 28, 2018, the participation of the «Moravski» chamber choir in the final gala concert of the city review-competition of folk creativity of the city of Kyiv. The team won first place in the «Academic Choirs» nomination.
          </p>
          <img src="/assets/ReviewCompetition.jpg" alt="City review-competition" />
        </>
      ),
    },
  },
  {
    date: '2018-09-07',
    content: {
      ua: () => (
        <>
          <p>
            07 вересня 2018 року участь камерного хору «Moravski» у фестивалі «Княжа родина» на території Національного заповідника «Софія Київська» м. Київ.
          </p>
          <img src="/assets/SofiaKyivska.jpg" alt="Sofia Kyivska" />
        </>
      ),
      en: () => (
        <>
          <p>
            On September 7, 2018, the participation of the «Moravski» chamber choir in the «Princely Family» festival on the territory of the National Reserve «Sofia Kyivska» in Kyiv.
          </p>
          <img src="/assets/SofiaKyivska.jpg" alt="Sofia Kyivska" />
        </>
      ),
    },
  },
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
    date: '2018-11-23',
    content: {
      ua: () => (
        <>
          <p>
            23 листопада 2018 участь хору у V Хоровому святі «Школа Павла Муравського».
          </p>
          <img src="/assets/PavloMuravskiySchool.jpg" alt="Pavlo Muravskiy School" />
        </>
      ),
      en: () => (
        <>
          <p>
            On November 23, 2018, the choir participated in the 5th Choral Festival «School of Pavel Muravskyi».
          </p>
          <img src="/assets/PavloMuravskiySchool.jpg" alt="Pavlo Muravskiy School" />
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
    date: '2019-03-03',
    content: {
      ua: () => (
        <>
          <p>
            03 березня 2019 року участь камерного хору «Moravski» у концерті композитора Тетяни Яшвілі «Квіти з вершин».
          </p>
          <img src="/assets/Yashvili.jpg" alt="Yashvili" />
        </>
      ),
      en: () => (
        <>
          <p>
            On March 3, 2019, the participation of the «Moravski» chamber choir in the concert of the composer Tatiana Yashvili «Flowers from the Peaks».
          </p>
          <img src="/assets/Yashvili.jpg" alt="Yashvili" />
        </>
      ),
    },
  },
  {
    date: '2019-06-09',
    content: {
      ua: () => (
        <>
          <p>
            9 червня 2019 року проведення першого сольного концерту в Україні «Калейдоскоп». 
          </p>
          <img src="/assets/Kaleidoscope.jpg" alt="Kaleidoscope" />
        </>
      ),
      en: () => (
        <>
          <p>
            On June 9, 2019, the first solo concert in Ukraine «Kaleidoscope».
          </p>
          <img src="/assets/Kaleidoscope.jpg" alt="Kaleidoscope" />
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
    date: '2019-10-11',
    content: {
      ua: () => (
        <>
          <p>
            11 жовтня 2019 року участь у концерті до ювілею Лариси Володимирівни Бухонської, що відбувся у Мистецькому салоні КНУ ім. Тараса Шевченка.
          </p>
          <img src="/assets/Bukhonska.jpg" alt="Bukhonska" />
        </>
      ),
      en: () => (
        <>
          <p>
            On October 11, 2019, participation in the concert for the anniversary of Larisa Volodymyrivna Bukhonska, held in the Art Salon of KNU named after Taras Shevchenko.
          </p>
          <img src="/assets/Bukhonska.jpg" alt="Bukhonska" />
        </>
      ),
    },
  },
  {
    date: '2019-12-25',
    content: {
      ua: () => (
        <>
          <p>
            25 грудня 2019 року проведення новорічно-різдвяного концерту «Подолання гравітації» у Мистецькому арсеналі м. Києва.
          </p>
          <img src="/assets/Gravity.jpg" alt="Overcoming Gravity" />
        </>
      ),
      en: () => (
        <>
          <p>
            On December 25, 2019, the New Year and Christmas concert «Overcoming Gravity» at the Kyiv Art Arsenal.
          </p>
          <img src="/assets/Gravity.jpg" alt="Overcoming Gravity" />
        </>
      ),
    },
  },
  {
    date: '2021-06-09',
    content: {
      ua: () => (
        <>
          <p>
            9 червня 2021 року участь хору у  записі проєкту «Agnus Dei / Боже Ягня» разом із Сестрами Тельнюк та Національним президентським оркестром України під керівництвом народного артиста України В. Василенка у Патріаршому Соборі Воскресіння Христового УГКЦ.
          </p>
          <img src="/assets/AgnusDei.jpg" alt="Agnus Dei" />
        </>
      ),
      en: () => (
        <>
          <p>
            On June 9, 2021, the choir participated in the recording of the project «Agnus Dei / Lamb of God» together with the Telniuk Sisters and the National Presidential Orchestra of Ukraine under the direction of People's Artist of Ukraine V. Vasylenko in the Patriarchal Cathedral of the Resurrection of Christ UGCC.
          </p>
          <img src="/assets/AgnusDei.jpg" alt="Agnus Dei" />
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
  {
    date: '2021-12-22',
    content: {
      ua: () => (
        <>
          <p>
            22 грудня 2021 року участь хору у  різдвяному гала-концерті «United in Song»: історія та сучасність культурної взаємодії (Україна й Італія), у Мистецькому салоні Київського національного університету ім. Тараса Шевченка, м. Київ.
          </p>
          <img src="/assets/UnitedInSong.jpg" alt="United in Song" />
        </>
      ),
      en: () => (
        <>
          <p>
            On December 22, 2021, the choir participated in the Christmas gala concert «United in Song»: history and modernity of cultural interaction (Ukraine and Italy), in the Art Salon of Kyiv National University named after Taras Shevchenko, Kyiv.
          </p>
          <img src="/assets/UnitedInSong.jpg" alt="United in Song" />
        </>
      ),
    },
  },
  {
    date: '2022-01-09',
    content: {
      ua: () => (
        <>
          <p>
            9 січня 2022 року організація різдвяного концерту, що присвячений світлій пам’яті відомої української диригентки, культурно-громадської діячки Лариси Бухонської.
          </p>
          <img src="/assets/InMemory.jpg" alt="In Memory of Larisa Bukhonska" />
        </>
      ),
      en: () => (
        <>
          <p>
            On January 9, 2022, the organization of a Christmas concert dedicated to the bright memory of the famous Ukrainian conductor, cultural and social activist Larisa Bukhonska.
          </p>
          <img src="/assets/InMemory.jpg" alt="In Memory of Larisa Bukhonska" />
        </>
      ),
    },
  },
  {
    date: '2022-01-15',
    content: {
      ua: () => (
        <>
          <p>
            15 січня 2022 року виступ хору у рамках ХХIІІ Різдвяного фестивалю «Велика коляда» у Львові, що відбувся у Храмі Пресвятої Євхаристії (колишній Домініканський собор).
          </p>
          <img src="/assets/BigCarol.jpg" alt="Big Carol" />
        </>
      ),
      en: () => (
        <>
          <p>
            On January 15, 2022, the performance of the choir as part of the 23rd Christmas festival «Big Carol» in Lviv, held in the Church of the Holy Eucharist (former Dominican Cathedral).
          </p>
          <img src="/assets/BigCarol.jpg" alt="Big Carol" />
        </>
      ),
    },
  },
  {
    date: '2022-02-18',
    content: {
      ua: () => (
        <>
          <p>
            18 лютого 2022 року виступ хору у рамках заходу «Такі різні, такі рідні — про мови греків України» презентація румейської віршованої абетки до Міжнародного дня рідної мови за ініціативи грецького товариства «Енотіта» у холі телецентру «Олівець».
          </p>
          <img src="/assets/Olivets.jpg" alt="Olivets" />
        </>
      ),
      en: () => (
        <>
          <p>
            On February 18, 2022, the performance of the choir as part of the event «So different, so native - about the languages of the Greeks of Ukraine» presentation of the Rumey verse alphabet for the International Mother Language Day at the initiative of the Greek society «Enotita» in the hall of the TV center «Olivets».
          </p>
          <img src="/assets/Olivets.jpg" alt="Olivets" />
        </>
      ),
    },
  },
  {
    date: '2022-08-27',
    content: {
      ua: () => (
        <>
          <p>
            27 серпня, 3 вересня 2022 року організація двох благодійних концертів «Вільні. Єдині. Непереможні» у підтримку українських вчених, що постраждали у наслідок повномасштабного вторгнення. За підтримки Ради молодих вчених при Міністерстві освіти і науки України. 
          </p>
          <img src="/assets/Free.jpg" alt="Free. United. Invincible" />
        </>
      ),
      en: () => (
        <>
          <p>
            On August 27, September 3, 2022, the organization of two charity concerts «Free. United. Invincible» in support of Ukrainian scientists who suffered as a result of the full-scale invasion. With the support of the Council of Young Scientists under the Ministry of Education and Science of Ukraine.
          </p>
          <img src="/assets/Free.jpg" alt="Free. United. Invincible" />
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
