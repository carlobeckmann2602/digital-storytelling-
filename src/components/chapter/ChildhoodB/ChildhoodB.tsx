import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './ChildhoodB.module.scss'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const ChildhoodB = (props: Props) => {
  const CHAPTER_ID: Chapter = 'CHILDHOOD_B'

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
        <div>
          <p>
            Es war etwa das Jahr 1941, als ein kleiner Junge Namens Bou Mong-Seang in eine arme
            Familie hinein geboren wurde.
          </p>
        </div>
        <div>
          <p>
            Im Kindesalter brachten ihn seine Eltern in die Pagode zu den Mönchen. Dort verbrachte
            er seine Kindheit und lernte dabei Lesen und Schreiben. Während dieser Zeit entdeckte er
            auch seine Leidenschaft für das Malen.
          </p>
        </div>
        <div>
          <p>
            Nach seiner Zeit bei dem Mönchen zog Bou Mong nach Battambang. Dort arbeitete er in
            einer Tischlerei und lernt nebenbei, wie man Farben herstellt und verbessert seine
            Malfähigkeiten weiter.
          </p>
        </div>
        <div>
          <p>
            Um das Jahr 1967 zog Bou Mong wieder zurück in seine Heimat. Dort arbeitete er zunächst
            in verschiedenen Kinos und malte z.B. Bilder für die Filme. Später eröffnete er einen
            eigenen Laden, wo er dann auch Bilder für den Kundenauftrag anfertigte. Immer wieder
            bekam er z.B. durch einen Bombenabwurf die Auswirkungen des Vietnamkrieges mit.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ChildhoodB
