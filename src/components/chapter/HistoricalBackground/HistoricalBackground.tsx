import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './HistoricalBackground.module.scss'
import * as language from './HistoricalBackground_lang'
import TestImage from '@/assets/img/template-1.jpg'
import khmerRouge from '@/assets/img/HistoricalBackground_Khmer-Rouge-Guerrilla-soldiers.jpg'
import Soldiers from '@/assets/img/HistoricalBackground_Lon-Nol-courtesy-of-mekong.jpg'
import Mao from '@/assets/img/HistoricalBackground_Mao_Sihanouk.jpg'
import Sihanouk from '@/assets/img/HistoricalBackground_Sihanouk.jpg'
import LonNol from '@/assets/img/HistoricalBackground_Lon_Nol.jpg'
import VietnamKrieg from '@/assets/img/HistoricalBackground_Vietnam_Krieg.jpg'
import StackingCards from '../../StackingCards/StackingCards'
import { Parallax } from 'react-scroll-parallax'
import useSound from 'use-sound'
import BackgroundTraditionalSound from '@/assets/sounds/background_music_traditional.mp3'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
  soundEnabled: boolean
  fadingTime: number
}

const HistoricalBackground = (props: Props) => {
  const CHAPTER_ID: Chapter = 'HISTORICAL_BACKGROUND'

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
          <div>
            <div
              style={{ position: 'sticky', top: '20vh' }}
              className={classNames(classes.sectionColumn)}
            >
              <p className={classNames(classes.headerText)}>{language.H1_Unabhaengigkeit}</p>
              <p className={classNames(classes.text)}> {language.T1_Unabhaengigkeit}</p>
            </div>
          </div>
          <StackingCards>
            <img
              src={Mao}
              alt='Testbild'
              title='Mao Zedong (links), Prinz Sihanouk (Mitte) und Liu Shaoqi (rechts) bei einem Treffen in Peking (1965), Quelle: https://de.wikipedia.org/wiki/Kambodschanischer_Bürgerkrieg#/media/Datei:Mao_Sihanouk.jpg'
            />
            <img
              src={khmerRouge}
              alt='Testbild'
              title='Khmer Rouge Guerrilla Soldaten, Quelle: https://www.voacambodia.com/a/cambodia-author-examines-extreme-militarism/2495640.html'
            />
            <img
              src={Soldiers}
              alt='Testbild'
              title='Soldaten aufbruchbereit, Quelle: https://vietnamtheartofwar.com/1970/03/18/18-macrh-1970-cambodian-coup/'
            />
            <img
              src={TestImage}
              alt='Testbild'
              title='Abtrünnige Kämpfer der Roten Khmer sitzen hinter einem Ring von kambodschanischen Regierungssoldaten, Quelle: https://www1.wdr.de/radio/wdr5/sendungen/zeitzeichen/zeitzeichen-rote-khmer-kambodscha-kampf-gegen-sihanouk-100.html'
            />
          </StackingCards>
        </div>
        <div className={classNames(classes.section)}>
          <Parallax speed={5}>
            <img
              src={Sihanouk}
              className={classNames(classes.imgS)}
              alt='Testbild'
              title='Prinz Norodom Sihanouk, Quelle: https://de.alphahistory.com/Vietnamkrieg/norodom-sihanouk/'
            />
          </Parallax>
          <div className={classNames(classes.sectionColumn)}>
            <p className={classNames(classes.headerText)}>{language.H2_Prinz}</p>
            <p className={classNames(classes.text)}> {language.T2_Prinz}</p>
          </div>
        </div>
        <div className={classNames(classes.section)}>
          <div className={classNames(classes.sectionColumn)}>
            <p className={classNames(classes.headerText)}>{language.H3_Aufstand}</p>
            <p className={classNames(classes.text)}> {language.T3_Aufstand}</p>
          </div>
          <Parallax speed={15}>
            <img
              src={LonNol}
              className={classNames(classes.imgS)}
              alt='Testbild'
              title='General Lon Nol, Quelle: https://en.wikipedia.org/wiki/Lon_Nol'
            />
          </Parallax>
        </div>
        <div className={classNames(classes.section)}>
          <Parallax speed={-10}>
            <img
              src={VietnamKrieg}
              className={classNames(classes.imgS)}
              alt='Testbild'
              title='B-52-Bomber der US Air Force genutzt im Vietnam Krieg, Quelle: https://www.spiegel.de/fotostrecke/vietnam-krieg-fotostrecke-107851.html'
            />
          </Parallax>
          <div className={classNames(classes.sectionColumn)}>
            <p className={classNames(classes.headerText)}>{language.H4_Vietnam}</p>
            <p className={classNames(classes.text)}> {language.T4_Vietnam}</p>
          </div>
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default HistoricalBackground
