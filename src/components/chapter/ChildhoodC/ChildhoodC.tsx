import React, { useEffect } from 'react'
import { Chapter, CHAPTER_TITLES } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import './ChildhoodC.scss'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const ChildhoodC = (props: Props) => {
  const ref = React.useRef<HTMLInputElement>(null)
  const onScreen = useOnScreen(ref, '-300px')
  useEffect(() => {
    onScreen && props.setCurrentChapter('CHILDHOOD_C')
  }, [onScreen])

  return (
    <div ref={ref} className={'wrapper'}>
      <h2 className='heading'>{CHAPTER_TITLES['CHILDHOOD_C']}</h2>
    </div>
  )
}

export default ChildhoodC
