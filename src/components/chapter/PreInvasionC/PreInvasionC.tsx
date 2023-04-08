import React, { useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './PreInvasionC.module.scss'
import * as language from './PreInvasionC_lang'
import PlaceholderImage from '@/assets/img/Placeholder.png'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const PreInvasionC = (props: Props) => {
  const CHAPTER_ID: Chapter = 'PRE_INVASION_C'

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
        <div className={classes.section}>
          <Parallax speed={5}>
            <img src={PlaceholderImage} alt='Austauschbild' className={classes.img} />
          </Parallax>
          <p style={{ textAlign: 'justify' }}>{language.T1_Ueberfaelle}</p>
        </div>
        <div className={classes.section}>
          <p style={{ textAlign: 'justify' }}>{language.T2_Militaer}</p>
          <Parallax speed={5}>
            <img src={PlaceholderImage} alt='Austauschbild' className={classes.img} />
          </Parallax>
        </div>
        <div className={classes.section}>
          <Parallax speed={5}>
            <img src={PlaceholderImage} alt='Austauschbild' className={classes.img} />
          </Parallax>
          <p style={{ textAlign: 'justify' }}>{language.T3_Werkstatt}</p>
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default PreInvasionC
