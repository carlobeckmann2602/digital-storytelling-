import { Chapter, CHAPTERS } from '../helpers/constants'
import './SidebarRight.scss'
import { useState } from 'react'
import classNames from 'classnames'

interface SidebarProps {
  currentChapter: Chapter
}

function SidebarRight(props: SidebarProps) {
  const [expandTimeline, setExpandTimeline] = useState(false)

  return (
    <div className='sidebarRight'>
      <Timeline currentChapter={props.currentChapter} />
    </div>
  )

  interface TimelineProps {
    currentChapter: Chapter
  }

  function Timeline(props: TimelineProps) {
    const currentKey = props.currentChapter

    // TODO: Maybe storing the next and previous chapter as well is easier?
    // Or a different datastructure maybe?
    const chaptersKeys = Array.from(CHAPTERS.keys())
    const indexOfCurrentKey = chaptersKeys.findIndex((value) => value === currentKey)
    const prevKey = chaptersKeys[indexOfCurrentKey - 1]
    const nextKey = chaptersKeys[indexOfCurrentKey + 1]

    return (
      <nav
        className='timeline'
        onMouseEnter={() => setExpandTimeline(true)}
        onMouseLeave={() => setExpandTimeline(false)}
      >
        {Array.from(CHAPTERS).map(([key, value]) => {
          return (
            <a
              href={`#${key}`}
              className={classNames({
                date: expandTimeline,
                'current-date': currentKey === key,
                'prev-date': prevKey === key,
                'next-date': nextKey === key,
                'hidden-date':
                  !expandTimeline && currentKey !== key && prevKey !== key && nextKey !== key,
              })}
              key={key}
            >
              {value.time}
            </a>
          )
        })}
      </nav>
    )
  }
}

export default SidebarRight
