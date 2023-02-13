import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTER_TITLES } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './ChildhoodC.module.scss'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const ChildhoodC = (props: Props) => {
  const ref = React.useRef<HTMLInputElement>(null)
  const onScreen = useOnScreen(ref, '-350px')
  useEffect(() => {
    onScreen && props.setCurrentChapter('CHILDHOOD_C')
  }, [onScreen])

  return (
    <div ref={ref} className={'chapter-heading-wrapper'}>
      <h2 className={classNames(classes.heading, 'chapter-heading')}>
        {CHAPTER_TITLES['CHILDHOOD_C']}
      </h2>
    </div>
  )
}

export default ChildhoodC
