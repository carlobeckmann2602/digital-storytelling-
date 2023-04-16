import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './AfterInvasionC.module.scss'
import * as language from './AfterInvasionC_lang'
import { Parallax } from 'react-scroll-parallax'
import BikeImage from '@/assets/img/AfterInvasionC_Bike_c_unknown.jpg'
import MarchImage from '@/assets/img/AfterInvasionC_March_c_Roland_Neveu_LightRocket_Getty_Images.png'
import FactoryImage from '@/assets/img/AfterInvasionC_Factory_c_Documentation_Center_of_Cambodia.png'
import useSound from 'use-sound'
import BackgroundTraditionalSound from '@/assets/sounds/background_music_traditional.mp3'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
  soundEnabled: boolean
  fadingTime: number
}

const AfterInvasionC = (props: Props) => {
  const CHAPTER_ID: Chapter = 'AFTER_INVASION_C'

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
  const [play, { sound, stop }] = useSound(BackgroundTraditionalSound, {
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
        <div className={classNames(classes.section)}>
          <Parallax speed={5}>
            <img
              src={MarchImage}
              className={classNames(classes.imgM)}
              alt='Testbild'
              title='Tausende von Menschen strömen auf dem Monivong-Boulevard ins Zentrum von Phnom Penh, Quelle: https://api.time.com/wp-content/uploads/2019/01/gettyimages-158676320.jpg'
            />
          </Parallax>
          <div className={classNames(classes.sectionColumn)}>
            <p>{language.T1_Reise}</p>
            <p>{language.T2_Verlust}</p>
          </div>
        </div>
        <div className={classNames(classes.section)}>
          <p className={classNames(classes.highlight)}>{language.T3_Durchsage}</p>
        </div>
        <div className={classNames(classes.section)}>
          <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T4_Arbeit}</p>
          <Parallax speed={5}>
            <img
              src={BikeImage}
              className={classNames(classes.imgM)}
              alt='Testbild'
              title='Eine Straße in Phnom Penh, Quelle: https://www.pinterest.de/pin/545217098632521379/'
            />
          </Parallax>
        </div>
        <div className={classNames(classes.section)}>
          <Parallax speed={5}>
            <img
              src={FactoryImage}
              className={classNames(classes.imgM)}
              alt='Testbild'
              title='Kader der Roten Khmer bei der Arbeit in einer Textilfabrik, Quelle: https://www.researchgate.net/figure/Khmer-Rouge-cadre-working-in-a-textile-factory-source-Documentation-Center-of-Cambodia_fig5_275319887'
            />
          </Parallax>
          <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T5_Arbeit2}</p>
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default AfterInvasionC
