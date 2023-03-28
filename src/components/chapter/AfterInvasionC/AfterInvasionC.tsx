import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './AfterInvasionC.module.scss'
import * as language from './AfterInvasionC_lang'
import { Parallax } from 'react-scroll-parallax'
import BikeImage from '@/assets/img/AfterInvasionC_Bike_c_unknown.jpg'
import MarchImage from '@/assets/img/AfterInvasionC_March_c_Roland_Neveu_LightRocket_Getty_Images.png'
import FactoryImage from '@/assets/img/AfterInvasionC_Factory_c_Documentation_Center_of_Cambodia.png'
import Placeholder from '@/assets/img/Placeholder.png'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const AfterInvasionC = (props: Props) => {
  const CHAPTER_ID: Chapter = 'AFTER_INVASION_C'

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
        <div className={classNames(classes.section)}>
          <Parallax speed={5}>
            <img src={MarchImage} className={classNames(classes.imgS)} alt='Testbild' />
          </Parallax>
          <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T1_Reise}</p>
        </div>
        {/* TODO: Add foodstep illustration?? */}
        <div className={classNames(classes.section)}>
          <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T2_Verlust}</p>
          <Parallax speed={5}>
            <img src={Placeholder} style={{ width: '400px' }} alt='Testbild' />
          </Parallax>
        </div>
        <div className={classNames(classes.section)}>
          <p className={classNames(classes.highlight)}>{language.T3_Durchsage}</p>
        </div>
        <div className={classNames(classes.section)}>
          <Parallax speed={5}>
            <img src={BikeImage} className={classNames(classes.imgM)} alt='Testbild' />
          </Parallax>
          <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T4_Arbeit}</p>
        </div>
        <div className={classNames(classes.section)}>
          <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T5_Arbeit2}</p>
          <Parallax speed={5}>
            <img src={FactoryImage} className={classNames(classes.imgM)} alt='Testbild' />
          </Parallax>
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default AfterInvasionC
