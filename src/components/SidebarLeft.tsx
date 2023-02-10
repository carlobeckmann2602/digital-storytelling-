import { PropsWithChildren } from 'react'
import './SidebarLeft.scss'

interface Props {
  anyProp: string // TODO: Replace with real props
}

function SidebarLeft(props: PropsWithChildren<Props>) {
  return (
    <div className='sidebarLeft'>
      <span>{props.children}</span>
    </div>
  )
}

export default SidebarLeft
