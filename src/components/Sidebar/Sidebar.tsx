import { Chapter, CHAPTERS } from '../../helpers/constants'
import './Sidebar.scss'
import { useState } from 'react'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import Navbar from './Navbar/Navbar'

interface SidebarProps {
  currentChapter: Chapter
}

function Sidebar(props: SidebarProps) {
  const [expandTimeline, setExpandTimeline] = useState(false)

  return (
    <div className='sidebar'>
      <Navbar currentChapter={props.currentChapter} />
      {props.currentChapter !== 'GENERAL_INFO' ? (
        <Timeline currentChapter={props.currentChapter} />
      ) : null}
    </div>
  )

  interface TimelineProps {
    currentChapter: Chapter
  }

  function Timeline(props: TimelineProps) {
    const chaptersKeys = Array.from(CHAPTERS.keys())
    const currentChapter = props.currentChapter

    let indexOfCurrentKey = chaptersKeys.findIndex((value) => value === currentChapter)
    let currentKey = chaptersKeys[indexOfCurrentKey]
    let currentChapterTimeEmpty = CHAPTERS.get(currentKey)?.time === 'none'

    while (currentChapterTimeEmpty) {
      const currentChapter = CHAPTERS.get(currentKey)
      if (currentChapter?.time !== 'none') {
        currentChapterTimeEmpty = false
        currentKey = chaptersKeys[indexOfCurrentKey]
        break
      } else {
        indexOfCurrentKey = indexOfCurrentKey - 1
        currentKey = chaptersKeys[indexOfCurrentKey]
      }
    }

    let indexOfPrevKey = indexOfCurrentKey - 1
    let prevKey = chaptersKeys[indexOfPrevKey]
    let prevChapterTimeEmpty = CHAPTERS.get(prevKey)?.time === 'none'

    while (prevChapterTimeEmpty) {
      const prevChapter = CHAPTERS.get(prevKey)
      if (prevChapter?.time !== 'none') {
        prevChapterTimeEmpty = false
        prevKey = chaptersKeys[indexOfPrevKey]
        break
      } else {
        indexOfPrevKey = indexOfPrevKey - 1
        prevKey = chaptersKeys[indexOfPrevKey]
      }
    }

    let indexOfNextKey = indexOfCurrentKey + 1
    let nextKey = chaptersKeys[indexOfNextKey]
    let nextChapterTimeEmpty = CHAPTERS.get(nextKey)?.time === 'none'

    while (nextChapterTimeEmpty) {
      const nextChapter = CHAPTERS.get(nextKey)
      if (nextChapter?.time !== 'none') {
        nextChapterTimeEmpty = false
        nextKey = chaptersKeys[indexOfNextKey]
        break
      } else {
        indexOfNextKey = indexOfNextKey + 1
        nextKey = chaptersKeys[indexOfNextKey]
      }
    }

    const ANIMATION_DURATION = 0.8
    const variantsCurrentDate = {
      initialStyles: {
        scale: 0.5, // Scale down to prevDate size
        y: -35, // Move up to prevDate
      },
      animationStyles: {
        scale: 1, // Scale up to original size
        y: 0, // Move down to original position
        transition: {
          type: 'spring',
          duration: ANIMATION_DURATION,
        },
      },
    }

    const variantsPrevDate = {
      initialStyles: {
        y: 0.1, // Move a little bit to make it animate slightly
        scale: 0.9,
      },
      animationStyles: {
        y: 0,
        scale: 1, // Scale a little bit to make it animate slightly
        transition: {
          type: 'spring',
          duration: ANIMATION_DURATION,
        },
      },
    }

    const variantsNextDate = {
      initialStyles: {
        y: -35, // Move up to currentDate
        scale: 1.5, // Scale up to currentDate size
      },
      animationStyles: {
        scale: 1, // Scale down to original size
        y: 0, // Move down to original position
        transition: {
          type: 'spring',
          duration: ANIMATION_DURATION,
        },
      },
    }

    function renderDate(
      key: string,
      value: { time: string; title: string; place: string },
    ): JSX.Element {
      const animateStyles = expandTimeline ? false : 'animationStyles'
      const initialStyles = expandTimeline ? false : 'initialStyles'

      const animationVariant = () => {
        if (currentKey === key) {
          return variantsCurrentDate
        }
        if (prevKey === key) {
          return variantsPrevDate
        }
        if (nextKey === key) {
          return variantsNextDate
        }

        return undefined
      }

      return (
        <motion.div
          key={key}
          variants={animationVariant()}
          animate={animateStyles}
          initial={initialStyles}
          onMouseEnter={() => setExpandTimeline(true)}
          onMouseLeave={() => setExpandTimeline(false)}
        >
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
        </motion.div>
      )
    }

    return (
      <nav className={currentKey === 'GENERAL_INFO' ? 'timeline hidden' : 'timeline'}>
        {Array.from(CHAPTERS).map(([key, value]) => {
          if (value.time === 'none') {
            return
          }
          return renderDate(key, value)
        })}
      </nav>
    )
  }
}

export default Sidebar
