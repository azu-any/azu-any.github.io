import  React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader'


const Computers = ({ isMobile }) => {

  const computer = useGLTF("./macbook/scene.gltf")
  
  return (
    <mesh>
      <spotLight position={[10, 10, 5]} angle={Math.PI} prenumbra={1} intensity={0.5} castShadow shadow-mapSize={1024} />
      <primitive 
        object={computer.scene} 
        scale={isMobile ? 1 : 1.5} 
        position={isMobile ? [0.2, -3, 0] : [0, -3, 0]} 
        rotation = {[Math.PI/4, 0 ,0]} 
      />
    </mesh>
  );
};

const Phone = ({ isMobile }) => {

  const phone = useGLTF("./iphone/scene.gltf")
  
  return (
    <mesh>
     <directionalLight position={[4.4, -2, -0.5]} angle={Math.PI} prenumbra={0.1} intensity={0.5} castShadow shadow-mapSize={1024} />
      <primitive 
        object={phone.scene} 
        scale={isMobile ? 10 : 15} 
        position={isMobile ? [2.5, -3, 0.5] : [4, -3, 0.5]} 
        rotation = {[-0.2, Math.PI - 0.3, 0.4]} 
      />
    </mesh>
  );
};


const Airpods = ({ isMobile }) => {
  
  const airpods = useGLTF("./airpods/scene.gltf")
  
  return (
    <mesh>
      <spotLight position={[-5, -10, 0]} angle={Math.PI/2} prenumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <primitive 
        object={airpods.scene} 
        scale={isMobile ? 23 : 35} 
        position={isMobile ? [0, -6, 6] : [0, -6, 6]} 
        rotation = {isMobile ? [-0.2, -2.6, 0] : [-0.5, -2.4, 0]} 
      />
    </mesh>
  );
};

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 800px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
    frameloop='demand' 
    shadows
    camera={{position: [0,20,10], fov: 25}}
    gl = {{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />} >
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI /2} minPolarAngle={Math.PI / 2} />

      <ambientLight intensity={2} />
      <hemisphereLight intensity={0.00005} groundColor="black" />
      <directionalLight position={[0, 5, 0]} intensity={0.7} />
      <directionalLight position={[0, -5, 0]} intensity={1} />
      
        <group>

          <Computers isMobile={isMobile} />
          <Airpods isMobile={isMobile} />
          <Phone isMobile={isMobile} />

        </group>
       
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas