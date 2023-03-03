import React, { useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './ChildhoodC.module.scss'
import sampleGlücklich from '@/assets/img/sample_glücklich.png'
import sampleArbeit from '@/assets/img/sample_hand.png'
import sampleBedruckt from '@/assets/img/sample_bedruckt.png'


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
        <Parallax speed={5} translateX={['-100px', '-10px']}>
          <img src={sampleGlücklich} alt='Austauschbild' className={classes.img} />
        </Parallax>
        <Parallax speed={5} translateX={['-10px', '-100px']}>
        <p>
          Es war ein Samstag im November 1931, als ein kleiner Junge namens Chum Mey in Thaot Croh geboren wurde.
        </p>
        </Parallax>
      </div>
      <div className={classes.section}>
        <Parallax speed={5} translateX={['-100px', '-10px']}>
          <img src={sampleArbeit} alt='Austauschbild' className={classes.img} />
        </Parallax>
        <Parallax speed={0} translateX={['-10px', '-100px']}>
        <p>
          In diesem Dorf in der Prey Veng Provinz lebte er mit seinen 5 Brüdern und 2 Schwestern und
          arbeitete zusammen mit seinen Eltern auf der Reisfarm. In die Schule ging er allerdings nicht.
        </p>
        </Parallax>
      </div>
      <div className={classes.section}>
        <Parallax speed={5} translateX={['-100px', '-10px']}>
          <img src={sampleBedruckt} alt='Austauschbild' className={classes.img} />
        </Parallax>
        <Parallax speed={5} translateX={['-10px', '-100px']}>
        <p>
          Als Chum Mey 10 Jahre alt war, starben seine Eltern und er zog mit seinen Geschwistern
            zu seinem ältesten Bruder nach Ba Phnom und arbeitete dort wieder auf einer Farm.
            Nachdem kurze Zeit später der älteste Bruder starb, brachen schwere Zeiten für die Familie an,
            da die Ernte nicht genug zum Leben war. INFO FRANZ ZEIT.
        </p>
        </Parallax>
      </div>
    </div>
  )
}

export default ChildhoodC
