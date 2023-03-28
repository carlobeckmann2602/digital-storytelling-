import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Parallax } from 'react-scroll-parallax'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './Template.module.scss'
import TestImage from '@/assets/img/template-1.jpg'
import StackingCards from '../../StackingCards/StackingCards'

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
        <StackingCards>
          <img src={TestImage} alt='Testbild' />
          <img src={TestImage} alt='Testbild' />
          <img src={TestImage} alt='Testbild' />
          <img src={TestImage} alt='Testbild' />
        </StackingCards>
        <div className={classes.section}>
          <Parallax speed={-5}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, recusandae natus
              itaque fugit quod optio earum excepturi quae est quibusdam eius deleniti hic, ea
              consectetur distinctio nobis tempora voluptatum voluptates?
            </p>
          </Parallax>
          <img src={TestImage} alt='Testbild' />
        </div>
        <div className={classes.section}>
          <Parallax scale={[0.95, 1, 'easeOutBack']}>
            <img src={TestImage} alt='Testbild' />
          </Parallax>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, recusandae natus
            itaque fugit quod optio earum excepturi quae est quibusdam eius deleniti hic, ea
            consectetur distinctio nobis tempora voluptatum voluptates?
          </p>
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default Template
