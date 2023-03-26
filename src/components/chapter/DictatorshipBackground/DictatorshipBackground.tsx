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

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
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
            <img src={UniformImage} className={classNames(classes.imgS)} alt='Testbild' />
          </Parallax>
        </div>
        <Quotation
          quote={language.Q1_PolPot}
          citation={'Pol Pot, 1978'}
          colorCode={'none'}
        ></Quotation>
        <div className={classNames(classes.section)}>
          <Parallax style={{ paddingTop: 70 }} speed={5}>
            <img src={PolPotImage} className={classNames(classes.imgM)} alt='Testbild' />
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
            <img src={TempleImage} className={classNames(classes.imgM)} alt='Testbild' />
          </Parallax>
        </div>
        <div className={classNames(classes.section)}>
          <Parallax speed={5}>
            <img src={LaborImage} className={classNames(classes.imgM)} alt='Testbild' />
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
