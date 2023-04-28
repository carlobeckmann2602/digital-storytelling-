import React, { useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './ChildhoodC.module.scss'
import * as language from './ChildhoodC_lang'
import PreyVeng from '@/assets/img/ChildhoodC_Rice_field_Prey_Veng.jpg'
import Wedding from '@/assets/img/ChildhoodC_Wedding.png'
import ChildrenInRicefield from '@/assets/img/ChildhoodC_ChildrenInRicefield.png'
import ManRepairingMotorbike from '@/assets/img/ChildhoodC_ManRepairingMotorbike.png'
import useSound from 'use-sound'
import VillagemarketSound from '@/assets/sounds/background_ambient_villagemarket.mp3'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
  soundEnabled: boolean
  fadingTime: number
}

const ChildhoodC = (props: Props) => {
  const CHAPTER_ID: Chapter = 'CHILDHOOD_C'

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
  const [play, { sound, stop }] = useSound(VillagemarketSound, {
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
          <Parallax speed={5}>
            <img
              src={PreyVeng}
              title='Aktuelles Bild der Provinz Prey Veng, Quelle: https://de.wikipedia.org/wiki/Prey_Veng_(Provinz)'
              style={{ width: '400px' }}
              alt='Testbild'
              className={classes.rotateLeft}
            />
          </Parallax>
          <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T1_Geburt}</p>
        </div>
        <div className={classes.section}>
          <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T2_Kindheit}</p>
          <Parallax speed={50}>
            <img
              src={ChildrenInRicefield}
              style={{ width: '400px' }}
              alt='Testbild'
              title='KI-generiertes Bild (labs.openai.com)'
              className={classes.rotateRight}
            />
          </Parallax>
        </div>
        <div className={classNames(classes.section)}>
          <Parallax speed={5}>
            <img
              src={ManRepairingMotorbike}
              style={{ width: '500px' }}
              alt='Testbild'
              title='KI-generiertes Bild (labs.openai.com)'
              className={classes.rotateLeft}
            />
          </Parallax>
          <div className={classNames(classes.sectionColumn)}>
            <p> {language.T3_Hauptstadt}</p>
            <p> {language.T4_Mechaniker}</p>
          </div>
        </div>
        <div className={classNames(classes.section)}>
          <div className={classes.sectionColumn}>
            <p>{language.T5_Heirat}</p>
          </div>
          <div className={classes.imgContainer}>
            <img
              src={Wedding}
              style={{ width: '400px' }}
              alt='Testbild'
              title='KI-generiertes Bild (labs.openai.com)'
              className={classes.tape}
            />
          </div>
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default ChildhoodC
