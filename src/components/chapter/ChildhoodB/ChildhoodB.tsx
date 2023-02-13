import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTER_TITLES } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './ChildhoodB.module.scss'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const ChildhoodB = (props: Props) => {
  const ref = React.useRef<HTMLInputElement>(null)
  const onScreen = useOnScreen(ref, '-350px')
  useEffect(() => {
    onScreen && props.setCurrentChapter('CHILDHOOD_B')
  }, [onScreen])

  return (
    <div>
      <div ref={ref} className={'header-outer'}>
        <div className='header-inner'>
          <h2 className={classNames(classes.heading, 'chapter-heading')}>
            {CHAPTER_TITLES['CHILDHOOD_B']}
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

export default ChildhoodB
