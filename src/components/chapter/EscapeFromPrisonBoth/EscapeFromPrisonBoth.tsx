import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './EscapeFromPrisonBoth.module.scss'
import * as language from './EscapeFromPrisonBoth_lang'
import { Parallax } from 'react-scroll-parallax'

import EscapeFromPrisopnImage1 from '@/assets/img/InvasionBoth_Invasion1_c_Roland_Neveu.png'
import Placeholder from '@/assets/img/Placeholder.png'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const EscapeFromPrisonBoth = (props: Props) => {
  const CHAPTER_ID: Chapter = 'ESCAPE_FROM_PRISON_BOTH'

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
        <div className={classes.section}>
          <div className={classes.splitScreenWrapper}>
            <div className={classNames(classes.leftSide)}>
              {/* 1.section LEFT */}
              <div className={classNames(classes.section, 'firstR')}>
                <div className={classNames(classes.subsection, classes.leftAlign)}>
                  <p>{language.C_1}</p>
                </div>
                <div className={classNames(classes.subsection, classes.rightAlign)}>
                  <Parallax speed={3}>
                    <img src={Placeholder} alt='Testbild' className={classNames(classes.imgS)} />
                  </Parallax>
                </div>
                <div className={classNames(classes.subsection, classes.rightAlign)}>
                  <p>{language.C_1}</p>
                </div>
                <div className={classNames(classes.subsection, classes.rightAlign)}>
                  <Parallax speed={3}>
                    <img src={Placeholder} alt='Testbild' className={classNames(classes.imgS)} />
                  </Parallax>
                </div>
                <div className={classNames(classes.subsection, classes.leftAlign)}>
                  <p>{language.C_1}</p>
                </div>
              </div>
              {/* 2.section LEFT */}
              <div style={{ height: computeHeight('.secondL', 450) }}>
                <div className={classNames(classes.section, classes.sticky, 'firstR', 'secondL')}>
                  <div className={classNames(classes.subsection)}>
                    <p className={classNames(classes.highlight)}>{language.C_1}</p>
                  </div>
                </div>
              </div>
              {/* 3.section LEFT */}
              <div className={classNames(classes.section, 'thirdR')}>
                <div className={classNames(classes.subsection, classes.rightAlign)}>
                  <p>{language.C_1}</p>
                </div>
                <div className={classNames(classes.subsection, classes.leftAlign)}>
                  <p>{language.C_1}</p>
                </div>
              </div>
              {/* 4.section LEFT */}
              <div style={{ height: computeHeight('.fourthL', 450) }}>
                <div className={classNames(classes.section, classes.sticky, 'thirdR', 'fourthL')}>
                  <div className={classNames(classes.subsection, classes.rightAlign)}>
                    {/* <Parallax speed={3}> */}
                    <img src={Placeholder} alt='Testbild' className={classNames(classes.imgS)} />
                    {/* </Parallax> */}
                  </div>
                  <div className={classNames(classes.subsection, classes.leftAlign)}>
                    <p>{language.C_1}</p>
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
                  <p>{language.C_1}</p>
                </div>
                <div className={classNames(classes.spacerM)}></div>
                <div className={classNames(classes.subsection, classes.center)}>
                  <Parallax speed={-5}>
                    <p className={classNames(classes.highlight)}>{language.C_1}</p>
                  </Parallax>
                </div>
                <div className={classNames(classes.spacerL)}></div>
                <div className={classNames(classes.subsection, classes.center)}>
                  <Parallax speed={-5}>
                    <p className={classNames(classes.highlight)}>{language.C_1}</p>
                  </Parallax>
                </div>
                <div className={classNames(classes.spacerL)}></div>
                <div className={classNames(classes.subsection, classes.center)}>
                  <Parallax speed={-5}>
                    <p className={classNames(classes.highlight)}>{language.C_1}</p>
                  </Parallax>
                </div>
                <div className={classNames(classes.spacerM)}></div>
                <div className={classNames(classes.subsection)}>
                  <p>{language.C_1}</p>
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
                  <p>{language.B_1}</p>
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
                    <p>{language.B_1}</p>
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
                  <p>{language.B_1}</p>
                </div>
                <div className={classNames(classes.subsection, classes.rightAlign)}>
                  <p>{language.B_1}</p>
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
                    <p>{language.B_1}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default EscapeFromPrisonBoth
