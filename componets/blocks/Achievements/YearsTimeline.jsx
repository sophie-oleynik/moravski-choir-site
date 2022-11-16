import { useState, useEffect } from 'react'
import EVENTS from './events'

const YearsTimeline = ({ onEventChange }) => {
  const [state, setState] = useState({
    list: [],
    active: null,
    min_date: null,
    max_date: null,
    height: null,
  })
  const handleClick = (index) => {
    if (index === state.active) {
      onEventChange(null)
      setState({ ...state, active: null })
    } else {
      onEventChange(state.list[index])
      setState({ ...state, active: index })
    }
  }
  useEffect(() => {
    const events = initializeTimelimeDates(EVENTS)
    setState({ ...state, ...events, active: 0 })
    onEventChange(events.list[0])
  }, [])

  return (
    <div className="years-timeline">
      {state.list.map((yearEvents, i) => (
        <ArrowIcon
          key={i}
          isActive={i <= state.active}
          iconClassName={`arrow-icon ${
            i === state.active ? 'red' : i < state.active ? 'dark' : ''
          }`}
          text={yearEvents.year}
          onClick={() => handleClick(i)}
        />
      ))}
    </div>
  )
}

export default YearsTimeline

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
    year: new Date(event.date).getFullYear(),
    time: new Date(event.date).getTime(),
  }))
  let min_date = events.reduce(
    (acc, el) => (acc < el.time ? acc : el.time),
    Infinity
  )
  let max_date = events.reduce((acc, el) => (acc > el.time ? acc : el.time), 0)

  let years = {}
  events.forEach((event) => {
    if (!years[event.year]) years[event.year] = { year: event.year, items: [] }
    years[event.year].items.push(event)
  })

  return {
    list: Object.values(years),
    min_date,
    max_date,
  }
}

const ArrowIcon = ({ iconClassName, text, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`arrow-icon ${iconClassName || ''} ${isActive ? 'active' : ''}`}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792">
      <path d="M0,896l235.9-388.4H1792L1553.7,896l238.3,388.4H235.5L0,896z" />
    </svg>
    <div className="arrow-icon-text">{text}</div>
  </div>
)
