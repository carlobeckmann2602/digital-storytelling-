import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './InvasionBoth.module.scss'
import * as language from './InvasionBoth_lang'
import { Parallax } from 'react-scroll-parallax'
import InvasionImage1 from '@/assets/img/InvasionBoth_Invasion1_c_Roland_Neveu.png'
import InvasionImage2 from '@/assets/img/InvasionBoth_Invasion2_c_Claude_Juvenal.jpg'
import InvasionImage3 from '@/assets/img/InvasionBoth_Invasion3_c_Roland_Neveu.png'
import InvasionImage4 from '@/assets/img/InvasionBoth_Invasion4_c_.png'
import SoldierImage from '@/assets/img/InvasionBoth_Soldiers_c_Roland_Neveu.png'
import VictimsImage from '@/assets/img/InvasionBoth_Victims_c_AP.png'
import CorpsesImage1 from '@/assets/img/InvasionBoth_Corpses2_c_Bettmann.png'
import CorpsesImage2 from '@/assets/img/InvasionBoth_Corpses_c_Patrick_Chauvel.png'
import CorpsesImage3 from '@/assets/img/InvasionBoth_Corpses3_c_KillingFieldsMuseum.png'
import Quotation from '../../Quotation/Quotation'
import useSound from 'use-sound'
import VictorySongSound from '@/assets/sounds/background_music_khmerrougePropagandaCheer.mp3'
import VictorySongDisSound from '@/assets/sounds/background_music_khmerrougePropaganda_distorted.mp3'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
  soundEnabled: boolean
  fadingTime: number
}

