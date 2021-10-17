// import Box from './components/Box';
import { Physics } from "@react-three/cannon";
import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import CubePhysical from "./components/CubePhysical";
import Plane from "./components/Plane";
import ModelAnimated from "./components/PlayerModel";
import { random } from "./utils/getRandom";

function App() {
  return (
    <>
      <Canvas camera={{ position: [7, 7, 7] }}>
      <RecoilRoot>
        <Physics>
          <ambientLight intensity={0.2} />
          <pointLight position={[70, 100, 0]} color="blue" intensity={20} />
          <pointLight position={[-70, 80, -20]} color="pink" intensity={20} />
          <OrbitControls/>
          <Suspense fallback={null}>
            <Plane />
            {new Array(45).fill(0).map((ji) => {
              return (
                <CubePhysical
                  position={[random(-4, 4), random(1, 10), random(-4, 4)]}
                  scale={[0.1, 0.1, 0.15]}
                  rotation={[random(0.1, 25), 0, 0]}
                />
              );
            })}
            <ModelAnimated path="assets/marie_survivor/scene.gltf" />
          </Suspense>
        </Physics>
        <Stats />
      </RecoilRoot>
        </Canvas>
    </>
  );
}

export default App;
