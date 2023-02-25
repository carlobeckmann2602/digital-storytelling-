import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './ChildhoodC.module.scss'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const ChildhoodC = (props: Props) => {
  const CHAPTER_ID: Chapter = 'CHILDHOOD_C'

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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, recusandae natus
          itaque fugit quod optio earum excepturi quae est quibusdam eius deleniti hic, ea
          consectetur distinctio nobis tempora voluptatum voluptates?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, recusandae natus
          itaque fugit quod optio earum excepturi quae est quibusdam eius deleniti hic, ea
          consectetur distinctio nobis tempora voluptatum voluptates?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, recusandae natus
          itaque fugit quod optio earum excepturi quae est quibusdam eius deleniti hic, ea
          consectetur distinctio nobis tempora voluptatum voluptates?
        </p>
      </div>
    </div>
  )
}

export default ChildhoodC
