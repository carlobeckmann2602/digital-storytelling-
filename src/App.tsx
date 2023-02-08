import './App.scss'
import { ParallaxProvider } from 'react-scroll-parallax'
import ChildhoodC from './components/chapter/ChildhoodC/ChildhoodC'
import ChildhoodB from './components/chapter/ChildhoodB/ChildhoodB'
import Template from './components/chapter/Template/Template'
import SidebarLeft from './components/SidebarLeft'

function App() {
  return (
    <ParallaxProvider>
      <div className='app'>
        <div className='chapters'>
          <SidebarLeft>Content hier</SidebarLeft>
          <div className='chapter-content'>
            <Template />
            <ChildhoodC />
            <ChildhoodB />
          </div>
        </div>
      </div>
    </ParallaxProvider>
  )
}

export default App
