import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './EscapeFromPrisonBoth.module.scss'
import * as language from './EscapeFromPrisonBoth_lang'
import { Parallax } from 'react-scroll-parallax'
import BouTiedUp from '@/assets/img/EscapeFromPrisonBoth_BouTiedUp.png'
import BouEatingBerries from '@/assets/img/EscapeFromPrisonBoth_BouEatingBerries.png'
import BouDrawingLenin from '@/assets/img/EscapeFromPrisonBoth_BouDrawingLenin.png'
import ChumLeavingPrison from '@/assets/img/EscapeFromPrisonBoth_ChumLeavingPrison.png'
import ChumHiking from '@/assets/img/EscapeFromPrisonBoth_ChumHiking.png'
import useSound from 'use-sound'
import GunfireSound from '@/assets/sounds/background_ambient_distantGunfireRain.mp3'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
  soundEnabled: boolean
  fadingTime: number
}

const EscapeFromPrisonBoth = (props: Props) => {
  const CHAPTER_ID: Chapter = 'ESCAPE_FROM_PRISON_BOTH'

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
  const [play, { sound, stop }] = useSound(GunfireSound, {
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

  /* Formula (all elements must have the same idKey):
  (Height of own sticky-container)
  + (Height of Content of other sides container)
  + (Height of next sticky-container of other side) */
  const computeHeight = (idKey: string, offset = 0) => {
    const elements = document.querySelectorAll(idKey)
    let height = offset
    elements.forEach((elem) => (height += elem.getBoundingClientRect().height))
    return height
  }

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
          <p>{language.Intro}</p>
        </div>
        <div className={classes.section}>
          <div className={classes.splitScreenWrapper}>
            <div className={classNames(classes.leftSide)}>
              {/* Offset container for first section */}
              <div style={{ height: computeHeight('.right-first', 0) }}></div>
              {/* 1.section LEFT */}
              <div className={classNames(classes.section, 'left-first')}>
                <div className={classNames(classes.subsection, classes.leftAlign)}>
                  <p>{language.C_1}</p>
                </div>
                <div className={classNames(classes.subsection, classes.rightAlign)}>
                  <Parallax speed={3}>
                    <img
                      src={ChumLeavingPrison}
                      alt='Testbild'
                      className={classNames(classes.imgS)}
                      title='KI-generiertes Bild (labs.openai.com)'
                    />
                  </Parallax>
                </div>
                <div className={classNames(classes.subsection, classes.leftAlign)}>
                  <p>{language.C_2}</p>
                </div>
                <div className={classNames(classes.subsection, classes.leftAlign)}>
                  <p>{language.C_3}</p>
                </div>
                <div className={classNames(classes.subsection, classes.rightAlign)}>
                  <Parallax speed={3}>
                    <img
                      src={ChumHiking}
                      alt='Testbild'
                      className={classNames(classes.imgS)}
                      title='KI-generiertes Bild (labs.openai.com)'
                    />
                  </Parallax>
                </div>
              </div>
              <div style={{ height: computeHeight('.right-second', 0) }}>
                <div
                  className={classNames(
                    classes.section,
                    classes.sticky,
                    'left-first',
                    'right-second',
                  )}
                >
                  <div className={classNames(classes.subsection, classes.leftAlign)}>
                    <p>{language.C_4}</p>
                  </div>
                </div>
              </div>
              <div className={classNames(classes.section, 'left-second')}>
                <div className={classNames(classes.subsection, classes.leftAlign)}>
                  <p>{language.C_5}</p>
                </div>
              </div>
              <div style={{ height: computeHeight('.left-second', 0) }}>
                <div
                  className={classNames(
                    classes.section,
                    classes.sticky,
                    'left-second',
                    'right-third',
                  )}
                >
                  <div className={classNames(classes.subsection, classes.leftAlign)}>
                    <p>{language.C_6}</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className={classes.dashed}></hr>
            <div className={classes.rightSide}>
              {/* 1.section RIGHT */}
              <div className={classNames(classes.section, 'right-first')}>
                <div className={classNames(classes.subsection, classes.rightAlign)}>
                  <p>{language.B_1}</p>
                </div>
                <div className={classNames(classes.subsection, classes.rightAlign)}>
                  <Parallax speed={3}>
                    <img
                      src={BouTiedUp}
                      alt='Testbild'
                      className={classNames(classes.imgS)}
                      title='KI-generiertes Bild (labs.openai.com)'
                    />
                  </Parallax>
                </div>
              </div>
              <div style={{ height: computeHeight('.left-first', 0) }}>
                <div
                  className={classNames(
                    classes.section,
                    classes.sticky,
                    'right-first',
                    'left-first',
                  )}
                >
                  <div className={classNames(classes.subsection, classes.rightAlign)}>
                    <p>{language.B_2}</p>
                  </div>
                </div>
              </div>
              <div className={classNames(classes.section, 'right-second')}>
                <div className={classNames(classes.subsection, classes.rightAlign)}>
                  <p>{language.B_3}</p>
                </div>
                <div className={classNames(classes.subsection, classes.rightAlign)}>
                  <Parallax speed={3}>
                    <img
                      src={BouEatingBerries}
                      alt='Testbild'
                      className={classNames(classes.imgS)}
                      title='KI-generiertes Bild (labs.openai.com)'
                    />
                  </Parallax>
                </div>
                <div className={classNames(classes.subsection, classes.rightAlign)}>
                  <p>{language.B_4}</p>
                </div>
              </div>
              <div style={{ height: computeHeight('.left-second', 0) }}>
                <div
                  className={classNames(
                    classes.section,
                    classes.sticky,
                    'right-second',
                    'left-second',
                  )}
                >
                  <div className={classNames(classes.subsection, classes.rightAlign)}>
                    <p>{language.B_5}</p>
                  </div>
                </div>
              </div>
              <div className={classNames(classes.section, 'right-third')}>
                <div className={classNames(classes.subsection, classes.rightAlign)}>
                  <Parallax speed={3}>
                    <img
                      src={BouDrawingLenin}
                      alt='Testbild'
                      className={classNames(classes.imgS)}
                      title='KI-generiertes Bild (labs.openai.com)'
                    />
                  </Parallax>
                </div>
                <div className={classNames(classes.subsection, classes.rightAlign)}>
                  <p>{language.B_6}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default EscapeFromPrisonBoth
