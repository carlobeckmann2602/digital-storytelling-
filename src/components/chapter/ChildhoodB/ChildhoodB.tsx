import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './ChildhoodB.module.scss'
import * as language from './ChildhoodB_lang'
import { Parallax } from 'react-scroll-parallax'
import PlaceholderImage from '@/assets/img/Placeholder.png'
import BoyWithPagoda from '@/assets/img/ChildhoodB_BoyWithPagoda.png'
import YoungManDrawing from '@/assets/img/ChildhoodB_YoungManDrawing.png'
import SouthVietnameseTroopsInCambodia from '@/assets/img/ChildhoodB_SouthVietnameseTroopsInCambodia.jpg'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const ChildhoodB = (props: Props) => {
  const CHAPTER_ID: Chapter = 'CHILDHOOD_B'

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
        <div className={classes.section}>
          <Parallax speed={10}>
            <img
              src={BoyWithPagoda}
              alt='Testbild'
              className={classes.img}
              title='KI-generiertes Bild (labs.openai.com)'
            />
          </Parallax>
          <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T1_Geburt}</p>
        </div>
        <div className={classNames(classes.section, classes.rightAlign)}>
          <div className={classes.sectionColumn}>
            <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T2_Pagode}</p>
            <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T3_Tischler}</p>
          </div>
          <Parallax speed={10}>
            <img
              src={YoungManDrawing}
              alt='Testbild'
              className={classes.img}
              title='KI-generiertes Bild (labs.openai.com)'
            />
          </Parallax>
        </div>
        <div className={classes.section}>
          <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T4_Heimat}</p>
          <Parallax speed={10}>
            <img
              src={SouthVietnameseTroopsInCambodia}
              alt='Testbild'
              className={classes.img}
              title='Südvietnamesische Truppen werden nach einer Militäroperation in der Nähe von Prey Veng (Kambodscha) von einem Hubschrauber geborgen, Quelle: https://www.historynet.com/nixons-cambodian-incursion/'
            />
          </Parallax>
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default ChildhoodB
