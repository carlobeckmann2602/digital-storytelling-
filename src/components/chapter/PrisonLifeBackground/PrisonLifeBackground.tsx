import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './PrisonLifeBackground.module.scss'
import * as language from './PrisonLifeBackground_lang'
import { Parallax } from 'react-scroll-parallax'
import InterrogationPainting from '@/assets/img/PrisonLifeBackground_Interrogation_c_Vann_Nath_khmerrougeincambodia.png'
import CorpseImage from '@/assets/img/PrisonLifeBackground_corpse1_c_DC-Cam_Archives.png'
import Torture1Image from '@/assets/img/PrisonLifeBackground_Torture1_c_Vann_Nath_khmerrougeincambodia.png'
import Torture2Image from '@/assets/img/PrisonLifeBackground_Torture2_c_Vann_Nath_khmerrougeincambodia.png'
import Torture3Image from '@/assets/img/PrisonLifeBackground_Torture3_c_Vann_Nath_khmerrougeincambodia.png'
import Torture4Image from '@/assets/img/PrisonLifeBackground_Torture4_c_Vann_Nath_khmerrougeincambodia.png'
import Torture5Image from '@/assets/img/PrisonLifeBackground_Torture5_c_Vann_Nath_khmerrougeincambodia.png'
import useSound from 'use-sound'
import BackgroundTraditionalSound from '@/assets/sounds/background_music_traditional.mp3'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
  soundEnabled: boolean
  fadingTime: number
}

const PrisonLifeBackground = (props: Props) => {
  const CHAPTER_ID: Chapter = 'PRISON_LIFE_BACKGROUND'

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
        <div className={classes.section}>
          <div className={classNames(classes.sectionColumn2)}>
            <p className={classNames(classes.headerText)}>{language.H1_PrisonLife}</p>
            <p className={classNames(classes.textCenter)}> {language.T1_PrisonLife}</p>
          </div>
          <Parallax speed={5}>
            <img
              src={InterrogationPainting}
              className={classNames(classes.imgS)}
              alt='Testbild'
              title='Verhör eines Gefangenen; gemalt von Vann Nath, Quelle: https://khmerrougeincambodia.weebly.com/vann-naths-paintings.html'
            />
          </Parallax>
        </div>
        <div className={classes.section}>
          <Parallax speed={5}>
            <img
              src={CorpseImage}
              className={classNames(classes.imgM)}
              alt='Testbild'
              title='Aufnahme eines getötenen Gefangenen im Gefängnis Toul Sleng; fotografiert von Ho Van Tay, Quelle: http://d.dccam.org/Archives/Photographs/Photos_from_Khmer_Rouge_Secret_Prison_S-21/index.html'
            />
          </Parallax>
          <div className={classNames(classes.sectionColumn2)}>
            <p className={classNames(classes.headerText)}>{language.H2_PrisonLife}</p>
            <p className={classNames(classes.textCenter)}> {language.T2_PrisonLife}</p>
          </div>
        </div>
        <div className={classes.section}>
          <div className={classNames(classes.sectionColumn2)}>
            <p className={classNames(classes.headerText)}>{language.H3_PrisonLife}</p>
            <p className={classNames(classes.text)}>{language.T3_PrisonLife}</p>
          </div>
        </div>
        <div className={classNames(classes.section)}>
          <p className={classNames(classes.textCenter)}>
            <span className={classNames(classes.bold)}>{language.H3_1_PrisonLife}</span>
            <span>{language.T3_1_PrisonLife}</span>
          </p>
          <Parallax speed={5}>
            <img
              src={Torture4Image}
              className={classNames(classes.imgS)}
              alt='Testbild'
              title='Folter durch Ertränkung in Tank; gemalt von Vann Nath, Quelle: https://khmerrougeincambodia.weebly.com/vann-naths-paintings.html'
            />
          </Parallax>
        </div>
        <div className={classNames(classes.section)}>
          <Parallax speed={5}>
            <img
              src={Torture3Image}
              className={classNames(classes.imgM)}
              alt='Testbild'
              title='Folter durch Ertränkung in Eimern; gemalt von Vann Nath, Quelle: https://khmerrougeincambodia.weebly.com/vann-naths-paintings.html'
            />
          </Parallax>
          <div className={classNames(classes.sectionColumn)}>
            <p className={classNames(classes.textCenter)}>
              <span className={classNames(classes.bold)}>{language.H3_2_PrisonLife}</span>
              <span>{language.T3_2_PrisonLife}</span>
            </p>
            <p className={classNames(classes.textCenter)}>
              <span className={classNames(classes.bold)}>{language.H3_3_PrisonLife}</span>
              <span>{language.T3_3_PrisonLife}</span>
            </p>
          </div>
        </div>
        <div className={classNames(classes.section)}>
          <p className={classNames(classes.textCenter)}>
            <span className={classNames(classes.bold)}>{language.H3_4_PrisonLife}</span>
            <span>{language.T3_4_PrisonLife}</span>
          </p>
          <Parallax speed={5}>
            <img
              src={Torture5Image}
              className={classNames(classes.imgM)}
              alt='Testbild'
              title='Gefangene betrauern den Tod eines Mitinsassen, der durch Erschöpfung und Folter verstorben ist; gemalt von Vann Nath, Quelle: https://khmerrougeincambodia.weebly.com/vann-naths-paintings.html'
            />
          </Parallax>
        </div>
        <div className={classNames(classes.section)}>
          <div style={{ paddingTop: '-100px' }} className={classNames(classes.sectionColumn)}>
            <Parallax style={{ paddingRight: '200px', zIndex: '1' }} speed={7}>
              <img
                src={Torture1Image}
                className={classNames(classes.imgS)}
                alt='Testbild'
                title='Exekution eines Gefangenen durch Kämpfer der Roten Khmer; gemalt von Vann Nath, Quelle: https://khmerrougeincambodia.weebly.com/vann-naths-paintings.html'
              />
            </Parallax>
            <Parallax style={{ paddingLeft: '10%' }} speed={-2}>
              <img
                src={Torture2Image}
                className={classNames(classes.imgXS)}
                alt='Testbild'
                title='Folter eines Gefangenen mit Werkzeug; gemalt von Vann Nath, Quelle: https://khmerrougeincambodia.weebly.com/vann-naths-paintings.html'
              />
            </Parallax>
          </div>
          <p className={classNames(classes.textCenter)}>
            <span className={classNames(classes.bold)}>{language.H3_5_PrisonLife}</span>
            <span>{language.T3_5_PrisonLife}</span>
          </p>
        </div>
        <div className={classes.section}>
          <p className={classNames(classes.text)}>{language.T4_PrisonLife}</p>
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default PrisonLifeBackground
