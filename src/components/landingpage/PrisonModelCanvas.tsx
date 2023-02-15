import { ScrollControls, Sky, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { PrisonModel } from './PrisonModel'

const PrisonModelCanvas = () => {
  return (
    <div className={'prison-model'}>
      <Canvas>
        <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
        <Suspense fallback={null}>
          <Stage preset='rembrandt' intensity={1} environment='park' shadows='accumulative'>
            <ScrollControls
              // TODO: Remove scrollbar (overflow: hidden does not work)
              // style={{ overflow: 'hidden' }}
              pages={1} // Each page takes 100% of the height of the canvas
              distance={1} // A factor that increases scroll bar travel (default: 1)
              damping={0.2} // Friction, higher is faster (default: 4)
            >
              <PrisonModel />
            </ScrollControls>
          </Stage>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default PrisonModelCanvas
