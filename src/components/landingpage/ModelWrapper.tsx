/* eslint-disable react/no-unknown-property */
import { Center, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { TitleText } from './TitleText'
import { PrisonModel } from './PrisonModel'

export function ModelWrapper() {
  const scrollPosition = useScroll()

  const ref = useRef<THREE.Group>(null)
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = scrollPosition ? scrollPosition.offset / 1.5 : 0
      ref.current.position.y = scrollPosition ? scrollPosition.offset / 2 : 0
    }
  })

  return (
    <group rotation={[0, 10, 0]} ref={ref}>
      <Center>
        <TitleText />
        <PrisonModel position={[0, -50, 0]} />
      </Center>
    </group>
  )
}
