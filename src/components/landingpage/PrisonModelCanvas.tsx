/* eslint-disable react/no-unknown-property */
import {
  Backdrop,
  Center,
  Loader,
  ScrollControls,
  Sky,
  SpotLight,
  Stage,
  Text3D,
  useFBX,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useMemo, useRef } from 'react'
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

  return (
    <>
      <div ref={topRef} />
      <div className={'prison-model'}>
        <Suspense fallback={null}>
          <Canvas
            style={{ background: '#000322' }}
            resize={{ scroll: false }}
            gl={{ logarithmicDepthBuffer: true }}
          >
            <Stage
              adjustCamera={0.7}
              preset='rembrandt'
              intensity={0.4}
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
          </Canvas>
        </Suspense>
        <Loader dataInterpolation={(p) => `${language.LOADING} ${p.toFixed(2)}%`} />
      </div>
      <div className={classes.scrollDown}>{language.SCROLL_DOWN}</div>
      <div ref={bottomRef} />
    </>
  )
}

export default PrisonModelCanvas
