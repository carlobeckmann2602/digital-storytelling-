import { Chapter, CHAPTER_TITLES } from '../helpers/constants'
import './SidebarRight.scss'
import { useState } from 'react'

interface Props {
  currentChapter: Chapter
}

function SidebarRight(props: Props) {
  const [expandTimeline, setExpandTimeline] = useState(false)

  return (
    <div className='sidebarRight'>
      {/* 
      TODO: Replace with another Record that maps currentChapter to a year/date
      (if there are two or more years/dates in one chapter we might have to create a new 
        state for the current year/date in addition to the state for the currentChapter)
      */}
      {/* <span>{CHAPTER_TITLES[props.currentChapter]}</span> */}
      <nav
        className='timeline'
        onMouseEnter={() => setExpandTimeline(true)}
        onMouseLeave={() => setExpandTimeline(false)}
      >
        <ul className={expandTimeline ? 'date' : 'hidden-date'}>XXXX</ul>
        <ul className={expandTimeline ? 'date' : 'hidden-date'}>XX.XX.XXXX</ul>
        <ul className={expandTimeline ? 'date' : 'hidden-date'}>XX.XX.XXXX</ul>
        <ul className='prev-date date'>1975-1978</ul>
        <ul className='current-date'>07.01.1979</ul>
        <ul className='next-date date'>13.07.1980</ul>
        <ul className={expandTimeline ? 'date' : 'hidden-date'}>XXXX-XXXX</ul>
        <ul className={expandTimeline ? 'date' : 'hidden-date'}>XX.XX.XXXX</ul>
        <ul className={expandTimeline ? 'date' : 'hidden-date'}>XX.XX.XXXX</ul>
      </nav>
    </div>
  )
}

export default SidebarRight
