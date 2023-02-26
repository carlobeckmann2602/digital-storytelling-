import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './InvasionBoth.module.scss'
import * as language from './InvasionBoth_lang'
import TestImage from '@/assets/img/template-1.jpg'
import { Parallax } from 'react-scroll-parallax'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const InvasionBoth = (props: Props) => {
  const CHAPTER_ID: Chapter = 'INVASION_BOTH'

  const ref = React.useRef<HTMLInputElement>(null)
  const onScreen = useOnScreen(ref, '-350px')
  useEffect(() => {
    onScreen && props.setCurrentChapter(CHAPTER_ID)
  }, [onScreen])

  return (
    <div id={CHAPTER_ID}>
      <div ref={ref} className={'header-outer'}>
        <div className='header-inner'>
          <h2 className={classNames(classes.heading, 'chapter-heading')}>
            {CHAPTERS.get(CHAPTER_ID)?.title}
          </h2>
        </div>
      </div>
      <div className='chapter-body-wrapper'>
        <div className={classes.splitScreenWrapper}>
          <div className={classes.leftSide}>
            <div className={classes.section}>
              <Parallax speed={-5}>
                <p>{language.C_1}</p>
                <img src={TestImage} alt='Testbild' className={classes.img} />
                <p>{language.C_2}</p>
              </Parallax>
            </div>
            <div className={classes.section}>
              <p>{language.C_3}</p>
            </div>
          </div>
          <hr className={classes.dashed}></hr>
          <div className={classes.rightSide}>
            <div className={classes.section}>
              <Parallax speed={-5}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, recusandae
                  natus itaque fugit quod optio earum excepturi quae est quibusdam eius deleniti
                  hic, ea consectetur distinctio nobis tempora voluptatum voluptates?
                </p>
              </Parallax>
            </div>
            <div className={classes.section}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, recusandae natus
                itaque fugit quod optio earum excepturi quae est quibusdam eius deleniti hic, ea
                consectetur distinctio nobis tempora voluptatum voluptates?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvasionBoth
