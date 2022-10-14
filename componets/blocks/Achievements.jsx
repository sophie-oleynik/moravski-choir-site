import { useState, useEffect, Fragment } from 'react'

const AchievementsBlock = () => {
  const [state, setState] = useState({
    list: [],
    min_date: null,
    max_date: null,
  })
  const [active, setActive] = useState(0)

  useEffect(() => {
    setState(initializeTimelimeDates(DATA))
  }, [])

  return (
    <div className="achievements-block">
      <h3 className="title">Achievements</h3>
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
          <div className="timeline-content">{state.list[active].content()}</div>
        )}
      </div>
    </div>
  )
}

export default AchievementsBlock

const DATA = [
  {
    date: '2017-09-01',
    content: () => (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
          diam quis enim lobortis scelerisque fermentum dui faucibus in ornare
          quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet
          massa vitae tortor condimentum lacinia quis vel eros donec ac odio
          tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra
          vitae congue eu, consequat ac felis donec et odio pellentesque diam
          volutpat commodo sed egestas egestas fringilla phasellus faucibus
        </p>
        <img src="/assets/folk.png" alt="Moravski" />
      </>
    ),
  },
  {
    date: '2018-04-15',
    content: () => (
      <>
        <img src="/assets/folk.png" alt="Moravski" />
      </>
    ),
  },
  {
    date: '2020-09-01',
    content: () => (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
          diam quis enim lobortis scelerisque fermentum dui faucibus in ornare
          quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet
          massa vitae tortor condimentum lacinia quis vel eros donec ac odio
          tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra
          vitae congue eu, consequat ac felis donec et odio pellentesque diam
          volutpat commodo sed egestas egestas fringilla phasellus faucibus
        </p>
      </>
    ),
  },
  {
    date: '2021-09-01',
    content: () => (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
          diam quis enim lobortis scelerisque fermentum dui faucibus in
        </p>
        <img src="/assets/folk.png" alt="Moravski" />
      </>
    ),
  },
]

const formatDate = (date) =>
  new Date(date).toISOString().slice(0, 10).split('-').reverse().join('.')

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
