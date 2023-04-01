import { Center, Loader, ScrollControls, Sky, Stage, Text3D } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useRef } from 'react'
import * as language from './PrisonModelCanvas_lang'
import { ModelWrapper } from './ModelWrapper'
import useOnScreen from '../../helpers/useOnScreenHook'
import { Chapter } from '../../helpers/constants'
import classes from './PrisonModelCanvas.module.scss'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const PrisonModelCanvas = (props: Props) => {
  const CHAPTER_ID: Chapter = 'TITLE'

  const topRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLInputElement>(null)
  const topOnScreen = useOnScreen(topRef, '-350px')
  const bottomOnScreen = useOnScreen(bottomRef, '-350px')
  useEffect(() => {
    topOnScreen && props.setCurrentChapter(CHAPTER_ID)
  }, [topOnScreen])
  useEffect(() => {
    bottomOnScreen && props.setCurrentChapter(CHAPTER_ID)
  }, [bottomOnScreen])

  const fontUrl = './3dfont.json'

  return (
    <>
      <div ref={topRef} />
      <div className={'prison-model'}>
        <Canvas gl={{ logarithmicDepthBuffer: true }}>
          <Center top disableY disableZ>
            <Text3D font={fontUrl} position={[0, 2, -1]}>
              {language.HEADING}
              <meshPhysicalMaterial />
            </Text3D>
          </Center>
          <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
          <Suspense fallback={null}>
            <Stage
              adjustCamera={0.05}
              preset='rembrandt'
              intensity={0.3}
              environment='lobby'
              shadows='accumulative'
            >
              <ScrollControls
                // remove duplicate scrollbar in firefox and ms browsers
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
                pages={1} // Each page takes 100% of the height of the canvas
                distance={1} // A factor that increases scroll bar travel (default: 1)
                damping={0.2} // Friction, higher is faster (default: 4)
              >
                <ModelWrapper />
              </ScrollControls>
            </Stage>
          </Suspense>
        </Canvas>
        <Loader dataInterpolation={(p) => `${language.LOADING} ${p.toFixed(2)}%`} />
      </div>
      <div className={classes.scrollDown}>{language.SCROLL_DOWN}</div>
      <div ref={bottomRef} />
    </>
  )
}

export default PrisonModelCanvas
