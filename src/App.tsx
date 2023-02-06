import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { motion, useScroll } from 'framer-motion'

function App() {
  const [count, setCount] = useState(0)

  // Framer Motion
  const { scrollYProgress } = useScroll()

  return (
    // React Parallax
    <ParallaxProvider>
      <div className='App'>
        <motion.div className='progress-bar' style={{ scaleX: scrollYProgress }} />
        <div>
          <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
            <img src='/vite.svg' className='logo' alt='Vite logo' />
          </a>
          <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className='card'>
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        {/* React Parallax */}
        <Parallax className={'dings'} translateY={[-20, 20]} speed={-5} rotate={[0, 360]}>
          Text hier
        </Parallax>
      </div>
    </ParallaxProvider>
  )
}

export default App
