// import Box from './components/Box';
import { Physics } from "@react-three/cannon";
import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./App.css";
import BoundingBoxPhysical from "./components/BoundingBoxPhysical";
import CubePhysical from "./components/CubePhysical";
import ModelPhysical from "./components/ModelPhysical";
import Plane from "./components/Plane";
import { random } from "./utils/getRandom";

function App() {
  return (
    <>
      <Canvas camera={{ position: [7, 7, 7] }}>
        <Physics>
          <ambientLight intensity={0.2}/>
          <pointLight position={[70, 100, 0]} color="blue" intensity={20} />
          <pointLight position={[-70, 80, -20]} color="pink" intensity={20} />
          <OrbitControls />
          <Suspense fallback={null}>
            <Plane />
            {(new Array(15)).fill(0).map(
              ji => { return <CubePhysical position={[random(-8, 8), random(1, 10), random(-8, 8)]} scale={[0.1, 0.1, 0.15]} rotation={[random(0.1, 25), 0, 0]} /> }
            )}
            <BoundingBoxPhysical visible position={[-1, 2, 0]} dims={[0.8,4,0.8]} rotation={[0.3,0,0]}>
              <ModelPhysical path="assets/Dwarf Idle/Dwarf Idle.gltf" scale={[2,2,2]} position={[0,-2,0]}/>
            </BoundingBoxPhysical>
          </Suspense>
        </Physics>
        <Stats />
      </Canvas>
    </>
  );
}

export default App;
