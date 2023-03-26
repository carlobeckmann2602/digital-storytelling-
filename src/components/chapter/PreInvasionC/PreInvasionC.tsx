import React, { useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './PreInvasionC.module.scss'
import * as language from './PreInvasionC_lang'
import sampleSorge from '@/assets/img/sample_sorge.png'
import sampleHappy from '@/assets/img/sample_happy.png'
import sampleLove from '@/assets/img/sample_love.png'
import sampleFight from '@/assets/img/sample_fight.png'

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
      <div className={classes.section}>
        <Parallax speed={5} translateX={['-100px', '-10px']}>
          <img src={sampleSorge} alt='Austauschbild' className={classes.img} />
        </Parallax>
        <Parallax speed={5} translateX={['-10px', '-100px']}>
          <p>{language.c_1950}</p>
        </Parallax>
      </div>
      <div className={classes.section}>
        <Parallax speed={5} translateX={['-100px', '-10px']}>
          <img src={sampleHappy} alt='Austauschbild' className={classes.img} />
        </Parallax>
        <Parallax speed={5} translateX={['-10px', '-100px']}>
          <p>{language.c_study}</p>
        </Parallax>
      </div>
      <div className={classes.section}>
        <Parallax speed={5} translateX={['-100px', '-10px']}>
          <img src={sampleLove} alt='Austauschbild' className={classes.img} />
        </Parallax>
        <Parallax speed={5} translateX={['-10px', '-100px']}>
          <p>{language.c_heirat}</p>
        </Parallax>
      </div>
      <div className={classes.section}>
        <Parallax speed={5} translateX={['-100px', '-10px']}>
          <img src={sampleFight} alt='Austauschbild' className={classes.img} />
        </Parallax>
        <Parallax speed={5} translateX={['-10px', '-100px']}>
          <p>{language.c_werkstatt}</p>
        </Parallax>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default PreInvasionC
