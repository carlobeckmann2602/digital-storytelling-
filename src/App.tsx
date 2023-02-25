import { ParallaxProvider } from 'react-scroll-parallax'
import { useState } from 'react'
import ChildhoodC from './components/chapter/ChildhoodC/ChildhoodC'
import ChildhoodB from './components/chapter/ChildhoodB/ChildhoodB'
import Template from './components/chapter/Template/Template'
import SidebarLeft from './components/SidebarLeft'
import SidebarRight from './components/SidebarRight'
import PrisonModelCanvas from './components/landingpage/PrisonModelCanvas'
import { Chapter } from './helpers/constants'
import './App.scss'

function App() {
  const [currentChapter, setCurrentChapter] = useState<Chapter>('TITLE')

  // TODO: Do not show sidebar when on landingpage
  return (
    <ParallaxProvider>
      <div className='app'>
        <div className='chapters'>
          <div className='sidebars'>
            <SidebarLeft currentChapter={currentChapter} />
            <SidebarRight currentChapter={currentChapter} />
          </div>
          <div className='chapter-content'>
            <Template setCurrentChapter={setCurrentChapter} />
            <ChildhoodC setCurrentChapter={setCurrentChapter} />
            <ChildhoodB setCurrentChapter={setCurrentChapter} />
          </div>
        </div>
      </div>
    </ParallaxProvider>
  )
}

export default App
