import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
// Documentation & Source: https://github.com/joshwcomeau/use-sound
import useSound from 'use-sound'
import sampleSound from '@/assets/sounds/sample_sound.mp3'
import classes from './ArrestC.module.scss'
import * as language from './ArrestC_lang'
import { Parallax } from 'react-scroll-parallax'
import ArrestImage from '@/assets/img/ArrestC_Painting_Arresting_c_Vann_Nath_khmerrougeincambodia.png'
import FotographImage from '@/assets/img/ArrestC_Painting_Fotograph_c_Vann_Nath_khmerrougeincambodia.png'
import Fotograph2Image from '@/assets/img/ArrestC_Painting_Fotograph2_c_Vann_Nath_khmerrougeincambodia.jpg'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
  soundEnabled: boolean
}

const ArrestC = (props: Props) => {
  const CHAPTER_ID: Chapter = 'ARREST_C'

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

  const [play, { sound, stop }] = useSound(sampleSound, {
    interrupt: true,
    loop: true,
  })

  const timeout = () =>
    setTimeout(() => {
      stop()
    }, 1000)

  useEffect(() => {
    if (topOnScreen && props.soundEnabled) {
      clearTimeout(timeout())
      props.setCurrentChapter(CHAPTER_ID)
      play()
      sound.fade(0, 0.5, 1000)
    } else {
      if (sound) {
        sound.fade(0.5, 0, 1000)
        timeout()
      }
    }
  }, [topOnScreen, props.soundEnabled])

  return (
    <div ref={topRef} id={CHAPTER_ID}>
      <div className={'header-outer'}>
        <div className='header-inner'>
          <h2 className={classNames(classes.heading, 'chapter-heading')}>
            {CHAPTERS.get(CHAPTER_ID)?.title}
          </h2>
        </div>
      </div>
      <div className='chapter-body-wrapper'>
        <div className={classNames(classes.section, classes.leftAlign)}>
          <p> {language.T1_Arbeit}</p>
        </div>
        <div id={CHAPTER_ID} className={classNames(classes.section)}>
          <Parallax speed={5}>
            <img src={ArrestImage} className={classNames(classes.imgM)} alt='Testbild' />
          </Parallax>
          <p style={{ textAlign: 'justify' }}> {language.T2_Verhaftung}</p>
        </div>
        <div></div>
        <div className={classNames(classes.section)}>
          <div className={classNames(classes.sectionColumn)}>
            <p>{language.T3_Gefaengnis}</p>
            <Parallax style={{ paddingTop: '20%' }} speed={5}>
              <img src={Fotograph2Image} style={{ width: '400px' }} alt='Testbild' />
            </Parallax>
          </div>
          <Parallax speed={5}>
            <img src={FotographImage} style={{ width: '400px' }} alt='Testbild' />
          </Parallax>
        </div>
        <p className={classNames(classes.highlight)}>{language.T4_Toul}</p>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default ArrestC
