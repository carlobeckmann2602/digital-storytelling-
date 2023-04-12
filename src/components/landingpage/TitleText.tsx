/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 blenderTest.glb --transform --types
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { Center, Text3D, useGLTF, useScroll } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

export function TitleText(props: JSX.IntrinsicElements['group']) {
  const fontUrl = './3dfont.json'

  // TODO: Real Headline
  return (
    <Center top disableY>
      <Text3D font={fontUrl} position={[0, -35, 0]} size={5} bevelThickness={10}>
        HEADLINE HIER
      </Text3D>
    </Center>
  )
}

useGLTF.preload('/prison_model.glb')