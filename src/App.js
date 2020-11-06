import React, { Suspense } from 'react'
import { Canvas, useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'drei'
import './App.css'
import url from './assets/L-159.gltf'
import { DoubleSide } from 'three'

function Model() {
  const gltf = useLoader(GLTFLoader, url)
  return gltf ? <primitive object={gltf.scene} castShadow /> : null
}
function Plane() {
  return (
    <mesh position={[0, -2.12, 0]} rotation-x={-Math.PI / 2} receiveShadow>
      <planeGeometry args={[25, 25, 32]} />
      <meshStandardMaterial side={DoubleSide} color={'darkgray'} />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas shadowMap camera={{ position: [16, 11, 16] }}>
      <ambientLight />
      <spotLight castShadow position={[2, 5, 2]} angle={0.5} distance={20} />
      <OrbitControls autoRotate={true} />
      <Plane />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  )
}
