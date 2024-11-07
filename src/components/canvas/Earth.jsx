import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Earth = () => {

  const rocket = useGLTF('./rocket/scene.gltf')

  const earthRef = useRef();  // Create a reference for the Earth object

  // Rotate the object on all 3 axes
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.x = Math.PI / 3; 
      earthRef.current.rotation.y += 0.008; 
    }
  });
  

  return (
    <primitive 
      object={rocket.scene} 
      scale={10} 
      position={[-1, -1, 0]}  // Center the model
      rotation-y={0}
      ref={earthRef}
    />
  );
};

const EarthCanvas = () => {

  return (
    <Canvas
      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ 
        fov: 45,
        near: 1,
        far: 20,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Ambient Light: provides soft global illumination */}
        <ambientLight intensity={2} color={"white"} />  {/* Increase intensity for more light */}
        <directionalLight position={[-10, 0, -5]} intensity={10} color={"white"} />  {/* Increase intensity for more light */}
        

        
        <OrbitControls 
          rotation={[0, 0, 0]}
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>

    </Canvas>
  );
};

export default EarthCanvas;