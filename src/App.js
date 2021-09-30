// import Box from './components/Box';
import { Box, OrbitControls, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import ModelAnimated from './components/ModelAnimated';
import './App.css';

function App() {  
  return (
    <>
      <Canvas camera={{position:[5,0,0]}}>
        <ambientLight />
          <pointLight position={[5, 2, 0]} color='red' power={20}/>
          <pointLight position={[-5, 2, 0]} color='red' power={20}/>
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Suspense fallback={<Box />}>
          <ModelAnimated path='assets/marie_survivor/scene.gltf'/>
        </Suspense>
        <Stats />
      </Canvas>
    </>
  );
}

export default App;
