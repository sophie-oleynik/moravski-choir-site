import { Fragment, useState, useEffect } from 'react'
import EVENTS from './events'
import { useText } from '../../../locales'

const Timeline = ({ onEventChange, isHorizontal }) => {
  const t = useText()
  const [state, setState] = useState({
    list: [],
    active: null,
    min_date: null,
    max_date: null,
    height: null,
  })
  useEffect(() => {
    setState(initializeTimelimeDates(EVENTS))
  }, [])

  // const content = document.querySelector('.timeline-content')
  // let contentHeight = content.style.height
  // setState({ ...state, height: contentHeight })
  // const timeline = document.querySelector('.timeline')
  // timeline.style.height = state.height

  const handleClick = (index) => {
    if (index === state.active) {
      onEventChange(null)
      setState({ ...state, active: null })
    } else {
      onEventChange(state.list[index])
      setState({ ...state, active: index })
    }
  }
  const directionPositionKey = isHorizontal ? 'left' : 'top'
  const directionValueKey = isHorizontal ? 'width' : 'height'
  return (
    <div className={`timeline ${isHorizontal ? 'horizontal' : 'vertical'}`}>
      {state.list.map((event, i) => (
        <Fragment key={i}>
          <div
            className={`event ${i === state.active ? 'active' : ''} ${
              i < state.active ? 'before-active' : ''
            }`}
            style={{
              [directionPositionKey]: event.top + '%',
            }}
            onClick={() => handleClick(i)}
          >
            <div className="event-label">
              {t(new Date(event.date).toLocaleString('en', { month: 'long' }))}
            </div>
          </div>
          {event.yearLabel && (
            <div
              className="timeline__year"
              style={{
                [directionPositionKey]: (event.top || 0) + '%',
              }}
            >
              {event.yearLabel}
            </div>
          )}
        </Fragment>
      ))}

      <div
        className="timeline-value"
        style={{
          [directionValueKey]: (state.list[state.active]?.top || 0) + '%',
        }}
      />
    </div>
  )
}

export default Timeline

export const formatDate = (date) =>
  new Date(date)
    .toISOString()
    .slice(0, 10)
    .split('-')
    .reverse()
    .slice(0, 2)
    .join('.')

const initializeTimelimeDates = (data) => {
  let events = data.map((event) => ({
    ...event,
    left: 0,
    time: new Date(event.date).getTime(),
  }))
  let min_date = events.reduce(
    (acc, el) => (acc < el.time ? acc : el.time),
    Infinity
  )
  let max_date = events.reduce((acc, el) => (acc > el.time ? acc : el.time), 0)
  const duration = max_date - min_date

  const getPercent = (time) => {
    return (((time - min_date) * 100) / duration).toFixed(2)
  }
  let result = {}
  let years = {}
  for (let i = 0; i < events.length; i++) {
    let event = events[i]
    event = { ...event, top: getPercent(event.time) }

    const year = new Date(event.date).getFullYear()
    const month = new Date(event.date).getMonth()

    if (!result[year + '-' + month]) {
      let yearLabel = undefined
      if (!years[year]) {
        yearLabel = year
        years[year] = true
      }
      const firstDayOfMonth = new Date(`${year}-${month + 1}-1 12:00`)
      result[year + '-' + month] = {
        items: [],
        month: month,
        year: year,
        yearLabel: yearLabel,
        date: !yearLabel ? firstDayOfMonth : event.date,
        top: getPercent(!yearLabel ? firstDayOfMonth.getTime() : event.time),
      }
    }

    result[year + '-' + month].items.push(event)
  }

  //   result = result.map((event) => {
  //     let el = { ...event, top: getPercent(event.time) }
  //     const year = new Date(el.date).getFullYear()
  //     if (!years[year]) {
  //       el.yearLabel = year
  //       years[year] = true
  //     }
  //     return el
  //   })

  return {
    list: Object.values(result),
    min_date,
    max_date,
  }
}
