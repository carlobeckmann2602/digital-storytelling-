import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './HistoricalBackground.module.scss'
import TestImage from '@/assets/img/template-1.jpg'
import StackingCards from '../../StackingCards/StackingCards'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const HistoricalBackground = (props: Props) => {
  const CHAPTER_ID: Chapter = 'HISTORICAL_BACKGROUND'

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
        <div className={classes.section}>
          <StackingCards>
            <img src={TestImage} alt='Testbild' />
            <img src={TestImage} alt='Testbild' />
            <img src={TestImage} alt='Testbild' />
            <img src={TestImage} alt='Testbild' />
          </StackingCards>
          <p>
            Zu dieser Zeit, genauer gesagt am 11. März 1967, brach im Bezirk Samlaut in der Provinz
            Battambang ein Aufstand aus. Dieser Samlaut-Aufstand gilt als der Beginn des
            Kambodschanischen Bürgerkriegs. In diesem Krieg standen auf der einen Seite die
            Nationalen Einheitsfront von Kampuchea (FUNK) und die Kommunistischen Partei Kampucheas
            (auch Rote Khmer genannt) unter der Führung von Pol Pot. Auf der anderen Seite stand die
            Regierungstruppe der Republik Khmer. Während dieser Zeit wird der Prinz Norodom Sihanouk
            durch den General Lon Nol gestürzt, welcher keiner Partei angehörig war. Während die
            Städte durch Lon Nols Regierungskräfte kontrolliert wurden, wohin ländliche Gebiete
            unter Kontrolle der roten Khmer standen.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HistoricalBackground
