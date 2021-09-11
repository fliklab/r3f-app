// import Box from './components/Box';
import { Box, OrbitControls, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import './App.css';
import Model from './components/Model';

function App() {  
  return (
    <>
      <Canvas camera={{position:[170,0,0]}}>
        <ambientLight />
          <pointLight position={[170, 200, 0]} color='red' power={20}/>
          <pointLight position={[-170, 200, 0]} color='red' power={20}/>
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Suspense fallback={<Box />}>
          <Model path='assets/vaporwave_tokyo/scene.gltf' scale={0.2}/>
        </Suspense>
        <Stats />
      </Canvas>
    </>
  );
}

export default App;
