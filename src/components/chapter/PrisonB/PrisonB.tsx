import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './PrisonB.module.scss'
import * as language from './PrisonB_lang'
import { Parallax } from 'react-scroll-parallax'
import ConfessionPainting from '@/assets/img/PrisonB_Confession_c_Bou_Meng_2004_DC-Cam_Archives.png'
import EscortingPainting from '@/assets/img/PrisonB_Escorting_c_Bou_Meng_2004_DC-Cam_Archives.png'
import PaintPainting from '@/assets/img/PrisonB_Paint_c_Bou_Meng_2004_DC-Cam_Archives.png'
import Paint2Painting from '@/assets/img/PrisonB_Paint2_c_Bou_Meng_2004_DC-Cam_Archives.png'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const PrisonB = (props: Props) => {
  const CHAPTER_ID: Chapter = 'PRISON_B'

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
              src={EscortingPainting}
              alt='Testbild'
              className={classNames(classes.imgM)}
              title='Ein Anhänger der Roten Khmer eskortiert Bou Meng zum Gefängnisleiter "Dutch"; gemalt von Bou Meng (2004), Quelle: http://d.dccam.org/Archives/Photographs/Bou_Meng.htm'
            />
          </Parallax>
          <div className={classNames(classes.sectionColumn)}>
            <p className={classNames(classes.text)}> {language.T1_PrisonB}</p>
          </div>
        </div>
        <div className={classNames(classes.section)}>
          <p className={classNames(classes.text)}> {language.T2_PrisonB}</p>
        </div>
        <div className={classNames(classes.section)}>
          <div className={classNames(classes.sectionColumn)}>
            <p className={classNames(classes.text)}> {language.T3_PrisonB}</p>
            <p className={classNames(classes.text)}> {language.T4_PrisonB}</p>
          </div>
          <Parallax style={{ padding: '5% 0' }} speed={5}>
            <img
              src={ConfessionPainting}
              alt='Testbild'
              title='Die Roten Khmer erzwingen ein Geständnis von Bou Meng; gemalt von Bou Meng (2004), Quelle: http://d.dccam.org/Archives/Photographs/Bou_Meng.htm'
            />
          </Parallax>
        </div>
        <div className={classNames(classes.section)}>
          <Parallax speed={3}>
            <img
              src={PaintPainting}
              alt='Testbild'
              className={classNames(classes.imgS)}
              title='Bou Meng malt den Anführer der Roten Khmer, Pol Pot; gemalt von Bou Meng (2004), Quelle: http://d.dccam.org/Archives/Photographs/Bou_Meng.htm'
            />
          </Parallax>
          <div className={classNames(classes.sectionColumn2)}>
            <p className={classNames(classes.text)}> {language.T5_PrisonB}</p>
            <p className={classNames(classes.text)}> {language.T6_PrisonB}</p>
          </div>
        </div>
        <div style={{ paddingLeft: '35%' }}>
          <Parallax speed={3}>
            <img
              src={Paint2Painting}
              alt='Testbild'
              title='Bou Meng und andere Gefangene fertigen unter der Beobachtung von Anhängern der Roten Khmer Gemälde und Skulpturen von Pol Pot an; gemalt von Bou Meng (2004), Quelle: http://d.dccam.org/Archives/Photographs/Bou_Meng.htm'
            />
          </Parallax>
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default PrisonB