const InvasionBoth = (props: Props) => {
  const CHAPTER_ID: Chapter = 'INVASION_BOTH'

  const topRef = React.useRef<HTMLInputElement>(null)
  const bottomRef = React.useRef<HTMLInputElement>(null)
  const breakRef = React.useRef<HTMLInputElement>(null)
  const topOnScreen = useOnScreen(topRef, '-350px')
  const bottomOnScreen = useOnScreen(bottomRef, '-350px')
  const breakRefOnScreen = useOnScreen(breakRef, '-350px')
  useEffect(() => {
    topOnScreen && props.setCurrentChapter(CHAPTER_ID)
  }, [topOnScreen])
  useEffect(() => {
    bottomOnScreen && props.setCurrentChapter(CHAPTER_ID)
  }, [bottomOnScreen])

  // ---------------------- SOUND IMPLEMENTATION 1 ---------------------- //
  const [, { sound: sound1 }] = useSound(VictorySongSound, {
    interrupt: true,
    loop: true,
  })

  useEffect(() => {
    if (topOnScreen && props.soundEnabled) {
      props.setCurrentChapter(CHAPTER_ID)
      sound1.play()
      sound1.fade(0, 0.3, props.fadingTime)
    }
    // else {
    //   if (sound && (!topOnScreen || !props.soundEnabled)) {
    //     sound.once('fade', () => {
    //       stop()
    //     })
    //     sound.fade(0.4, 0, props.fadingTime)
    //   }
    // }
  }, [topOnScreen, props.soundEnabled])

  useEffect(() => {
    if (sound1 && (breakRefOnScreen || !props.soundEnabled)) {
      sound1.once('fade', () => {
        sound1.stop()
      })
      sound1.fade(0.3, 0, props.fadingTime)
    }
  }, [breakRefOnScreen, props.soundEnabled])
  // ---------------------- SOUND IMPLEMENTATION 1 ---------------------- //

  // ---------------------- SOUND IMPLEMENTATION 2 ---------------------- //
  const [, { sound: sound2 }] = useSound(VictorySongDisSound, {
    interrupt: true,
    loop: true,
  })

  useEffect(() => {
    if (breakRefOnScreen && props.soundEnabled) {
      props.setCurrentChapter(CHAPTER_ID)
      sound2.play()
      sound2.fade(0, 0.3, props.fadingTime)
    }
  }, [breakRefOnScreen, props.soundEnabled])

  useEffect(() => {
    if (sound2 && (bottomOnScreen || !props.soundEnabled)) {
      sound2.once('fade', () => {
        sound2.stop()
      })
      sound2.fade(0.3, 0, props.fadingTime)
    }
  }, [bottomOnScreen, props.soundEnabled])
  // ---------------------- SOUND IMPLEMENTATION 2 ---------------------- //

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
        <img
          src={InvasionImage1}
          alt='Testbild'
          className={classes.imgL}
          title='Einmarsch der roten Khmer in Phnom Penh, Quelle: https://api.time.com/wp-content/uploads/2015/04/cambodia.jpeg'
        />
        <div className={classes.splitScreenWrapper}>
          <div className={classNames(classes.leftSide)}>
            {/* 1.section LEFT */}
            <div className={classNames(classes.section, 'firstR')}>
              <div className={classNames(classes.subsection, classes.leftAlign)}>
                <p>{language.C_1}</p>
              </div>
              <div className={classNames(classes.subsection, classes.center)}>
                <Parallax speed={3}>
                  <img
                    src={InvasionImage2}
                    alt='Testbild'
                    className={classNames(classes.imgL)}
                    title='Kambodschanische Einwohner warten in einer Straße von Phnom Penh, während das Benzindepot brennt, Quelle: https://www.gettyimages.de/detail/nachrichtenfoto/cambodian-inhabitants-wait-in-a-street-of-phnom-penh-nachrichtenfoto/457589602?adppopup=true'
                  />
                </Parallax>
              </div>
              <div className={classNames(classes.subsection, classes.rightAlign)}>
                <p>{language.C_2}</p>
              </div>
              <div className={classNames(classes.subsection, classes.leftAlign)}>
                <Parallax speed={3}>
                  <img
                    src={InvasionImage3}
                    alt='Testbild'
                    className={classNames(classes.imgS)}
                    title='Bürger feiern den Einmarsch der Roten Khmer, Quelle: https://www.ushmm.org/api/phpThumb/phpThumb.php?src=/m/img/2524135-CAM-054.jpg&w=1100&hash=a2f35cbd572701c89f4b0f8e3d525d26'
                  />
                </Parallax>
              </div>
              <div className={classNames(classes.subsection, classes.leftAlign)}>
                <p>{language.C_3}</p>
              </div>
            </div>
            {/* 2.section LEFT */}
            <div style={{ height: computeHeight('.secondL', 450) }}>
              <div className={classNames(classes.section, classes.sticky, 'firstR', 'secondL')}>
                <div className={classNames(classes.subsection)}>
                  <p className={classNames(classes.highlight)}>{language.C_4_Quote}</p>
                </div>
              </div>
            </div>
            {/* 3.section LEFT */}
            <div className={classNames(classes.section, 'thirdR')}>
              <div className={classNames(classes.subsection, classes.rightAlign)}>
                <p>{language.C_5}</p>
              </div>
            </div>
            {/* 4.section LEFT */}
            <div style={{ height: computeHeight('.fourthL', 450) }}>
              <div className={classNames(classes.section, classes.sticky, 'thirdR', 'fourthL')}>
                <div className={classNames(classes.subsection, classes.center)}>
                  <img
                    src={InvasionImage4}
                    alt='Testbild'
                    className={classNames(classes.imgS)}
                    title='Menschen fliehen aus Phnom Penh, Quelle: https://www.pulitzer.org/cms/sites/default/files/content/fleeing_2.jpg'
                  />
                </div>
                <div className={classNames(classes.subsection, classes.leftAlign)}>
                  <p>{language.C_7}</p>
                </div>
              </div>
            </div>
            {/* 5.section LEFT */}
            <div className={classNames(classes.section, 'fifthR')}>
              <div ref={breakRef} className={classNames(classes.subsection, classes.rightAlign)}>
                <p>{language.C_8}</p>
              </div>
              <div className={classNames(classes.spacerL)}></div>
              <Parallax speed={-15}>
                <div className={classNames(classes.subsection)}>
                  <p className={classNames(classes.highlight)}>{language.C_8_1}</p>
                  <img
                    src={CorpsesImage1}
                    alt='Testbild'
                    className={classNames(classes.imgL)}
                    title='Fund von Leichen, die Opfer der Roten Khmer wurden, Quelle: https://www.gettyimages.de/detail/nachrichtenfoto/photo-just-received-from-the-vietnam-news-agency-hanoi-nachrichtenfoto/515554462'
                  />
                </div>
              </Parallax>
              <Parallax speed={-5}>
                <div className={classNames(classes.subsection)}>
                  <img
                    src={CorpsesImage2}
                    alt='Testbild'
                    className={classNames(classes.imgL)}
                    title='Von den Roten Khmer hingerichtete Zivilisten, Quelle: https://www.flickr.com/photos/13476480@N07/3774403666/in/photostream/'
                  />
                  <p className={classNames(classes.highlight)}>{language.C_8_2}</p>
                </div>
              </Parallax>
              <Parallax speed={10}>
                <div className={classNames(classes.subsection)}>
                  <p className={classNames(classes.highlight)}>{language.C_8_3}</p>
                  <img
                    src={CorpsesImage3}
                    alt='Testbild'
                    className={classNames(classes.imgL)}
                    title='"Killing Field" der Roten Khmer, Quelle: https://medium.com/@BWHopen/never-again-the-cambodian-genocide-2d9d17a2b7d4'
                  />
                </div>
              </Parallax>
              {/* Maybe use StackingCards here?? */}
              {/* <div className={classNames(classes.subsection)}>
                <StackingCards>
                  <img
                    src={CorpsesImage1}
                    alt='Testbild'
                    className={classNames(classes.imgL)}
                    title='Fund von Leichen, die Opfer der Roten Khmer wurden, Quelle: https://www.gettyimages.de/detail/nachrichtenfoto/photo-just-received-from-the-vietnam-news-agency-hanoi-nachrichtenfoto/515554462'
                  />
                  <img
                    src={CorpsesImage2}
                    alt='Testbild'
                    className={classNames(classes.imgL)}
                    title='Von den Roten Khmer hingerichtete Zivilisten, Quelle: https://www.flickr.com/photos/13476480@N07/3774403666/in/photostream/'
                  />
                  <img
                    src={CorpsesImage3}
                    alt='Testbild'
                    className={classNames(classes.imgL)}
                    title='"Killing Field" der Roten Khmer, Quelle: https://medium.com/@BWHopen/never-again-the-cambodian-genocide-2d9d17a2b7d4'
                  />
                </StackingCards>
              </div> */}
              <div className={classNames(classes.spacerM)}></div>
              <div className={classNames(classes.subsection)}>
                <p style={{ textAlign: 'justify' }}>{language.C_9}</p>
              </div>
            </div>
          </div>
          <hr className={classes.dashed}></hr>
          <div className={classes.rightSide}>
            {/* Offset container for first section */}
            <div style={{ height: computeHeight('.firstR', 300) }}></div>
            {/* 1.section RIGHT */}
            <div className={classNames(classes.section, 'secondL')}>
              <div className={classNames(classes.subsection, classes.leftAlign)}>
                <p>{language.B_1}</p>
              </div>
            </div>
            {/* 2.section RIGHT */}
            <div style={{ height: computeHeight('.thirdR', 350) }}>
              <div className={classNames(classes.section, classes.sticky, 'secondL', 'thirdR')}>
                <div className={classNames(classes.subsection, classes.rightAlign)}>
                  <p>{language.B_3}</p>
                </div>
                <div className={classNames(classes.subsection)}>
                  <img
                    src={SoldierImage}
                    alt='Testbild'
                    title='Junge Menschen jubeln den eintreffenden Roten Khmer zu und präsentieren ihre Waffen, Quelle: https://www.gettyimages.de/detail/nachrichtenfoto/the-fall-of-phnom-penh-to-the-khmer-rouge-on-april-17-nachrichtenfoto/158676325'
                    className={classNames(classes.imgS)}
                  />
                </div>
              </div>
            </div>
            {/* 3.section RIGHT */}
            <div className={classNames(classes.section, 'fourthL')}>
              <div className={classNames(classes.subsection, classes.leftAlign)}>
                <p>{language.B_4}</p>
              </div>
              <div className={classNames(classes.subsection, classes.rightAlign)}>
                <p>{language.B_5}</p>
              </div>
            </div>
            {/* 4.section RIGHT */}
            <div style={{ height: computeHeight('.fifthR', 150) }}>
              <div className={classNames(classes.section, classes.sticky, 'fourthL', 'fifthR')}>
                <div className={classNames(classes.subsection, classes.leftAlign)}>
                  <img
                    src={VictimsImage}
                    title='Frauen und Kinder verstecken sich aus Angst vor den Roten Khmer, Quelle: https://www.buzzfeednews.com/article/jinamoore/theres-no-more-hiding-cambodias-history-of-sexual-abuse'
                    alt='Testbild'
                    className={classNames(classes.imgS)}
                  />
                </div>
                <div className={classNames(classes.subsection, classes.leftAlign)}>
                  <p>{language.B_6}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames(classes.spacerM)}></div>
        <Quotation quote={language.B_7_Quote} citation={'Bou Meng'} colorCode={'bou'}></Quotation>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default InvasionBoth
