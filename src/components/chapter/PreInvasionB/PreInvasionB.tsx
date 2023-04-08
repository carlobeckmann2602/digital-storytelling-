import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './PreInvasionB.module.scss'
import * as language from './PreInvasionB_lang'
import { Parallax } from 'react-scroll-parallax'
import PlaceholderImage from '@/assets/img/Placeholder.png'
import Modal from '../../Modal/Modal'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const PreInvasionB = (props: Props) => {
  const CHAPTER_ID: Chapter = 'PRE_INVASION_B'

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
      <div className={classes.section}>
        <Parallax speed={10}>
          <img src={PlaceholderImage} alt='Austauschbild' className={classes.img} />
        </Parallax>
        <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T1_Kontakt}</p>
      </div>
      <div className={classes.section}>
        <p style={{ alignSelf: 'center', textAlign: 'justify' }}>
          {language.T2_Ansprache}
          <Modal>
            <p>TODO Rede</p>
            <p>
              Kurzer Kontext dazu, warum Sihanouk im Exil ist und ggf. worum es in der Rede ging...
            </p>
          </Modal>
        </p>
        <Parallax speed={10}>
          <img src={PlaceholderImage} alt='Austauschbild' className={classes.img} />
        </Parallax>
      </div>
      <div className={classes.section}>
        <Parallax speed={10}>
          <img src={PlaceholderImage} alt='Austauschbild' className={classes.img} />
        </Parallax>
        <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T3_Maler}</p>
      </div>
      <div className={classes.section}>
        <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T4_Biographie}</p>
        <Parallax speed={10}>
          <img src={PlaceholderImage} alt='Austauschbild' className={classes.img} />
        </Parallax>
      </div>
      <div className={classes.section}>
        <Parallax speed={10}>
          <img src={PlaceholderImage} alt='Austauschbild' className={classes.img} />
        </Parallax>
        <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T5_Druckerei}</p>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default PreInvasionB
