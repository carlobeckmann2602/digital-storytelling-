import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactElement } from 'react'
import classes from './StackingCards.module.scss'

interface StackingCardsProps {
  children: ReactElement[]
}

function StackingCards(props: StackingCardsProps) {
  const TRANSLATE_FACTOR = 10

  const { scrollYProgress } = useScroll()
  const s = useTransform(scrollYProgress, (latest) => 0.8 + latest)

  function getTranslateX(index: number) {
    const isEven = index % 2 === 0
    const randomOffset = Math.random() * 10

    if (isEven) {
      return index * TRANSLATE_FACTOR + randomOffset
    }

    return -index * TRANSLATE_FACTOR + randomOffset
  }

  return (
    <div className={classes.outerWrapper}>
      <div className={classes.innerWrapper}>
        {props.children?.map((card, index) => {
          return (
            <motion.div
              key={index}
              style={{
                scale: s,
                translateX: getTranslateX(index),
                translateY: index * TRANSLATE_FACTOR,
              }}
              className={classes.item}
            >
              {card}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default StackingCards
