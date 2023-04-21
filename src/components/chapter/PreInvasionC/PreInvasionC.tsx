import React, { useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './PreInvasionC.module.scss'
import * as language from './PreInvasionC_lang'
import PlaceholderImage from '@/assets/img/Placeholder.png'
import ChumEmptyWarStreet from '@/assets/img/PreInvasionC_ChumEmptyWarStreet.png'
import KhmerRougeAttack from '@/assets/img/PreInvasionC_KhmerRougeAttack.jpg'
import useSound from 'use-sound'
import WarSound from '@/assets/sounds/background_ambient_war_bomberGunfire.mp3'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
  soundEnabled: boolean
  fadingTime: number
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

  // ---------------------- SOUND IMPLEMENTATION ---------------------- //
  const [play, { sound, stop }] = useSound(WarSound, {
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
        <div className={classNames(classes.section, classes.rightAlign)}>
          <div className={classes.sectionColumn}>
            <p>{language.T1_Ueberfaelle}</p>
            <p>{language.T2_Militaer}</p>
          </div>
          <Parallax speed={5}>
            <img
              src={KhmerRougeAttack}
              alt='Testbild'
              className={classes.img}
              title='Phnom Penh nach einem Angriff der Roten Khmer (1974), Quelle: https://www.ushmm.org/genocide-prevention/countries/cambodia/case-study/background/war-closes-in'
            />
          </Parallax>
        </div>
        <div className={classes.section}>
          <Parallax speed={5}>
            <img
              src={ChumEmptyWarStreet}
              alt='Testbild'
              title='KI-generiertes Bild (labs.openai.com)'
              className={classes.img}
            />
          </Parallax>
          <p style={{ textAlign: 'justify' }}>{language.T3_Werkstatt}</p>
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default PreInvasionC
