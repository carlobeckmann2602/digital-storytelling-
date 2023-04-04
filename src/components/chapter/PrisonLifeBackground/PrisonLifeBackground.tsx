import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './PrisonLifeBackground.module.scss'
import * as language from './PrisonLifeBackground_lang'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const PrisonLifeBackground = (props: Props) => {
  const CHAPTER_ID: Chapter = 'PRISON_LIFE_BACKGROUND'

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
          <div className={classNames(classes.section)}>
            <div className={classNames(classes.sectionColumn)}>
              <p className={classNames(classes.headerText)}>{language.H1_PrisonLife}</p>
              <p className={classNames(classes.text)}> {language.T1_PrisonLife}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='chapter-body-wrapper'>
        <div className={classes.section}>
          <div className={classNames(classes.section)}>
            <div className={classNames(classes.sectionColumn)}>
              <p className={classNames(classes.headerText)}>{language.H2_PrisonLife}</p>
              <p className={classNames(classes.text)}> {language.T2_PrisonLife}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='chapter-body-wrapper'>
        <div className={classes.section}>
          <div className={classNames(classes.section)}>
            <div className={classNames(classes.sectionColumn)}>
              <p className={classNames(classes.headerText)}>{language.H3_PrisonLife}</p>
              <p className={classNames(classes.text)}> {language.T3_PrisonLife}</p>
            </div>
          </div>
        </div>
        <div>
          <p className={classNames(classes.text)}> {language.T3_1_PrisonLife}</p>
          <p className={classNames(classes.text)}> {language.T3_2_PrisonLife}</p>
          <p className={classNames(classes.text)}> {language.T3_3_PrisonLife}</p>
          <p className={classNames(classes.text)}> {language.T3_4_PrisonLife}</p>
          <p className={classNames(classes.text)}> {language.T3_5_PrisonLife}</p>
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default PrisonLifeBackground
