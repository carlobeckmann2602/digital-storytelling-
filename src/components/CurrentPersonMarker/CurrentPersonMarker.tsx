import classNames from 'classnames'
import classes from './CurrentPersonMarker.module.scss'
import ChumMey from '@/assets/img/CurrentPerson_Chum_Mey_Portrait.jpg'
import BouMeng from '@/assets/img/CurrentPerson_Bou_Meng_Portrait.jpg'
import { Chapter, CHAPTERS } from '../../helpers/constants'
import { motion } from 'framer-motion'

interface CurrentPersonMarkerProps {
  currentChapter: Chapter
}

const CurrentPersonMarker = (props: CurrentPersonMarkerProps) => {
  const currentPerson = CHAPTERS.get(props.currentChapter)?.person

  interface MarkerProps {
    person: string
  }

  function Marker(props: MarkerProps) {
    return (
      <motion.div
        style={{
          translateY: 40,
          opacity: 0.8,
        }}
        animate={{
          translateY: 1,
          opacity: 1,
        }}
        className={classNames(classes.wrapper, {
          [classes.bou]: props.person === 'bou',
          [classes.chum]: props.person === 'chum',
        })}
      >
        {props.person === 'bou' ? (
          <img src={BouMeng} className={classes.image}></img>
        ) : (
          <img src={ChumMey} className={classes.image}></img>
        )}
      </motion.div>
    )
  }

  if (!currentPerson || currentPerson === 'none') {
    return null
  }

  if (currentPerson === 'chum') {
    return <Marker person='chum' />
  }

  if (currentPerson === 'bou') {
    return <Marker person='bou' />
  }

  return (
    <>
      <Marker person='bou' />
      <Marker person='chum' />
    </>
  )
}

export default CurrentPersonMarker
