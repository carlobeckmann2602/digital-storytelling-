import { ParallaxProvider } from 'react-scroll-parallax'
import { useState } from 'react'
import ChildhoodC from './components/chapter/ChildhoodC/ChildhoodC'
import ChildhoodB from './components/chapter/ChildhoodB/ChildhoodB'
import Template from './components/chapter/Template/Template'
import { Chapter, FADINGTIME } from './helpers/constants'
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
import Sidebar from './components/Sidebar/Sidebar'
import CurrentPersonMarker from './components/CurrentPersonMarker/CurrentPersonMarker'
import MuteButton from './components/MuteButton/MuteButton'
import PrisonModelCanvas from './components/landingpage/PrisonModelCanvas'
import Disclaimer from './components/Disclaimer/Disclaimer'
import GeneralInfo from './components/GeneralInfo/GeneralInfo'
import * as language from './App_lang'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'

function App() {
  const [currentChapter, setCurrentChapter] = useState<Chapter>('TITLE')

  const [soundEnabled, setSoundEnabled] = useState(false)

  return (
    <ParallaxProvider>
      <div className='app'>
        <Disclaimer>
          <h1>Disclaimer</h1>
          <p>{language.DISCLAIMER_TEXT}</p>
        </Disclaimer>
        <PrisonModelCanvas setCurrentChapter={setCurrentChapter} />
        <div className='sidebarWrapper'>
          <Sidebar currentChapter={currentChapter} />
          <div className='mute-btn-wrapper'>
            <MuteButton soundEnabledGlobal={soundEnabled} setSoundEnabledGlobal={setSoundEnabled} />
          </div>
        </div>
        <div className='chapter-content'>
          <CurrentPersonMarker currentChapter={currentChapter} />
          <Template setCurrentChapter={setCurrentChapter} />
          <HistoricalBackground setCurrentChapter={setCurrentChapter} />
          <ChildhoodC setCurrentChapter={setCurrentChapter} />
          <ChildhoodB setCurrentChapter={setCurrentChapter} />
          <PreInvasionB setCurrentChapter={setCurrentChapter} />
          <PreInvasionC setCurrentChapter={setCurrentChapter} />
          <InvasionBackground setCurrentChapter={setCurrentChapter} />{' '}
          <InvasionBoth setCurrentChapter={setCurrentChapter} />
          <AfterInvasionB setCurrentChapter={setCurrentChapter} />
          <AfterInvasionC setCurrentChapter={setCurrentChapter} />
          <ArrestB setCurrentChapter={setCurrentChapter} />
          <ArrestC
            setCurrentChapter={setCurrentChapter}
            soundEnabled={soundEnabled}
            fadingTime={FADINGTIME}
          />
          <DictatorshipBackground setCurrentChapter={setCurrentChapter} />
          <PrisonLifeBackground setCurrentChapter={setCurrentChapter} />
          <PrisonB setCurrentChapter={setCurrentChapter} />
          <PrisonC setCurrentChapter={setCurrentChapter} />
          <LiberationFromPrisonBackground setCurrentChapter={setCurrentChapter} />
          <EscapeFromPrisonBoth setCurrentChapter={setCurrentChapter} />
          <OutlookBackground setCurrentChapter={setCurrentChapter} />
        </div>
        <GeneralInfo setCurrentChapter={setCurrentChapter} />
        <ScrollToTopButton />
      </div>
    </ParallaxProvider>
  )
}

export default App
