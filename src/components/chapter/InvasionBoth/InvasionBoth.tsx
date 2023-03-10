import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './InvasionBoth.module.scss'
import * as language from './InvasionBoth_lang'
import InvasionImage1 from '@/assets/img/InvasionBoth_Invasion1_c_Roland_Neveu.png'
import InvasionImage2 from '@/assets/img/InvasionBoth_Invasion2_c_Claude_Juvenal.jpg'
import InvasionImage3 from '@/assets/img/InvasionBoth_Invasion3_c_Roland_Neveu.png'
import InvasionImage4 from '@/assets/img/InvasionBoth_Invasion4_c_.png'
import { Parallax } from 'react-scroll-parallax'
import Quotation from '../../Quotation/Quotation'

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
  const computeHeight = (idKey: string, offset = 0) => {
    const elements = document.querySelectorAll(idKey)
    let height = offset
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
            {/* 1.section LEFT */}
            <div className={classNames(classes.section, 'firstR')}>
              <div className={classNames(classes.subsection, classes.leftAlign)}>
                <p>{language.C_1}</p>
              </div>
              <div className={classNames(classes.subsection, classes.rightAlign)}>
                <Parallax speed={3}>
                  <img src={InvasionImage2} alt='Testbild' className={classNames(classes.imgS)} />
                </Parallax>
              </div>
              <div className={classNames(classes.subsection, classes.rightAlign)}>
                <p>{language.C_2}</p>
              </div>
              <div className={classNames(classes.subsection, classes.rightAlign)}>
                <Parallax speed={3}>
                  <img src={InvasionImage3} alt='Testbild' className={classNames(classes.imgS)} />
                </Parallax>
              </div>
              <div className={classNames(classes.subsection, classes.leftAlign)}>
                <p>{language.C_3}</p>
              </div>
            </div>
            {/* 2.section LEFT */}
            <div style={{ height: computeHeight('.secondL', 450) }}>
              <div className={classNames(classes.section, classes.sticky, 'firstR', 'secondL')}>
                <div className={classNames(classes.subsection)}>
                  <p className={classNames(classes.highlight)}>{language.C_4_Quote}</p>
                </div>
              </div>
            </div>
            {/* 3.section LEFT */}
            <div className={classNames(classes.section, 'thirdR')}>
              <div className={classNames(classes.subsection, classes.rightAlign)}>
                <p>{language.C_5}</p>
              </div>
              <div className={classNames(classes.subsection, classes.leftAlign)}>
                <p>{language.C_6}</p>
              </div>
            </div>
            {/* 4.section LEFT */}
            <div style={{ height: computeHeight('.fourthL') }}>
              <div className={classNames(classes.section, classes.sticky, 'thirdR', 'fourthL')}>
                <div className={classNames(classes.subsection, classes.rightAlign)}>
                  {/* <Parallax speed={3}> */}
                  <img src={InvasionImage4} alt='Testbild' className={classNames(classes.imgS)} />
                  {/* </Parallax> */}
                </div>
                <div className={classNames(classes.subsection, classes.leftAlign)}>
                  <p>{language.C_7}</p>
                </div>
              </div>
            </div>
          </div>
          <hr className={classes.dashed}></hr>
          <div className={classes.rightSide}>
            {/* Offset container for first section */}
            <div style={{ height: computeHeight('.firstR', 300) }}></div>
            {/* 1.section RIGHT */}
            <div className={classNames(classes.section, 'secondL')}>
              <div className={classNames(classes.subsection, classes.leftAlign)}>
                <p>{language.B_1}</p>
              </div>
              <div className={classNames(classes.subsection, classes.rightAlign)}>
                <p>{language.B_2}</p>
              </div>
              <div className={classNames(classes.subsection, classes.rightAlign)}>
                <Parallax speed={2}>
                  <img src={InvasionImage2} alt='Testbild' className={classNames(classes.imgS)} />
                </Parallax>
              </div>
            </div>
            {/* 2.section RIGHT */}
            <div style={{ height: computeHeight('.thirdR', 450) }}>
              <div className={classNames(classes.section, classes.sticky, 'secondL', 'thirdR')}>
                <div className={classNames(classes.subsection, classes.leftAlign)}>
                  <p>{language.B_3}</p>
                </div>
                <div className={classNames(classes.subsection, classes.rightAlign)}>
                  {/* <Parallax speed={2}> */}
                  <img src={InvasionImage2} alt='Testbild' className={classNames(classes.imgS)} />
                  {/* </Parallax> */}
                </div>
              </div>
            </div>
            {/* 3.section RIGHT */}
            <div className={classNames(classes.section, 'fourthL')}>
              <div className={classNames(classes.subsection, classes.leftAlign)}>
                <p>{language.B_1}</p>
              </div>
              <div className={classNames(classes.subsection)}>
                <p className={classNames(classes.highlight)}>{language.B_2}</p>
              </div>
              <div className={classNames(classes.subsection, classes.rightAlign)}>
                <Parallax speed={2}>
                  <img src={InvasionImage2} alt='Testbild' className={classNames(classes.imgS)} />
                </Parallax>
              </div>
            </div>
          </div>
        </div>
        <Quotation quote={language.B_7_Quote} citation={'Bou Meng'} colorCode={'bou'}></Quotation>
      </div>
    </div>
  )
}

export default InvasionBoth
