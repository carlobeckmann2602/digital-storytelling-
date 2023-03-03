import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './ChildhoodC.module.scss'
import sampleGlücklich from '@/assets/img/sample_glücklich.png'
import sampleArbeit from '@/assets/img/sample_hand.png'
import sampleTraurig from '@/assets/img/sample_traurig.png'

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
      <div className={classes.section}>
        <img src={sampleGlücklich} alt='Austauschbild' className={classes.img}/>
        <p>
          Es war ein Samstag im November 1931, als ein kleiner Junge namens Chum Mey in Thaot Croh geboren wurde.
        </p>
      </div>
      <div className={classes.section}>
        <img src={sampleArbeit} alt='Austauschbild' className={classes.img}/>
        <p>
          In diesem Dorf in der Prey Veng Provinz lebte er mit seinen 5 Brüdern und 2 Schwestern und
          arbeitete zusammen mit seinen Eltern auf der Reisfarm. In die Schule ging er allerdings nicht.
        </p>
      </div>
      <div className={classes.section}>
        <img src={sampleTraurig} alt='Austauschbild' className={classes.img}/>
        <p>
          Als Chum Mey 10 Jahre alt war, starben seine ELtern und er zog mit seinen Geschwistern
          zu seinem ältesten Bruder nach Ba Phnom.
        </p>
      </div>
    </div>
  )
}

export default ChildhoodC
