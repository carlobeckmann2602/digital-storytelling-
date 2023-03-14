import { Chapter, CHAPTERS } from '../../helpers/constants'
import './Sidebar.scss'
import { useState } from 'react'
import classNames from 'classnames'
import { motion } from 'framer-motion'

interface SidebarProps {
  currentChapter: Chapter
}

function Sidebar(props: SidebarProps) {
  const [expandTimeline, setExpandTimeline] = useState(false)

  return (
    <div className='sidebar'>
      <span className='place'>{CHAPTERS.get(props.currentChapter)?.place}</span>
      <Timeline currentChapter={props.currentChapter} />
    </div>
  )

  interface TimelineProps {
    currentChapter: Chapter
  }

  function Timeline(props: TimelineProps) {
    const currentKey = props.currentChapter
    const chaptersKeys = Array.from(CHAPTERS.keys())
    const indexOfCurrentKey = chaptersKeys.findIndex((value) => value === currentKey)
    const prevKey = chaptersKeys[indexOfCurrentKey - 1]
    const nextKey = chaptersKeys[indexOfCurrentKey + 1]

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
      <nav
        className='timeline'
        onMouseEnter={() => setExpandTimeline(true)}
        onMouseLeave={() => setExpandTimeline(false)}
      >
        {Array.from(CHAPTERS).map(([key, value]) => {
          return renderDate(key, value)
        })}
      </nav>
    )
  }
}

export default Sidebar
