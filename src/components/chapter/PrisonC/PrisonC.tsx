import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './PrisonC.module.scss'
import * as language from './PrisonC_lang'
import { Parallax } from 'react-scroll-parallax'
import Torture1Image from '@/assets/img/PrisonC_Torture1_c_Vann_Nath_khmerrougeincambodia.jpg'
import Torture2Image from '@/assets/img/PrisonC_Torture2_c_Vann_Nath_khmerrougeincambodia.jpg'
import Torture3Image from '@/assets/img/PrisonC_Torture3_c_Vann_Nath_khmerrougeincambodia.jpg'
import useSound from 'use-sound'
import TensionSound from '@/assets/sounds/background_music_tension.mp3'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
  soundEnabled: boolean
  fadingTime: number
}

const PrisonC = (props: Props) => {
  const CHAPTER_ID: Chapter = 'PRISON_C'

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

  // ---------------------- SOUND IMPLEMENTATION ---------------------- //
  const [play, { sound, stop }] = useSound(TensionSound, {
    interrupt: true,
    loop: true,
  })

  useEffect(() => {
    if (topOnScreen && props.soundEnabled) {
      props.setCurrentChapter(CHAPTER_ID)
      play()
      sound.fade(0, 0.5, props.fadingTime)
    } else {
      if (sound && (!topOnScreen || !props.soundEnabled)) {
        sound.once('fade', () => {
          stop()
        })
        sound.fade(0.5, 0, props.fadingTime)
      }
    }
  }, [topOnScreen, props.soundEnabled])
  // ---------------------- SOUND IMPLEMENTATION ---------------------- //

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
        <div className={classes.section}>
          <div className={classNames(classes.sectionColumn)}>
            <p className={classNames(classes.text)}> {language.T1_PrisonC}</p>
          </div>
          <Parallax speed={5}>
            <img
              src={Torture1Image}
              alt='Testbild'
              className={classNames(classes.imgS)}
              title='Folter eines Gefangenen mit Werkzeugen; gemalt von Vann Nath, Quelle: https://khmerrougeincambodia.weebly.com/vann-naths-paintings.html'
            />
          </Parallax>
        </div>
        <div className={classes.section}>
          <Parallax speed={5}>
            <img
              src={Torture2Image}
              alt='Testbild'
              className={classNames(classes.imgM)}
              title='Ein Gefangener der Roten Khmer wird außerhalb des Gefängnisses ausgepeitscht; gemalt von Vann Nath, Quelle: https://khmerrougeincambodia.weebly.com/vann-naths-paintings.html'
            />
          </Parallax>
          <div className={classNames(classes.sectionColumn)}>
            <p className={classNames(classes.text)}> {language.T2_PrisonC}</p>
          </div>
        </div>
        <div className={classes.section}>
          <div className={classNames(classes.sectionColumn)}>
            <p className={classNames(classes.text)}> {language.T3_PrisonC}</p>
          </div>
          <Parallax speed={5}>
            <img
              src={Torture3Image}
              alt='Testbild'
              className={classNames(classes.imgS)}
              title='Ein Gefangener der Roten Khmer wird ausgepeitscht; gemalt von Vann Nath, Quelle: https://khmerrougeincambodia.weebly.com/vann-naths-paintings.html'
            />
          </Parallax>
        </div>
        <div className={classes.spacer} />
        <div className={classes.section}>
          <div className={classNames(classes.sectionColumn)}>
            <p className={classNames(classes.text)}> {language.T4_PrisonC}</p>
          </div>
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default PrisonC
