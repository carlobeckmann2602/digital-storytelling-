import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './InvasionBackground.module.scss'
import * as language from './InvasionBackground_lang'
import { Parallax } from 'react-scroll-parallax'
import Students from '@/assets/img/InvasionBack_Khmer-Rouge-students-working.jpg'
import Marines from '@/assets/img/InvasionBack_Marines_botschaft.jpg'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const InvasionBackground = (props: Props) => {
  const CHAPTER_ID: Chapter = 'INVASION_BACKGROUND'

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
      <div className={classNames(classes.section)}>
        <Parallax speed={10}>
          <img
            src={Students}
            style={{ width: '400px' }}
            title='Arbeitende Studenten, Quelle: https://conflictfood.com/geschichte-kambodschas-1/'
            alt='Arbeitende Studenten'
          />
        </Parallax>
        <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.teil1}</p>
      </div>
      <div className={classNames(classes.section)}>
        <p style={{ alignSelf: 'center', textAlign: 'center' }}>{language.teil2}</p>
      </div>
      <div className={classNames(classes.section)}>
        <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.teil3}</p>
        <Parallax speed={10}>
          <img
            src={Marines}
            style={{ width: '400px' }}
            title='US-Marines bei der Evakuierung der Amerikanischen Botschaft am 12. April 1975, Quelle: https://de.wikipedia.org/wiki/Kambodschanischer_Bürgerkrieg#/media/Datei:Marines_deploy_at_LZ_Hotel.jpg'
            alt='Arbeitende Studenten'
          />
        </Parallax>
      </div>
      <div className={classNames(classes.section)}>
        <p style={{ alignSelf: 'center', textAlign: 'center' }}>{language.teil4}</p>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default InvasionBackground
