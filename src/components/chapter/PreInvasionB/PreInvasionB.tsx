import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './PreInvasionB.module.scss'
import * as language from './PreInvasionB_lang'
import { Parallax } from 'react-scroll-parallax'
import sampleHand from '@/assets/img/sample_hand.png'
import sampleRevolution from '@/assets/img/sample_revolution.png'
import sampleLaufen from '@/assets/img/sample_gehen.png'
import sampleMalen from '@/assets/img/sample_malen.png'
import sampleZufrieden from '@/assets/img/sample_zufrieden.png'
import sampleSorge from '@/assets/img/sample_sorge.png'
import sampleFight from '@/assets/img/sample_fight.png'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const PreInvasionB = (props: Props) => {
  const CHAPTER_ID: Chapter = 'PRE_INVASION_B'

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
          <img src={sampleHand} alt='Austauschbild' className={classes.img} />
        </Parallax>
        <p>{language.b_erste_kontakte}</p>
      </div>
      <div className={classes.section}>
        <p>{language.b_ansprache}</p>
        <Parallax speed={10}>
          <img src={sampleRevolution} alt='Austauschbild' className={classes.img} />
        </Parallax>
      </div>
      <div className={classes.section}>
        <Parallax speed={10}>
          <img src={sampleLaufen} alt='Austauschbild' className={classes.img} />
        </Parallax>
        <p>{language.b_aufbruch}</p>
      </div>
      <div className={classes.section}>
        <p>{language.b_maler}</p>
        <Parallax speed={10}>
          <img src={sampleMalen} alt='Austauschbild' className={classes.img} />
        </Parallax>
      </div>
      <div className={classes.section}>
        <Parallax speed={10}>
          <img src={sampleZufrieden} alt='Austauschbild' className={classes.img} />
        </Parallax>
        <p>{language.b_biographie}</p>
      </div>
      <div className={classes.section}>
        <p>{language.b_bomabadiert}</p>
        <Parallax speed={10}>
          <img src={sampleSorge} alt='Austauschbild' className={classes.img} />
        </Parallax>
      </div>
      <div className={classes.section}>
        <Parallax speed={10}>
          <img src={sampleFight} alt='Austauschbild' className={classes.img} />
        </Parallax>
        <p>{language.b_druckerei}</p>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default PreInvasionB
