import { Chapter, CHAPTER_TITLES } from '../helpers/constants'
import './SidebarRight.scss'

interface Props {
  currentChapter: Chapter
}

function SidebarRight(props: Props) {
  return (
    <div className='sidebarRight'>
      {/* 
      TODO: Replace with another Record that maps currentChapter to a year/date
      (if there are two or more years/dates in one chapter we might have to create a new 
        state for the current year/date in addition to the state for the currentChapter)
      */}
      <span>{CHAPTER_TITLES[props.currentChapter]}</span>
    </div>
  )
}

export default SidebarRight
