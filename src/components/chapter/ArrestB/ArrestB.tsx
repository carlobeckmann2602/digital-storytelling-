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
import useSound from 'use-sound'
import BackgroundTraditionalSound from '@/assets/sounds/background_music_traditional.mp3'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
  soundEnabled: boolean
  fadingTime: number
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
        <div className={classNames(classes.section)}>
          <Parallax speed={5}>
            <img
              src={SoldierImage}
              className={classNames(classes.imgS)}
              alt='Testbild'
              title='Ein Kämpfer im Dorf seiner Frau, Quelle: http://d.dccam.org/Archives/Photographs/Stilled_Lives/The-Military-Security.htm#'
            />
          </Parallax>
          <div className={classNames(classes.sectionColumn)}>
            <p> {language.T1_Nachricht}</p>
            <p> {language.T2_Aufbruch}</p>
          </div>
        </div>
        <div className={classNames(classes.section)}>
          <p style={{ alignSelf: 'flex-Start', textAlign: 'justify' }}>{language.T3_Verdacht}</p>
          <Parallax style={{ paddingTop: '15%' }} speed={5}>
            <img
              src={PrisonImage}
              style={{ width: '400px' }}
              alt='Testbild'
              title='S-21 Gefängnis früher, Quelle: https://www.figma.com/exit?url=http%3A%2F%2Fd.dccam.org%2FArchives%2FPhotographs%2FPhotos_from_Khmer_Rouge_Secret_Prison_S-21%2Findex.html'
            />
          </Parallax>
        </div>
        <div className={classNames(classes.section)}>
          <Parallax speed={5}>
            <img
              src={BlindfoldedImage}
              className={classNames(classes.imgM)}
              alt='Testbild'
              title='Bou Meng und seine Frau im S-21-Gefängnis mit verbundenen Augen; gemalt von Bou Meng, Quelle: http://d.dccam.org/Archives/Photographs/Photos/Bou_Meng/Thumbnails/picture01.png'
            />
          </Parallax>
          <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T4_Verhaftung}</p>
        </div>
        <div className={classNames(classes.section)}>
          <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T5_Ankunft}</p>
          <Parallax speed={5}>
            <img
              src={ArrestImage}
              className={classNames(classes.imgM)}
              alt='Testbild'
              title='Bou Meng und seine Frau werden nach Ankunft im S-21 Gefängnis fotografiert; gemalt von Bou Meng, Quelle: http://d.dccam.org/Archives/Photographs/Photos/Bou_Meng/Thumbnails/picture02.png'
            />
          </Parallax>
        </div>
        <div className={classNames(classes.section)}>
          <Parallax style={{ paddingTop: '-10%' }} speed={5}>
            <img
              src={MugshotImage}
              className={classNames(classes.imgM)}
              alt='Testbild'
              title='Bild eines Gefangenen im Gefängnis, Quelle: https://www.ushmm.org/api/phpThumb/phpThumb.php?src=/m/img/2523689-CAM-032.jpg&w=460&hash=2f086371bfa1c098bf90cc5fe26c7a68'
            />
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
