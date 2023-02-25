import { PropsWithChildren } from 'react'
import { Chapter, CHAPTERS } from '../helpers/constants'
import './SidebarLeft.scss'

interface SidebarProps {
  currentChapter: Chapter
}

function SidebarLeft(props: PropsWithChildren<SidebarProps>) {
  return (
    <div className='sidebarLeft'>
      <span className='place'>{CHAPTERS.get(props.currentChapter)?.place}</span>
    </div>
  )
}

export default SidebarLeft
