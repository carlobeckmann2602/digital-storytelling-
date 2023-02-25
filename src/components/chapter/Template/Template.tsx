import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Parallax } from 'react-scroll-parallax'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './Template.module.scss'
import TestImage from '@/assets/img/template-1.jpg'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const Template = (props: Props) => {
  // Used to identify the chapter
  // Also add this to the Chapter type and add corresponding data in the CHAPTERS map
  // (see constants.ts)
  const CHAPTER_ID: Chapter = 'TEMPLATE'

  // Ref for the element that we want to detect whether on screen
  const ref = React.useRef<HTMLInputElement>(null)
  // Call the hook passing in ref and root margin
  // Only considered onScreen if more than 350px of element is visible.
  const onScreen = useOnScreen(ref, '-350px')
  // Set current chapter state in App every time onScreen changes
  // (also on every rerender, which should hopefully be fine)
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
    </div>
  )
}

export default Template
