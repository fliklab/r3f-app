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

function Scene() {

  // const orbitRef = useRef();

  return <>
    <ambientLight intensity={0.2} />
<pointLight position={[70, 100, 0]} color="blue" intensity={20} />
  <pointLight position={[-70, 80, -20]} color="pink" intensity={20} />
  {/* todo: use camera of recoil and update its target position, use lookat ? or worldDrirection ? and compute its direction */}
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
      <ModelAnimated path={process.env.PUBLIC_URL + "assets/marie_survivor/scene.gltf"} />
    </Suspense>
</>
}


function App2() {
  return (
    <>
      <Canvas camera={{ position: [7, 7, 7] }}>
        <RecoilRoot>
          <Physics>
            <Scene/>
          </Physics>
          <Stats />
        </RecoilRoot>
       </Canvas>
    </>
  );
}

export default App2;
