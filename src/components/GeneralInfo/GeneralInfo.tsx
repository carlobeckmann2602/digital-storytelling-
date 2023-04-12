import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../helpers/constants'
import useOnScreen from '../../helpers/useOnScreenHook'
import classes from './GeneralInfo.module.scss'
import * as language from './GeneralInfo_lang'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const GeneralInfo = (props: Props) => {
  // Used to identify the chapter
  // Also add this to the Chapter type and add corresponding data in the CHAPTERS map
  // (see constants.ts)
  const CHAPTER_ID: Chapter = 'GENERAL_INFO'

  // Refs for the elements that we want to detect whether on screen
  const topRef = React.useRef<HTMLInputElement>(null)
  const bottomRef = React.useRef<HTMLInputElement>(null)
  // Call the hooks passing in ref and root margin
  // Only considered onScreen if more than 350px of element is visible.
  const topOnScreen = useOnScreen(topRef, '-350px')
  const bottomOnScreen = useOnScreen(bottomRef, '-350px') // Set current chapter state in App every time onScreen changes
  // (also on every rerender, which should hopefully be fine)
  useEffect(() => {
    topOnScreen && props.setCurrentChapter(CHAPTER_ID)
  }, [topOnScreen])
  useEffect(() => {
    bottomOnScreen && props.setCurrentChapter(CHAPTER_ID)
  }, [bottomOnScreen])

  return (
    <div id={CHAPTER_ID} className={classes.heading}>
      <div ref={topRef} className={'header-outer'}>
        <div className='header-inner'>
          <h2 className={classNames(classes.heading, 'chapter-heading')}>{language.HEADLINE}</h2>
        </div>
      </div>
      <div className='chapter-body-wrapper'></div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default GeneralInfo
