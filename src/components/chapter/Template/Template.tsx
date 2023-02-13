import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTER_TITLES } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './Template.module.scss'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const Template = (props: Props) => {
  // Ref for the element that we want to detect whether on screen
  const ref = React.useRef<HTMLInputElement>(null)
  // Call the hook passing in ref and root margin
  // Only considered onScreen if more than 350px of element is visible.
  const onScreen = useOnScreen(ref, '-350px')
  // Set current chapter state in App every time onScreen changes
  // (also on every rerender, which should hopefully be fine)
  useEffect(() => {
    onScreen && props.setCurrentChapter('TEMPLATE')
  }, [onScreen])

  return (
    <div>
      <div ref={ref} className={'chapter-heading-wrapper'}>
        <h2 className={classNames(classes.heading, 'chapter-heading')}>
          {CHAPTER_TITLES['TEMPLATE']}
        </h2>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, recusandae natus
          itaque fugit quod optio earum excepturi quae est quibusdam eius deleniti hic, ea
          consectetur distinctio nobis tempora voluptatum voluptates?
        </p>
      </div>
    </div>
  )
}

export default Template
