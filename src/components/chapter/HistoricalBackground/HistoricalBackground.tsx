import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './HistoricalBackground.module.scss'
import * as language from './HistoricalBackground_lang'
import TestImage from '@/assets/img/template-1.jpg'
import PlaceholderImage from '@/assets/img/Placeholder.png'
import khmerRouge from '@/assets/img/HistoricalBackground_Khmer-Rouge-Guerrilla-soldiers.jpg'
import LonNol from '@/assets/img/HistoricalBackground_Lon-Nol-courtesy-of-mekong.jpg'
import Mao from '@/assets/img/HistoricalBackground_Mao_Sihanouk.jpg'
import StackingCards from '../../StackingCards/StackingCards'
import { Parallax } from 'react-scroll-parallax'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
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
        <div
          className={classNames(classes.section)}
          style={{ marginTop: '1000px', marginBottom: '400px' }}
        >
          <div
            style={{ position: 'sticky', top: '500px' }}
            className={classNames(classes.sectionColumn)}
          >
            <Parallax speed={-40}>
              <p className={classNames(classes.headerText)}>{language.H1_Unabhaengigkeit}</p>
              <p className={classNames(classes.text)}> {language.T1_Unabhaengigkeit}</p>
            </Parallax>
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
              src={LonNol}
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
            <img src={PlaceholderImage} className={classNames(classes.imgS)} alt='Testbild' />
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
          <Parallax speed={5}>
            <img src={PlaceholderImage} className={classNames(classes.imgS)} alt='Testbild' />
          </Parallax>
        </div>
        <div className={classNames(classes.section)}>
          <Parallax speed={5}>
            <img src={PlaceholderImage} className={classNames(classes.imgS)} alt='Testbild' />
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
