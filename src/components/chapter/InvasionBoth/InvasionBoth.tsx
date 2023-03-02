import React, { useEffect, useState } from 'react'
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

  const refScroll = React.useRef<HTMLInputElement>(null)
  const onLeftFixed = useOnScreen(refScroll, '-350px');



  /* test */
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const getOffset =(element: HTMLElement | null) => {
    const elementRect = element?.getBoundingClientRect();
    console.log('pos' + elementRect?.top);
    return elementRect?.top;
  };

  const listenToScroll = () => {
    const heightToHide = getOffset(document.getElementById('test'));
    const windowScrollHeight = document.body.scrollTop || document.documentElement.scrollTop;
    console.log('body' + document.body.scrollTop);
    console.log('element' + document.documentElement.scrollTop);
    if(600 < heightToHide!){
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };


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
        {isVisible && (
        <div className={classNames(classes.leftSide, classes.sticky)}>
            <div className={classes.section}>
                <p>{language.C_1}</p>
                <img src={TestImage} alt='Testbild' className={classes.img} />
                <p>{language.C_2}</p>
            </div>
            <div className={classes.section}>
              <p>{language.C_3}</p>
            </div>
          </div>
          )}
          {!isVisible && (
        <div className={classNames(classes.leftSides)}>
            <div className={classes.section}>
              <Parallax speed={-5} className={classNames(classes.section)}>
                <p>{language.C_1}</p>
                <img src={TestImage} alt='Testbild' className={classes.img} />
                <p>{language.C_2}</p>
              </Parallax>
            </div>
            <div className={classes.section}>
              <p>{language.C_3}</p>
            </div>
          </div>
          )}
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
            <div id='test' className={classes.section}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, recusandae natus
                itaque fugit quod optio earum excepturi quae est quibusdam eius deleniti hic, ea
                consectetur distinctio nobis tempora voluptatum voluptates?
              </p>
            </div>
            <div className={classes.section}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, recusandae natus
                itaque fugit quod optio earum excepturi quae est quibusdam eius deleniti hic, ea
                consectetur distinctio nobis tempora voluptatum voluptates?
              </p>
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
