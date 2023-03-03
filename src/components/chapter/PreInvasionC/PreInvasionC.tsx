import React, { useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './PreInvasionC.module.scss'
import sampleSorge from '@/assets/img/sample_sorge.png'
import sampleHappy from '@/assets/img/sample_happy.png'
import sampleLove from '@/assets/img/sample_love.png'
import sampleFight from '@/assets/img/sample_fight.png'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const PreInvasionC = (props: Props) => {
  const CHAPTER_ID: Chapter = 'PRE_INVASION_C'

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
          <img src={sampleSorge} alt='Austauschbild' className={classes.img} />
        </Parallax>
        <Parallax speed={5} translateX={['-10px', '-100px']}>
        <p>
            Im Jahr 1950 ging Chum Mey nach Phnom Penh. Dort hatte er große Mühe arbeit zu finden, da er niemanden kannte.
            Er lebte auf der Straße und fand später als Bootsgehilfe eine Arbeit. Kurz darauf fand er Arbeit als Assistent
            und lernte dann als Mechaniker.
            Zu dieser Zeit verdiente er kaum Geld und war immer noch sehr arm.
        </p>
        </Parallax>
      </div>
      <div className={classes.section}>
        <Parallax speed={5} translateX={['-100px', '-10px']}>
          <img src={sampleHappy} alt='Austauschbild' className={classes.img} />
        </Parallax>
        <Parallax speed={5} translateX={['-10px', '-100px']}>
        <p>
            Vier Jahre später studierte Chum Mey Mechanik in Prey Veng und bekam darauf viel Geld.
            Zu dieser Zeit reparierte er Fahrzeuge und arbeitete in einer Werkstatt.
        </p>
        </Parallax>
      </div>
      <div className={classes.section}>
        <Parallax speed={5} translateX={['-100px', '-10px']}>
          <img src={sampleLove} alt='Austauschbild' className={classes.img} />
        </Parallax>
        <Parallax speed={5} translateX={['-10px', '-100px']}>
        <p>
            Im Jahr 1964 arrangierte ein Arbeitskollege für Chum Mey eine Heirat
            mit dessen Cousine, die er zuvor erst einmal getroffen hatte.
            Trotzdem führte er eine sehr glückliche Ehe mit ihr und sie bekamen insgesamt 4 Kinder, welche alle im Krieg starben.
        </p>
        </Parallax>
      </div>
      <div className={classes.section}>
        <Parallax speed={5} translateX={['-100px', '-10px']}>
          <img src={sampleFight} alt='Austauschbild' className={classes.img} />
        </Parallax>
        <Parallax speed={5} translateX={['-10px', '-100px']}>
        <p>
            Kurz vor der Invasion von den Khmer eröffnete Chum Mey kurz hintereinander zwei Werkstätten.
            Diese verkaufte er am Ende, um dann für einen General im Militär zu arbeiten und für diesen Traktoren und Autos zu reparieren.
        </p>
        </Parallax>
      </div>
    </div>
  )
}

export default PreInvasionC
