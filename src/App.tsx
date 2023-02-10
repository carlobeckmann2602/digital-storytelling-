import './App.scss'
import { ParallaxProvider } from 'react-scroll-parallax'
import ChildhoodC from './components/chapter/ChildhoodC/ChildhoodC'
import ChildhoodB from './components/chapter/ChildhoodB/ChildhoodB'
import Template from './components/chapter/Template/Template'
import SidebarLeft from './components/SidebarLeft'
import SidebarRight from './components/SidebarRight'
import { useState } from 'react'
import { Chapter } from './helpers/constants'

function App() {
  const [currentChapter, setCurrentChapter] = useState<Chapter>('TITLE')

  return (
    <ParallaxProvider>
      <div className='app'>
        <div className='chapters'>
          <SidebarLeft anyProp='' />
          <SidebarRight currentChapter={currentChapter} />
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
