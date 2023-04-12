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
import Placeholder from '@/assets/img/Placeholder.png'
import { Parallax } from 'react-scroll-parallax'
import Quotation from '../../Quotation/Quotation'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const InvasionBoth = (props: Props) => {
  const CHAPTER_ID: Chapter = 'INVASION_BOTH'

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
      <div ref={topRef} className={'header-outer'}>
        <div className='header-inner'>
          <h2 className={classNames(classes.heading, 'chapter-heading')}>
            {CHAPTERS.get(CHAPTER_ID)?.title}
          </h2>
        </div>
      </div>
      <div className='chapter-body-wrapper'>
        <img
          src={InvasionImage1}
          alt='Testbild'
          className={classes.imgL}
          title='Einmarsch der roten Khmer in Phnomh Penh, Quelle: https://api.time.com/wp-content/uploads/2015/04/cambodia.jpeg'
        />
        <div className={classes.splitScreenWrapper}>
          <div className={classNames(classes.leftSide)}>
            {/* 1.section LEFT */}
            <div className={classNames(classes.section, 'firstR')}>
              <div className={classNames(classes.subsection, classes.leftAlign)}>
                <p>{language.C_1}</p>
              </div>
              <div className={classNames(classes.subsection, classes.rightAlign)}>
                <Parallax speed={3}>
                  <img
                    src={InvasionImage2}
                    alt='Testbild'
                    className={classNames(classes.imgS)}
                    title='Kambodschanische Einwohner warten in einer Straße von Phnom Penh, während das Benzindepot brennt, Quelle: https://www.gettyimages.de/detail/nachrichtenfoto/cambodian-inhabitants-wait-in-a-street-of-phnom-penh-nachrichtenfoto/457589602?adppopup=true'
                  />
                </Parallax>
              </div>
              <div className={classNames(classes.subsection, classes.rightAlign)}>
                <p>{language.C_2}</p>
              </div>
              <div className={classNames(classes.subsection, classes.rightAlign)}>
                <Parallax speed={3}>
                  <img
                    src={InvasionImage3}
                    alt='Testbild'
                    className={classNames(classes.imgS)}
                    title='Bürger feiern den Einmarsch der Roten Khmer, Quelle: https://www.ushmm.org/api/phpThumb/phpThumb.php?src=/m/img/2524135-CAM-054.jpg&w=1100&hash=a2f35cbd572701c89f4b0f8e3d525d26'
                  />
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
            </div>
            {/* 4.section LEFT */}
            <div style={{ height: computeHeight('.fourthL', 450) }}>
              <div className={classNames(classes.section, classes.sticky, 'thirdR', 'fourthL')}>
                <div className={classNames(classes.subsection, classes.rightAlign)}>
                  {/* <Parallax speed={3}> */}
                  <img
                    src={InvasionImage4}
                    alt='Testbild'
                    className={classNames(classes.imgS)}
                    title='Menschen fliehen aus Phnomh Penh, Quelle: https://www.pulitzer.org/cms/sites/default/files/content/fleeing_2.jpg'
                  />
                  {/* </Parallax> */}
                </div>
                <div className={classNames(classes.subsection, classes.leftAlign)}>
                  <p>{language.C_7}</p>
                </div>
              </div>
            </div>
            {/* 5.section LEFT */}
            <div className={classNames(classes.section, 'fifthR')}>
              <div className={classNames(classes.subsection, classes.rightAlign)}>
                {/* <Parallax speed={3}> */}
                <img src={Placeholder} alt='Testbild' className={classNames(classes.imgL)} />
                {/* </Parallax> */}
              </div>
              <div className={classNames(classes.subsection, classes.leftAlign)}>
                <p>{language.C_8}</p>
              </div>
              <div className={classNames(classes.spacerM)}></div>
              <div className={classNames(classes.subsection, classes.center)}>
                <Parallax speed={-5}>
                  <p className={classNames(classes.highlight)}>{language.C_8_1}</p>
                </Parallax>
              </div>
              <div className={classNames(classes.spacerL)}></div>
              <div className={classNames(classes.subsection, classes.center)}>
                <Parallax speed={-5}>
                  <p className={classNames(classes.highlight)}>{language.C_8_2}</p>
                </Parallax>
              </div>
              <div className={classNames(classes.spacerL)}></div>
              <div className={classNames(classes.subsection, classes.center)}>
                <Parallax speed={-5}>
                  <p className={classNames(classes.highlight)}>{language.C_8_3}</p>
                </Parallax>
              </div>
              <div className={classNames(classes.spacerM)}></div>
              <div className={classNames(classes.subsection)}>
                <p>{language.C_9}</p>
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
                  <img src={Placeholder} alt='Testbild' className={classNames(classes.imgS)} />
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
                  <img src={Placeholder} alt='Testbild' className={classNames(classes.imgS)} />
                  {/* </Parallax> */}
                </div>
              </div>
            </div>
            {/* 3.section RIGHT */}
            <div className={classNames(classes.section, 'fourthL')}>
              <div className={classNames(classes.subsection, classes.leftAlign)}>
                <p>{language.B_4}</p>
              </div>
              <div className={classNames(classes.subsection, classes.rightAlign)}>
                <p>{language.B_5}</p>
              </div>
              <div className={classNames(classes.subsection, classes.rightAlign)}>
                <Parallax speed={2}>
                  <img src={Placeholder} alt='Testbild' className={classNames(classes.imgS)} />
                </Parallax>
              </div>
            </div>
            {/* 4.section RIGHT */}
            <div style={{ height: computeHeight('.fifthR', 150) }}>
              <div className={classNames(classes.section, classes.sticky, 'fourthL', 'fifthR')}>
                <div className={classNames(classes.subsection)}>
                  <p>{language.B_6}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames(classes.spacerS)}></div>
        <Quotation quote={language.B_7_Quote} citation={'Bou Meng'} colorCode={'bou'}></Quotation>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default InvasionBoth
