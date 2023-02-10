import React, { useEffect } from 'react'
import { Chapter, CHAPTER_TITLES } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import './Template.scss'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const Template = (props: Props) => {
  // Ref for the element that we want to detect whether on screen
  const ref = React.useRef<HTMLInputElement>(null)
  // Call the hook passing in ref and root margin
  // Only considered onScreen if more than 300px of element is visible.
  const onScreen = useOnScreen(ref, '-300px')
  // Set current chapter state in App every time onScreen changes
  // (also on every rerender, which should hopefully be fine)
  useEffect(() => {
    onScreen && props.setCurrentChapter('TEMPLATE')
  }, [onScreen])

  return (
    <div ref={ref} className={'wrapper'}>
      <h2 className='heading'>{CHAPTER_TITLES['TEMPLATE']}</h2>
    </div>
  )
}

export default Template
