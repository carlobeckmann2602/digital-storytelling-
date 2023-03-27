import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './InvasionBackground.module.scss'
import * as language from './InvasionBackground_lang'
import { Parallax } from 'react-scroll-parallax'
import TestImage from '@/assets/img/template-1.jpg'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const InvasionBackground = (props: Props) => {
  const CHAPTER_ID: Chapter = 'INVASION_BACKGROUND'

  const topRef = React.useRef<HTMLInputElement>(null)
  const bottomRef = React.useRef<HTMLInputElement>(null)
  const topOnScreen = useOnScreen(topRef, '-350px')
  const bottomOnScreen = useOnScreen(bottomRef, '-350px')
  useEffect(() => {
    topOnScreen && props.setCurrentChapter(CHAPTER_ID)
  }, [topOnScreen])
  useEffect(() => {
    bottomOnScreen && props.setCurrentChapter(CHAPTER_ID)
  }, [bottomOnScreen])

  return (
    <div id={CHAPTER_ID}>
      <div ref={topRef} className={'header-outer'}>
        <div className='header-inner'>
          <h2 className={classNames(classes.heading, 'chapter-heading')}>
            {CHAPTERS.get(CHAPTER_ID)?.title}
          </h2>
        </div>
      </div>
      <div className='chapter-body-wrapper'>
        <div className={classNames(classes.section)}>
          <Parallax speed={10}>
            <img src={TestImage} style={{ width: '400px' }} alt='Testbild' />
          </Parallax>
          <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.teil1}</p>
        </div>
        <div className={classNames(classes.section)}>
          <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.teil2}</p>
          <Parallax speed={10}>
            <img src={TestImage} style={{ width: '400px' }} alt='Testbild' />
          </Parallax>
        </div>
      </div>
    </div>
  )
}

export default InvasionBackground
