import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './HistoricalBackground.module.scss'
import TestImage from '@/assets/img/template-1.jpg'
import khmerRouge from '@/assets/img/HistoricalBackground_Khmer-Rouge-Guerrilla-soldiers.jpg'
import LonNol from '@/assets/img/HistoricalBackground_Lon-Nol-courtesy-of-mekong.jpg'
import Mao from '@/assets/img/HistoricalBackground_Mao_Sihanouk.jpg'
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
        <p>
          Zu dieser Zeit, genauer gesagt am 11. März 1967, brach im Bezirk Samlaut in der Provinz
          Battambang ein Aufstand aus. Dieser Samlaut-Aufstand gilt als der Beginn des
          Kambodschanischen Bürgerkriegs. In diesem Krieg standen auf der einen Seite die Nationalen
          Einheitsfront von Kampuchea (FUNK) und die Kommunistischen Partei Kampucheas (auch Rote
          Khmer genannt) unter der Führung von Pol Pot. Auf der anderen Seite stand die
          Regierungstruppe der Republik Khmer. Während dieser Zeit wird der Prinz Norodom Sihanouk
          durch den General Lon Nol gestürzt, welcher keiner Partei angehörig war. Während die
          Städte durch Lon Nols Regierungskräfte kontrolliert wurden, wohin ländliche Gebiete unter
          Kontrolle der roten Khmer standen.
        </p>
        <StackingCards>
          <img src={Mao} alt='Testbild' />
          <img src={khmerRouge} alt='Testbild' />
          <img src={LonNol} alt='Testbild' />
          <img src={TestImage} alt='Testbild' />
        </StackingCards>
        <div>
          <p>
            Von 1969 bis 1973 wurde Kambodscha von den Amerikanern bombardiert, um die Vorsorgewege
            zu Vietnam zu zerstören. So wurde das Land mit in den Vietnam Krieg hineingezogen. Da
            die landwirtschaftlichen Flächen zerstört wurden, wandten sich die Menschen auf dem Land
            von der USA ab und den Roten Khmer zu, von denen sie Hilfe erwarteten. Auch wenn die
            Amerikaner 1973 abzogen, nahm der Konflikt zwischen den kommunistischen Roten Khmer und
            der von den Amerikanern unterstützten Regierung weiter zu. Währenddessen hatten manche
            Kambodschaner jedoch den Eindruck, dass die Roten Khmer sich immer mehr fanatisierten,
            da sie jedes Friedensangebot sofort ausschlugen und sich nicht im Geringsten um ihre
            eigenen Verluste oder zivile Opfer der Kämpfe sorgten.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HistoricalBackground
