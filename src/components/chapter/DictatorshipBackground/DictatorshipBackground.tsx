import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './DictatorshipBackground.module.scss'
import * as language from './DictatorshipBackground_lang'
import { Parallax } from 'react-scroll-parallax'
import UniformImage from '@/assets/img/DictatorshipBackground_Uniform_c_DC-Cam_Archives.jpg'
import PolPotImage from '@/assets/img/DictatorshipBackground_PolPot_c_unknown.jpg'
import TempleImage from '@/assets/img/DictatorshipBackground_Temple_c_CambridgeUniversityPressAndAssessment.jpg'
import LaborImage from '@/assets/img/DictatorshipBackground_ForcedLabor_c_ushmm.jpg'
import Quotation from '../../Quotation/Quotation'
import useSound from 'use-sound'
import AmbientSound from '@/assets/sounds/background_ambient_mystery.mp3'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
  soundEnabled: boolean
  fadingTime: number
}

const DictatorshipBackground = (props: Props) => {
  const CHAPTER_ID: Chapter = 'DICTATORSHIP_BACKGROUND'

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
  const [play, { sound, stop }] = useSound(AmbientSound, {
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
            <p className={classNames(classes.headerText)}>{language.H1_Kommunismus}</p>
            <p className={classNames(classes.text)}> {language.T1_Kommunismus}</p>
          </div>
        </div>
        <div className={classNames(classes.section)}>
          <div className={classNames(classes.sectionColumn)}>
            <p className={classNames(classes.headerText)}>{language.H2_Deportation}</p>
            <p className={classNames(classes.text)}> {language.T2_Deportation}</p>
          </div>
          <Parallax speed={5}>
            <img
              src={UniformImage}
              className={classNames(classes.imgS)}
              title='Rote Khmer Tanzgruppe, Quelle: http://d.dccam.org/Archives/Photographs/Stilled_Lives/Koy-Thoun3.jpg'
              alt='Testbild'
            />
          </Parallax>
        </div>
        <Quotation
          quote={language.Q1_PolPot}
          citation={'Pol Pot, 1978'}
          colorCode={'none'}
        ></Quotation>
        <div className={classNames(classes.section)}>
          <Parallax style={{ paddingTop: 70 }} speed={5}>
            <img
              src={PolPotImage}
              className={classNames(classes.imgM)}
              title='Portrait von Pol Pot, Quelle: https://commons.wikimedia.org/wiki/File:Pol_Pot.jpg'
              alt='Testbild'
            />
          </Parallax>
          <div className={classNames(classes.sectionColumn2)}>
            <p className={classNames(classes.headerText)}>{language.H3_Jahresplan}</p>
            <p className={classNames(classes.text)}> {language.T3_Jahresplan}</p>
          </div>
        </div>
        <div className={classNames(classes.section)}>
          <div className={classNames(classes.sectionColumn)}>
            <p className={classNames(classes.headerText)}>{language.H4_Verfolgung}</p>
            <p className={classNames(classes.text)}> {language.T4_Verfolgung}</p>
          </div>
          <Parallax speed={5}>
            <img
              src={TempleImage}
              className={classNames(classes.imgM)}
              title='Die Roten Khmer verfolgten buddhistische Mönche und zerstörten häufig religiöse Bilder und Strukturen, Quelle: https://www.ushmm.org/genocide-prevention/countries/cambodia/case-study/violence/khmer-rouge-revolution'
              alt='Testbild'
            />
          </Parallax>
        </div>
        <div className={classNames(classes.section)}>
          <Parallax speed={5}>
            <img
              src={LaborImage}
              className={classNames(classes.imgM)}
              title='Kambodschaner arbeiten 1976 an einem Bewässerungsprojekt, Quelle: https://www.ushmm.org/genocide-prevention/countries/cambodia/case-study/violence/forced-labor-and-collectivization'
              alt='Testbild'
            />
          </Parallax>
          <div className={classNames(classes.sectionColumn)}>
            <p className={classNames(classes.headerText)}>{language.H5_Lager}</p>
            <p className={classNames(classes.text)}> {language.T5_Lager}</p>
          </div>
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default DictatorshipBackground
