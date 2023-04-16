import React, { useEffect } from 'react'
import classNames from 'classnames'
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
        <div className={classes.intro}>
          <p>
            Willkommen auf unserer Webseite, die Ihnen die Geschichte von zwei Überlebenden des
            S-21-Gefängnisses in Kambodscha erzählt. Das S-21-Gefängnis, auch bekannt als Tuol
            Sleng, war ein Ort des Schreckens während der Herrschaft der Roten Khmer in den späten
            1970er Jahren. Tausende unschuldiger Menschen wurden inhaftiert, gefoltert und ermordet,
            während das Regime versuchte, eine utopische Gesellschaft zu schaffen. Hier erfahren Sie
            mehr über das Leben von Chum Mey und Bou Meng, die beide das S-21-Gefängnis überlebt
            haben und nun ihre Erfahrungen und ihr Leben danach teilen. Auch wenn beide diese Zeit
            auf unterschiedlichste Art erlebten, waren sie beide Zeugen für die Grausamkeiten, die
            während dieser Zeit in Kambodscha begangen wurden.
          </p>
        </div>
        <div className={classes.section}>
          <div className={classes.chum}>
            <h2>Chum Mey</h2>
            <p>Ein Mechaniker und Arbeiter für das Verkehrsministerium.</p>
            <div>
              <img
                src={Chum}
                className={classNames(classes.bild, classes.chumBild)}
                title='Chum Mey, Quelle: https://en.wikipedia.org/wiki/Chum_Mey#/media/File:Chum_Mey_-_Book_Signing.jpg'
                alt='Testbild'
              />
            </div>
          </div>
          <div className={classes.bou}>
            <h2>Bou Meng</h2>
            <p>Ein Maler und Anhänger der Revolution.</p>
            <div>
              <img
                src={Bou}
                className={classNames(classes.bild, classes.bouBild)}
                title='Bou Meng, Quelle: https://www.bbc.com/news/magazine-33096971'
                alt='Testbild'
              />
            </div>
          </div>
        </div>
        <div className={classes.section}></div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default Template
