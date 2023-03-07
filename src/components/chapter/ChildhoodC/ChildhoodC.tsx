import React, { useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import { AnimatePresence, motion } from "framer-motion"
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './ChildhoodC.module.scss'
import * as language from './ChildhoodC_lang'
import sampleGlücklich from '@/assets/img/sample_glücklich.png'
import sampleArbeit from '@/assets/img/sample_hand.png'
import sampleBedruckt from '@/assets/img/sample_bedruckt.png'
import InfoI from '@/assets/img/info_i.png'
import Modal from '../../Modal/Modal'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const ChildhoodC = (props: Props) => {
  const CHAPTER_ID: Chapter = 'CHILDHOOD_C'

  const ref = React.useRef<HTMLInputElement>(null)
  const onScreen = useOnScreen(ref, '-350px')
  useEffect(() => {
    onScreen && props.setCurrentChapter(CHAPTER_ID)
  }, [onScreen])

  const openModal = () => {
    return (
      <Modal>
        <p>TEST</p>
      </Modal>
    )
  }

  return (
    <div id={CHAPTER_ID}>
      <div ref={ref} className={'header-outer'}>
        <div className='header-inner'>
          <h2 className={classNames(classes.heading, 'chapter-heading')}>
            {CHAPTERS.get(CHAPTER_ID)?.title}
          </h2>
        </div>
      </div>
      <div className={classes.section}>
        <Parallax speed={5} translateX={['-100px', '-10px']}>
          <img src={sampleGlücklich} alt='Austauschbild' className={classes.img} />
        </Parallax>
        <Parallax speed={5} translateX={['-10px', '-100px']}>
          <p>{language.geburt_c}</p>
        </Parallax>
      </div>
      <div className={classes.section}>
        <Parallax speed={5} translateX={['-100px', '-10px']}>
          <img src={sampleArbeit} alt='Austauschbild' className={classes.img} />
        </Parallax>
        <Parallax speed={0} translateX={['-10px', '-100px']}>
          <p>{language.dorf_geburt}</p>
        </Parallax>
      </div>
      <div className={classes.section}>
        <Parallax speed={5} translateX={['-100px', '-10px']}>
          <img src={sampleBedruckt} alt='Austauschbild' className={classes.img} />
        </Parallax>
        <Parallax speed={5} translateX={['-10px', '-100px']}>
          <p>
            {language.c_10J}
            <Modal>
              <p>TEST</p>
            </Modal>
          </p>
        </Parallax>
      </div>
    </div>
  )
}

export default ChildhoodC
