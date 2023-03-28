import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './AfterInvasionB.module.scss'
import * as language from './AfterInvasionB_lang'
import { Parallax } from 'react-scroll-parallax'
import FieldImage1 from '@/assets/img/AfterInvasionB_Field1_c_the_Tuol_Sleng_Museum_of_Genocide.jpg'
import FieldImage2 from '@/assets/img/AfterInvasionB_Field2_c_the_Tuol_Sleng_Museum_of_Genocide.jpg'
import FieldImage3 from '@/assets/img/AfterInvasionB_Field3_c_the_Tuol_Sleng_Museum_of_Genocide.jpg'
import UniformImage from '@/assets/img/AfterInvasionB_Uniform_c_Pictures_from_History_Kontributor.jpg'
import Quotation from '../../Quotation/Quotation'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const AfterInvasionB = (props: Props) => {
  const CHAPTER_ID: Chapter = 'AFTER_INVASION_B'

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
          <p>{language.T1_Ankunft}</p>
        </div>
        <div className={classNames(classes.section)}>
          <div className={classNames(classes.sectionColumn)}>
            <p>{language.T2_Kinder}</p>
            <p>{language.T3_Bio}</p>
          </div>
          <Parallax speed={5}>
            <img src={UniformImage} alt='Testbild' />
          </Parallax>
        </div>
        <div className={classNames(classes.section)}>
          <Parallax speed={5}>
            <img src={FieldImage1} alt='Testbild' />
          </Parallax>
          <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T4_Plantage}</p>
        </div>
        <div className={classNames(classes.section)}>
          <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T5_Straflager}</p>
          <Parallax speed={5}>
            <img src={FieldImage2} alt='Testbild' />
          </Parallax>
        </div>
        <Quotation quote={language.Q1_Plantage} citation={'Bou Meng'} colorCode={'bou'}></Quotation>
        <div className={classNames(classes.section)}>
          <Parallax speed={5}>
            <img src={FieldImage3} alt='Testbild' />
          </Parallax>
          <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T6_Verschwinden}</p>
        </div>
        <div className={classNames(classes.section)}>
          <p>{language.T7_Angst}</p>
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default AfterInvasionB
