import React, { useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './ChildhoodC.module.scss'
import * as language from './ChildhoodC_lang'
import sampleGlücklich from '@/assets/img/sample_glücklich.png'
import sampleArbeit from '@/assets/img/sample_hand.png'
import sampleBedruckt from '@/assets/img/sample_bedruckt.png'
import sampleSorge from '@/assets/img/sample_sorge.png'
import sampleHappy from '@/assets/img/sample_happy.png'
import sampleLove from '@/assets/img/sample_love.png'
import sampleFight from '@/assets/img/sample_fight.png'
import Modal from '../../Modal/Modal'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const ChildhoodC = (props: Props) => {
  const CHAPTER_ID: Chapter = 'CHILDHOOD_C'

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
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis doloremque
                asperiores, at quidem voluptates aperiam eum veritatis eaque debitis harum ipsam
                expedita! Eligendi aperiam laboriosam facere corrupti iste temporibus quaerat.
              </p>
            </Modal>
          </p>
        </Parallax>
      </div>
      <div className={classes.section}>
        <Parallax speed={5} translateX={['-100px', '-10px']}>
          <img src={sampleSorge} alt='Austauschbild' className={classes.img} />
        </Parallax>
        <Parallax speed={5} translateX={['-10px', '-100px']}>
          <p>{language.c_1950}</p>
        </Parallax>
      </div>
      <div className={classes.section}>
        <Parallax speed={5} translateX={['-100px', '-10px']}>
          <img src={sampleHappy} alt='Austauschbild' className={classes.img} />
        </Parallax>
        <Parallax speed={5} translateX={['-10px', '-100px']}>
          <p>{language.c_study}</p>
        </Parallax>
      </div>
      <div className={classes.section}>
        <Parallax speed={5} translateX={['-100px', '-10px']}>
          <img src={sampleLove} alt='Austauschbild' className={classes.img} />
        </Parallax>
        <Parallax speed={5} translateX={['-10px', '-100px']}>
          <p>{language.c_heirat}</p>
        </Parallax>
      </div>
      <div className={classes.section}>
        <Parallax speed={5} translateX={['-100px', '-10px']}>
          <img src={sampleFight} alt='Austauschbild' className={classes.img} />
        </Parallax>
        <Parallax speed={5} translateX={['-10px', '-100px']}>
          <p>{language.c_werkstatt}</p>
        </Parallax>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default ChildhoodC
