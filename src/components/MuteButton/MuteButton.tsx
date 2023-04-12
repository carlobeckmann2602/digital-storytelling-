import classNames from 'classnames'
import { useState } from 'react'
import classes from './MuteButton.module.scss'
import { BsVolumeMuteFill, BsVolumeUpFill } from 'react-icons/bs'

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
        <BsVolumeUpFill className={classNames(classes.icon)} />
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
      <BsVolumeMuteFill className={classNames(classes.icon)} />
    </button>
  )
}

export default MuteButton
