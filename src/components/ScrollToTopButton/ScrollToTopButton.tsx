import classes from './ScrollToTopButton.module.scss'
import { motion } from 'framer-motion'
import { ReactComponent as ArrowIcon } from '@/assets/img/icons/arrow-up-icon.svg'
import { BsArrowUpCircle } from 'react-icons/bs'

function ScrollToTopButton() {
  const scrollToTop = () => {
    console.log('test')
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className={classes.btnWrapper}>
      <motion.button
        animate={{ scale: 1.4, translateX: '3px' }}
        className={classes.backButton}
        onClick={() => scrollToTop()}
      >
        <BsArrowUpCircle className={classes.arrowIcon} />
        <p>Zurück zum Anfang</p>
      </motion.button>
    </div>
  )
}

export default ScrollToTopButton
