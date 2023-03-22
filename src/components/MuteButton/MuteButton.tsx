import classNames from 'classnames'
import { useState } from 'react'
import classes from './MuteButton.module.scss'

interface MuteButtonProps {
  soundEnabledGlobal: boolean
  setSoundEnabledGlobal: (value: boolean) => void
}

function MuteButton(props: MuteButtonProps) {
  const [soundEnabledLocal, setSoundEnabledLocal] = useState(props.soundEnabledGlobal)

  if (soundEnabledLocal) {
    return (
      <button
        className={classNames(classes.soundButton)}
        onClick={() => {
          setSoundEnabledLocal(false)
          props.setSoundEnabledGlobal(false)
        }}
      >
        <img src='src/assets/img/icon_unmute.png' alt='test' />
      </button>
    )
  }
  return (
    <button
      className={classNames(classes.soundButton)}
      onClick={() => {
        setSoundEnabledLocal(true)
        props.setSoundEnabledGlobal(true)
      }}
    >
      <img src='src/assets/img/icon_mute.png' alt='test' />
    </button>
  )
}

export default MuteButton
