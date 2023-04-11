import { motion } from 'framer-motion'
import { ReactElement, useState } from 'react'
import classes from './Disclaimer.module.scss'
import { ReactComponent as InfoI } from '@/assets/img/icons/info-i.svg'
import { ReactComponent as CloseIcon } from '@/assets/img/icons/close-icon.svg'

interface DisclaimerProps {
  children: ReactElement | ReactElement[]
}

function Disclaimer(props: DisclaimerProps) {
  const [isOpen, setIsOpen] = useState(true)

  const renderOpenDisclaimer = () => {
    return (
      <div className={classes.wrapper}>
        <div className={classes.pseudoWrapper}>
          <button className={classes.closeBtn} onClick={() => setIsOpen(false)}>
            <CloseIcon className={classes.closeIcon} />
          </button>
          <div className={classes.childrenWrapper}>{props.children}</div>
        </div>
      </div>
    )
  }

  return isOpen ? renderOpenDisclaimer() : null
}

export default Disclaimer
