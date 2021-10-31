// import Box from './components/Box';
import { Physics } from "@react-three/cannon";
import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { RecoilRoot } from "recoil";
import { Vector3 } from "three";
import "./Scene1.css";
import CubePhysical from "../components/CubePhysical";
import Plane from "../components/Plane/Plane";
import ModelAnimated from "../components/PlayerModel";
import { random } from "../utils/getRandom";

function Scene() {

  const orbitRef = useRef();
  useFrame((clock) => {
    console.log('orbitRef.current.target.position', orbitRef.current.target.position)
    orbitRef.current.target.position = new Vector3(3*Math.sin(clock*0.5), 0, 0)
    orbitRef.current.update();
  })

  return <>
  <ambientLight intensity={0.5} />
  <pointLight position={[50, 50, 0]} color="blue" intensity={1} />
  <pointLight position={[-60, 80, -20]} color="pink" intensity={1} />
  {/* <spotLight color="#ffeeff" position={[2,4,1]} angle={0.6} />  */}
  {/* todo: use camera of recoil and update its target position, use lookat ? or worldDrirection ? and compute its direction */}
    <OrbitControls ref={orbitRef}/>
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


function Scene1() {
  return (
    <>
      <Canvas camera={{ position: [7, 7, 5] }}>
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

export default Scene1;
