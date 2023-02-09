import React, { useEffect } from 'react'
import { Chapter, CHAPTER_TITLES } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import './ChildhoodB.scss'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const ChildhoodB = (props: Props) => {
  const ref = React.useRef<HTMLInputElement>(null)
  const onScreen = useOnScreen(ref, '-300px')
  useEffect(() => {
    onScreen && props.setCurrentChapter('CHILDHOOD_B')
  }, [onScreen])

  return (
    <div ref={ref} className={'wrapper'}>
      <h2>{CHAPTER_TITLES['CHILDHOOD_B']}</h2>
    </div>
  )
}

export default ChildhoodB
