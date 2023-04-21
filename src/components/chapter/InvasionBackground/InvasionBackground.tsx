import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './InvasionBackground.module.scss'
import * as language from './InvasionBackground_lang'
import { Parallax } from 'react-scroll-parallax'
import Students from '@/assets/img/InvasionBack_Khmer-Rouge-students-working.jpg'
import Marines from '@/assets/img/InvasionBack_Marines_botschaft.jpg'
import Soldiers from '@/assets/img/InvasionBack_Soldiers.jpg'
import PlaceholderImage from '@/assets/img/Placeholder.png'
import useSound from 'use-sound'
import BackgroundTraditionalSound from '@/assets/sounds/background_music_traditional.mp3'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
  soundEnabled: boolean
  fadingTime: number
}

const InvasionBackground = (props: Props) => {
  const CHAPTER_ID: Chapter = 'INVASION_BACKGROUND'

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
          <div className={classNames(classes.sectionColumn)}>
            <p className={classNames(classes.headerText)}>{language.H1_Zuflucht}</p>
            <p className={classNames(classes.text)}> {language.T1_Zuflucht}</p>
          </div>
          <Parallax speed={5}>
            <img
              src={Students}
              className={classNames(classes.imgS)}
              alt='Testbild'
              title='Arbeitende Studenten, Quelle: https://conflictfood.com/geschichte-kambodschas-1/'
            />
          </Parallax>
        </div>
        <div className={classNames(classes.section)}>
          <Parallax speed={5}>
            <img
              src={Marines}
              className={classNames(classes.imgS)}
              alt='Testbild'
              title='US-Marines bei der Evakuierung der Amerikanischen Botschaft am 12. April 1975, Quelle: https://de.wikipedia.org/wiki/Kambodschanischer_Bürgerkrieg#/media/Datei:Marines_deploy_at_LZ_Hotel.jpg'
            />
          </Parallax>
          <div className={classNames(classes.sectionColumn)}>
            <p className={classNames(classes.headerText)}>{language.H2_Ruecktritt}</p>
            <p className={classNames(classes.text)}> {language.T2_Ruecktritt}</p>
          </div>
        </div>
        <div className={classNames(classes.section)}>
          <div className={classNames(classes.sectionColumn)}>
            <p className={classNames(classes.headerText)}>{language.H3_April}</p>
            <p className={classNames(classes.text)}> {language.T3_April}</p>
          </div>
          <Parallax speed={5}>
            <img
              src={Soldiers}
              alt='Testbild'
              className={classes.imgS}
              title='Jubelende Soldaten am 12. April 1975 in Phnom Penh, Quelle: https://web.archive.org/web/20170214075500/https://rnbk.info/2011/11/12/the-fall-of-phnom-penh-1975/'
            />
          </Parallax>
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default InvasionBackground
