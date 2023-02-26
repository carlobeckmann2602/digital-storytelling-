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
import HistoricalBackground from './components/chapter/HistoricalBackground/HistoricalBackground'
import PreInvasionB from './components/chapter/PreInvasionB/PreInvasionB'
import PreInvasionC from './components/chapter/PreInvasionC/PreInvasionC'
import InvasionBackground from './components/chapter/InvasionBackground/InvasionBackground'
import AfterInvasionB from './components/chapter/AfterInvasionB/AfterInvasionB'
import AfterInvasionC from './components/chapter/AfterInvasionC/AfterInvasionC'
import ArrestB from './components/chapter/ArrestB/ArrestB'
import ArrestC from './components/chapter/ArrestC/ArrestC'
import DictatorshipBackground from './components/chapter/DictatorshipBackground/DictatorshipBackground'
import PrisonLifeBackground from './components/chapter/PrisonLifeBackground/PrisonLifeBackground'
import PrisonB from './components/chapter/PrisonB/PrisonB'
import PrisonC from './components/chapter/PrisonC/PrisonC'
import LiberationFromPrisonBackground from './components/chapter/LiberationFromPrisonBackground/LiberationFromPrisonBackground'
import EscapeFromPrisonBoth from './components/chapter/EscapeFromPrisonBoth/EscapeFromPrisonBoth'
import OutlookBackground from './components/chapter/OutlookBackground/OutlookBackground'
import InvasionBoth from './components/chapter/InvasionBoth/InvasionBoth'

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
            <HistoricalBackground setCurrentChapter={setCurrentChapter} />
            <PreInvasionB setCurrentChapter={setCurrentChapter} />
            <PreInvasionC setCurrentChapter={setCurrentChapter} />
            <InvasionBackground setCurrentChapter={setCurrentChapter} />{' '}
            <InvasionBoth setCurrentChapter={setCurrentChapter} />
            <AfterInvasionB setCurrentChapter={setCurrentChapter} />
            <AfterInvasionC setCurrentChapter={setCurrentChapter} />
            <ArrestB setCurrentChapter={setCurrentChapter} />
            <ArrestC setCurrentChapter={setCurrentChapter} />
            <DictatorshipBackground setCurrentChapter={setCurrentChapter} />
            <PrisonLifeBackground setCurrentChapter={setCurrentChapter} />
            <PrisonB setCurrentChapter={setCurrentChapter} />
            <PrisonC setCurrentChapter={setCurrentChapter} />
            <LiberationFromPrisonBackground setCurrentChapter={setCurrentChapter} />
            <EscapeFromPrisonBoth setCurrentChapter={setCurrentChapter} />
            <OutlookBackground setCurrentChapter={setCurrentChapter} />
          </div>
        </div>
      </div>
    </ParallaxProvider>
  )
}

export default App
