import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './OutlookBackground.module.scss'
import * as language from './OutlookBackground_lang'
import { Parallax } from 'react-scroll-parallax'
import Quotation from '../../Quotation/Quotation'
import TrialImage from '@/assets/img/OutlookBackground_trial_c_bbc_gettyImages.png'
import Trial2Image from '@/assets/img/OutlookBackground_Trial2_c_AFP_Photo_ECCC_Mark_Peters.jpg'
import MuseumImage from '@/assets/img/OutlookBackground_museum_c_bbc_gettyImages.png'
import Painting1Image from '@/assets/img/OutlookBackground_Painting_Arresting_c_Vann_Nath_khmerrougeincambodia.png'
import Painting2Image from '@/assets/img/OutlookBackground_Painting_Blindfolded_c_Bou_Meng_2004_DC-Cam_Archives.png'
import Painting3Image from '@/assets/img/OutlookBackground_Painting_Prisoners_c_Vann_Nath_khmerrougeincambodia.jpg'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const OutlookBackground = (props: Props) => {
  const CHAPTER_ID: Chapter = 'OUTLOOK_BACKGROUND'

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
        <div className={classNames(classes.sectionColumn2)}>
          <p className={classNames(classes.headerText)}>{language.H1_Museum}</p>
          <p> {language.T1_Museum}</p>
        </div>
        <Parallax speed={5}>
          <img
            src={MuseumImage}
            style={{ width: '80%' }}
            className={classNames(classes.imgM)}
            title='Bilder aller Gefangenen im Museum, Quelle: https://www.gettyimages.de/detail/nachrichtenfoto/tuol-sleng-red-khmer-genocide-museum-in-phnom-penh-nachrichtenfoto/170479420?adppopup=true'
            alt='Testbild'
          />
        </Parallax>
        <div className={classNames(classes.section)}>
          <div className={classNames(classes.sectionColumn2)}>
            <p className={classNames(classes.headerText)}>{language.H2_Besuch}</p>
            <p className={classNames(classes.text)}> {language.T2_Besuch}</p>
          </div>
          <div className={classNames(classes.sectionColumnImg)}>
            <Parallax style={{ alignSelf: 'flex-end' }} speed={5}>
              <img
                src={Painting1Image}
                alt='Testbild'
                title='Verhaftung von zukünftigen Gefangenen; gemalt von Vann Nath, Quelle: https://khmerrougeincambodia.weebly.com/vann-naths-paintings.html'
              />
            </Parallax>
            <Parallax style={{ alignSelf: 'flex-start' }} speed={9}>
              <img
                src={Painting2Image}
                alt='Testbild'
                title='Bou Meng und seine Frau im S-21-Gefängnis mit verbundenen Augen; gemalt von Bou Meng, Quelle: http://d.dccam.org/Archives/Photographs/Photos/Bou_Meng/Thumbnails/picture01.png'
              />
            </Parallax>
            <Parallax style={{ alignSelf: 'flex-end' }} speed={7}>
              <img
                src={Painting3Image}
                alt='Testbild'
                title='Leben der Gefangenen im Gefängnis, Quelle: https://khmerrougeincambodia.weebly.com/vann-naths-paintings.html'
              />
            </Parallax>
          </div>
        </div>
        <div className={classNames(classes.section)}>
          <Parallax speed={5}>
            <img
              src={Trial2Image}
              style={{ width: '500px' }}
              title='Gerichtssaal während der Urteilsverlesung im Prozess gegen den Chef des S-21-Gefängnisses der Roten Khmer, Kaing Guek Eav, alias Duch, in Phnom Penh am 26. Juli 2010, Quelle: https://www.abc.net.au/news/2013-10-16/an-closing-statements-to-begin-in-khmer-rouge-trial/5025896'
              alt='Testbild'
            />
          </Parallax>
          <div className={classNames(classes.sectionColumn2)}>
            <p className={classNames(classes.headerText)}>{language.H3_Aufarbeitung}</p>
            <p className={classNames(classes.text)}>{language.T3_Aufarbeitung}</p>
          </div>
        </div>
        <div className={classNames(classes.section)}>
          <div style={{ paddingTop: '200px' }} className={classNames(classes.sectionColumn2)}>
            <p className={classNames(classes.headerText)}>{language.H4_Verhandlung}</p>
            <p className={classNames(classes.text)}> {language.T4_Verhandlung}</p>
          </div>
          <Parallax speed={5}>
            <img
              src={TrialImage}
              className={classNames(classes.imgM)}
              title='Schüler verfolgen den Prozess gegen den Chef des S-21-Gefängnisses der Roten Khmer im Fernsehen, Quelle: https://www.gettyimages.de/detail/nachrichtenfoto/students-watch-a-live-broacast-of-the-appeal-trial-nachrichtenfoto/138111019'
              alt='Testbild'
            />
          </Parallax>
        </div>
        <div className={classNames(classes.spacer)}></div>
        <div className={classNames(classes.quoteContainer)}>
          <div>
            <Quotation
              quote={language.Q1_Gericht}
              citation={'Chum Mey'}
              colorCode={'chum'}
              paralax={0}
            ></Quotation>
          </div>
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default OutlookBackground
