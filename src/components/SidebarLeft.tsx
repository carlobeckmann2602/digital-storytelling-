import './SidebarLeft.scss'

function SidebarLeft(props: any) {
  return (
    <div className='sidebarLeft'>
      <span>{props.children}</span>
    </div>
  )
}

export default SidebarLeft
