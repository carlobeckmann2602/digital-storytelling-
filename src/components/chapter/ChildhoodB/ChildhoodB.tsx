import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './ChildhoodB.module.scss'
import * as language from './ChildhoodB_lang'
import { Parallax } from 'react-scroll-parallax'
import sampleHappy from '@/assets/img/sample_happy.png'
import sampleHand from '@/assets/img/sample_hand.png'
import sampleSorge from '@/assets/img/sample_sorge.png'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const ChildhoodB = (props: Props) => {
  const CHAPTER_ID: Chapter = 'CHILDHOOD_B'

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
      <div className={classes.section}>
        <Parallax speed={10}>
          <img src={sampleHappy} alt='Austauschbild' className={classes.img} />
        </Parallax>
        <p>{language.b_geburt}</p>
      </div>
      <div className={classes.section}>
        <p>{language.b_pagode}</p>
        <Parallax speed={10}>
          <img src={sampleHand} alt='Austauschbild' className={classes.img} />
        </Parallax>
      </div>
      <div className={classes.section}>
        <Parallax speed={10}>
          <img src={sampleHappy} alt='Austauschbild' className={classes.img} />
        </Parallax>
        <p>{language.b_tischler}</p>
      </div>
      <div className={classes.section}>
        <p>{language.b_heimat}</p>
        <Parallax speed={10}>
          <img src={sampleSorge} alt='Austauschbild' className={classes.img} />
        </Parallax>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default ChildhoodB
