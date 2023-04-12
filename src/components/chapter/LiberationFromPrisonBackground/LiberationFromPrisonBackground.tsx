import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './LiberationFromPrisonBackground.module.scss'
import * as language from './LiberationFromPrisonBackground_lang'
import { Parallax } from 'react-scroll-parallax'
import ArmyImage1 from '@/assets/img/LiberationFromPrisonBackground_army1_07_01_1979.jpg'
import ArmyImage2 from '@/assets/img/LiberationFromPrisonBackground_army2_07_01_1979.jpg'
import VietnameseFighters from '@/assets/img/LiberationFromPrisonBackground_vietnamese-fighters_07_01_1979.jpg'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const LiberationFromPrisonBackground = (props: Props) => {
  const CHAPTER_ID: Chapter = 'LIBERATION_FROM_PRISON_BACKGROUND'

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
      <div className='chapter-body-wrapper'>
        <div className={classNames(classes.section)}>
          <Parallax speed={5}>
            <img
              src={ArmyImage1}
              title='Einzug vietnamesischer Soldaten in Phnom Penh im Januar 1979, Quelle: https://en.wikipedia.org/wiki/Cambodian–Vietnamese_War'
              alt='Testbild'
            />
          </Parallax>
          <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T1_Einmarsch}</p>
        </div>
        <div className={classNames(classes.section)}>
          <p>{language.T2_NeuerStaat}</p>
        </div>
        <div className={classNames(classes.section)}>
          <Parallax speed={5}>
            <img
              src={ArmyImage2}
              title='Soldaten befreien Hauptstadt Phnom Penh, Quelle: https://www.khmertimeskh.com/501214068/victorious-day-kingdom-rejoice-january-7-1979/'
              alt='Testbild'
            />
          </Parallax>
          <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T3_RoteKhmer}</p>
        </div>
        <div className={classNames(classes.section)}>
          <p>{language.T4_Wiederaufbau}</p>
        </div>
        <div className={classNames(classes.section)}>
          <p style={{ alignSelf: 'center', textAlign: 'justify' }}>
            {language.T5_Widerstandsgruppen}
          </p>
          <Parallax speed={5}>
            <img
              src={VietnameseFighters}
              title='Vietnamese volunteer soldiers in Phnom Penh after the overthrow of the Khmer Rouge, Quelle: https://www.khmertimeskh.com/501214068/victorious-day-kingdom-rejoice-january-7-1979/'
              alt='Testbild'
            />
          </Parallax>
        </div>
        <div className={classNames(classes.section)}>
          <p>{language.T6_Gefaengnis}</p>
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default LiberationFromPrisonBackground
