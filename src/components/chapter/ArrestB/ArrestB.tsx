import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './ArrestB.module.scss'
import * as language from './ArrestB_lang'
import { Parallax } from 'react-scroll-parallax'
import SoldierImage from '@/assets/img/ArrestB_Soldiers_c_DC-Cam_Archives.png'
import MugshotImage from '@/assets/img/ArrestB_Mugshot_c_ushmm.png'
import ArrestImage from '@/assets/img/ArrestB_Painting_Arrest_c_Bou_Meng_2004_DC-Cam_Archives.png'
import BlindfoldedImage from '@/assets/img/ArrestB_Painting_Blindfolded_c_Bou_Meng_2004_DC-Cam_Archives.png'
import PrisonImage from '@/assets/img/ArrestB_Prison_c_DC-Cam_Archives.jpg'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const ArrestB = (props: Props) => {
  const CHAPTER_ID: Chapter = 'ARREST_B'

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
            <img src={SoldierImage} className={classNames(classes.imgS)} alt='Testbild' />
          </Parallax>
          <div className={classNames(classes.sectionColumn)}>
            <p> {language.T1_Nachricht}</p>
            <p> {language.T2_Aufbruch}</p>
          </div>
        </div>
        <div className={classNames(classes.section)}>
          <p style={{ alignSelf: 'flex-Start', textAlign: 'justify' }}>{language.T3_Verdacht}</p>
          <Parallax style={{ paddingTop: '15%' }} speed={5}>
            <img src={PrisonImage} style={{ width: '400px' }} alt='Testbild' />
          </Parallax>
        </div>
        <div className={classNames(classes.section)}>
          <Parallax speed={5}>
            <img src={BlindfoldedImage} className={classNames(classes.imgM)} alt='Testbild' />
          </Parallax>
          <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T4_Verhaftung}</p>
        </div>
        <div className={classNames(classes.section)}>
          <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T5_Ankunft}</p>
          <Parallax speed={5}>
            <img src={ArrestImage} className={classNames(classes.imgM)} alt='Testbild' />
          </Parallax>
        </div>
        <div className={classNames(classes.section)}>
          <Parallax style={{ paddingTop: '-10%' }} speed={5}>
            <img src={MugshotImage} className={classNames(classes.imgM)} alt='Testbild' />
          </Parallax>
          <p style={{ alignSelf: 'center', textAlign: 'justify', paddingTop: '20%' }}>
            {language.T6_Gefaengnis}
          </p>
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default ArrestB
