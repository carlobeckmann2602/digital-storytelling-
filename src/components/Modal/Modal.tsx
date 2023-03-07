import { motion } from 'framer-motion'
import { ReactElement, useState } from 'react'
import classes from './Modal.module.scss'
import InfoI from '@/assets/img/info_i_32.png'
import classNames from 'classnames'

interface ModalProps {
  children: ReactElement | ReactElement[]
}

function Modal(props: ModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const renderOpenModal = () => {
    return (
      <div className={classes.outerWrapper}>
        <motion.button
          whileHover={{ scale: 1.6 }}
          whileTap={{ scale: 1.2 }}
          className={classNames(classes.infobutton, classes.buttonOpen)}
          onClick={() => setIsOpen(false)}
        >
          <img src={InfoI} className={classes.info} />
        </motion.button>
        <div className={classes.wrapper}>
          <div className={classes.bubble}>{props.children}</div>
        </div>
      </div>
    )
  }

  const renderClosedModal = () => {
    return (
      <motion.button
        whileHover={{ scale: 1.6 }}
        whileTap={{ scale: 1.2 }}
        className={classes.infobutton}
        onClick={() => setIsOpen(true)}
      >
        <img src={InfoI} className={classes.info} />
      </motion.button>
    )
  }

  return isOpen ? renderOpenModal() : renderClosedModal()
}

export default Modal
