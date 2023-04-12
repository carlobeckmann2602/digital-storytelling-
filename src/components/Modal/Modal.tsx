import { motion } from 'framer-motion'
import { ReactElement, useState } from 'react'
import classes from './Modal.module.scss'
import { ReactComponent as InfoI } from '@/assets/img/icons/info-i.svg'
import { ReactComponent as CloseIcon } from '@/assets/img/icons/close-icon.svg'
import classNames from 'classnames'

interface ModalProps {
  direction: 'LEFT' | 'RIGHT'
  children: ReactElement | ReactElement[]
}

function Modal(props: ModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const renderOpenModal = () => {
    return (
      <motion.div style={{ scale: 0 }} animate={{ scale: 1 }} className={classes.openModalWrapper}>
        <motion.button
          animate={{ scale: 1.4, translateX: '3px' }}
          className={classes.infoButton}
          onClick={() => setIsOpen(false)}
        >
          <InfoI className={classes.infoIcon} />
        </motion.button>
        <div
          className={classNames(classes.bubbleWrapper, {
            [classes.right]: props.direction === 'RIGHT',
            [classes.left]: props.direction === 'LEFT',
          })}
        >
          <div
            className={classNames(classes.bubble, {
              [classes.right]: props.direction === 'RIGHT',
              [classes.left]: props.direction === 'LEFT',
            })}
          >
            <button className={classes.closeBtn} onClick={() => setIsOpen(false)}>
              <CloseIcon className={classes.closeIcon} />
            </button>
            <div className={classes.childrenWrapper}>{props.children}</div>
          </div>
        </div>
      </motion.div>
    )
  }

  const renderClosedModal = () => {
    return (
      <motion.button
        className={classes.infoButton}
        onClick={() => setIsOpen(true)}
        animate={{ translateX: '-3px', translateY: '3px' }}
      >
        <InfoI className={classes.infoIcon} />
      </motion.button>
    )
  }

  return isOpen ? renderOpenModal() : renderClosedModal()
}

export default Modal
