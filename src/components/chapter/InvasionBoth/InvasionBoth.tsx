import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './InvasionBoth.module.scss'
import * as language from './InvasionBoth_lang'
import InvasionImage1 from '@/assets/img/InvasionBoth_Invasion1_c_Roland_Neveu.png'
import InvasionImage2 from '@/assets/img/InvasionBoth_Invasion2_c_Claude_Juvenal.jpg'
import InvasionImage3 from '@/assets/img/InvasionBoth_Invasion3_c_Roland_Neveu.png'
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

  /* Formula (all elements must have the same idKey):
  (Height of own sticky-container)
  + (Height of Content of other sides container)
  + (Height of next sticky-container of other side) */
  const computeHeight = (idKey: string) => {
    const elements = document.querySelectorAll(idKey)
    let height = 0
    elements.forEach((elem) => (height += elem.getBoundingClientRect().height))
    return height
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
      <div className='chapter-body-wrapper'>
        <img src={InvasionImage1} alt='Testbild' className={classes.imgL} />
        <div className={classes.splitScreenWrapper}>
          <div className={classNames(classes.leftSide)}>
            {/* first section LEFT */}
            <div className='firstR'>
              <div className={classNames(classes.subsection, classes.leftAlign)}>
                <p>{language.C_1}</p>
              </div>
              <div className={classNames(classes.subsection, classes.rightAlign)}>
                <Parallax speed={5}>
                  <img src={InvasionImage2} alt='Testbild' className={classNames(classes.imgL)} />
                </Parallax>
              </div>
            </div>
            {/* second section LEFT */}
            <div style={{ height: computeHeight('.secondL') }}>
              <div className={classNames(classes.sticky, 'firstR', 'secondL')}>
                <div className={classNames(classes.subsection)}>
                  <p>{language.C_2}</p>
                </div>
                <div className={classNames(classes.subsection)}>
                  <img src={InvasionImage3} alt='Testbild' className={classNames(classes.imgS)} />
                </div>
              </div>
            </div>
            {/* third section LEFT */}
            <div className={classNames('secondR')}>
              <div className={classes.subsection}>
                <Parallax speed={0}>
                  <p>
                    DREIIIIIILorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
                    recusandae natus itaque fugit quod optio earum excepturi quae est quibusdam eius
                    deleniti hic, ea consectetur distinctio nobis tempora voluptatum voluptates?
                  </p>
                </Parallax>
              </div>
              <div className={classes.subsection}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, recusandae
                  natus itaque fugit quod optio earum excepturi quae est quibusdam eius deleniti
                  hic, ea consectetur distinctio nobis tempora voluptatum voluptates?
                </p>
              </div>
              <div id='test' className={classes.subsection}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, recusandae
                  natus itaque fugit quod optio earum excepturi quae est quibusdam eius deleniti
                  hic, ea consectetur distinctio nobis tempora voluptatum voluptates?
                </p>
              </div>
            </div>
          </div>
          <hr className={classes.dashed}></hr>
          <div className={classes.rightSide}>
            {/* Offset container for first section */}
            <div style={{ height: computeHeight('.firstR') - 75 }}></div>
            {/* first section RIGHT */}
            <div className={classNames('secondL')}>
              <div className={classNames(classes.subsection, classes.leftAlign)}>
                <p>{language.C_1}</p>
              </div>
              <div className={classNames(classes.subsection, classes.rightAlign)}>
                <div></div>
                <Parallax speed={5}>
                  <img src={InvasionImage2} alt='Testbild' className={classNames(classes.imgL)} />
                </Parallax>
              </div>
            </div>
            {/* second section RIGHT */}
            <div style={{ height: computeHeight('.secondR') }}>
              <div className={classNames(classes.sticky, 'secondL', 'secondR')}>
                <div className={classNames(classes.subsection)}>
                  <p>{language.C_2}</p>
                </div>
                <div className={classNames(classes.subsection)}>
                  <img src={InvasionImage3} alt='Testbild' className={classNames(classes.imgS)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvasionBoth
