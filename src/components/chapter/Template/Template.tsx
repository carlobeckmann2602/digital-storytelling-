import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Parallax } from 'react-scroll-parallax'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './Template.module.scss'
import Chum from '@/assets/img/CurrentPerson_Chum_Mey_Portrait.jpg'
import Bou from '@/assets/img/CurrentPerson_Bou_Meng_Portrait.jpg'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const Template = (props: Props) => {
  // Used to identify the chapter
  // Also add this to the Chapter type and add corresponding data in the CHAPTERS map
  // (see constants.ts)
  const CHAPTER_ID: Chapter = 'TEMPLATE'

  // Refs for the elements that we want to detect whether on screen
  const topRef = React.useRef<HTMLInputElement>(null)
  const bottomRef = React.useRef<HTMLInputElement>(null)
  // Call the hooks passing in ref and root margin
  // Only considered onScreen if more than 350px of element is visible.
  const topOnScreen = useOnScreen(topRef, '-350px')
  const bottomOnScreen = useOnScreen(bottomRef, '-350px') // Set current chapter state in App every time onScreen changes
  // (also on every rerender, which should hopefully be fine)
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
        <div>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus estLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est
          </p>
        </div>
        <div className={classes.section}>
          <div className={classes.chum}>
            <p>Chum Mey</p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et ju
            </p>
          </div>
          <div className={classes.bou}>
            <p>Bou Meng</p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est
            </p>
          </div>
        </div>
        <div className={classes.section}>
          <div>
            <img src={Chum} className={classes.bild} alt='Testbild' />
          </div>
          <div>
            <img src={Bou} className={classes.bild} alt='Testbild' />
          </div>
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default Template
