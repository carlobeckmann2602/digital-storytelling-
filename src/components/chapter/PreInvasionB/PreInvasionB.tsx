import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './PreInvasionB.module.scss'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const PreInvasionB = (props: Props) => {
  const CHAPTER_ID: Chapter = 'PRE_INVASION_B'

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
            Im laufe der Zeit kam Bou Mong immer wieder in Kontakt mit der Revolution. Eines Tages
            im Jahre 1970 kam ein Kunde ohne Auftrag in sein Geschäft und bat ihn, sich der
            Revolution anzuschließen. Er lehnte ab, weil er keine Ambitionen hatte, politisch aktiv
            zu werden.
          </p>
        </div>
        <div>
          <p>
            Nach der Arbeit hörte er sich eine Ansprache von Prinz Sihanouk aus Peking an, in der er
            um die Unterstützung der Revolution zur Befreiung des Landes sowie Herstellung der
            Unabhängigkeit und des Friedens bittet. Nach dieser Rede entschloss sich Bou Mong, sich
            der Revolution anzuschließen.
          </p>
        </div>
        <div>
          <p>
            Daraufhin machten sich Bou Mong und seine Frau auf den Weg zum Dschungel "Marxist", um
            sich - wie viele andere Dorfbewohner - der Revolution anzuschließen. Die Reise war
            kompliziert und führte durch Dschungel und Hügellandschaften.
          </p>
        </div>
        <div>
          <p>
            Dort wurden Bou Mong und seine Frau als Maler:in für Propaganda eingesetzt, um Marx,
            Engels, Lenin und die Revolutionsflaggen mit Hammer und Sichel zu malen.
          </p>
        </div>
        <div>
          <p>
            Während seiner Zeit dort, sollte Bou Mong eine Biografie schreiben. Als Autor änderte er
            seinen Namen von Bou Mong-Seang zu Bou Meng, um seine Identität vor Angriffen außerhalb
            und innerhalb der Revolutionsbewegung zu schützen.
          </p>
        </div>
        <div>
          <p>
            Die Revolutionsbewegung wurde im Dschungel regelmäßig von den Truppen von Lol Non
            bombadiert und verlegte deshalb regelmäßig den Standort.
          </p>
        </div>
        <div>
          <p>
            Bou Meng wurde eine Beschäftigung in Druckerei zugeteilt. Er und seine Kameraden
            erhielten täglich Meldungen von der Front und erfuhren von der Umstellung Phom Penhs und
            dem erfolgreichen Angriff auf die Verteidigung von Lon Nols Truppen. Er freute sich über
            den bevorstehenden Sieg.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PreInvasionB
