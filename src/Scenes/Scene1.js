// import Box from './components/Box';
import { Physics } from "@react-three/cannon";
import { Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { RecoilRoot } from "recoil";
import CubePhysical from "../components/CubePhysical";
import Plane from "../components/Plane/Plane";
import PlayerModel from "../components/PlayerModel/PlayerModelFBX";
import { Scene as SkyBoxcene } from "../components/SkyBox/SkyBox";
import { PUBLIC_ENV_URL } from "../config";
import { random } from "../utils/getRandom";
import "./Scene1.css";

// socket.on("connect", (msg) => {
//   socket.emit("message-client", `연결됨.`);
//   console.log("connected", msg);
//   socket.emit("name", "Tom");
// });
// socket.on("seq-num", (msg) => {
//   // setCounter(msg)
//   console.info(msg)
// });
// socket.on("message", (msg) => {
//   // addMessage(msg);
//   console.info(msg);
// });
// return socket.emit('end');

function MainScene() {
  // useFrame(({clock}) => {
  //   // console.log('orbitRef.current.target.position', clock,orbitRef.current.target.position)
  //   orbitRef.current.target.postiion = new Vector3(7*Math.sin(clock.elapsedTime), 7, 7*Math.cos(clock.elapsedTime))
  //   orbitRef.current.update();
  // })

  return (
    <>
      <ambientLight intensity={0.2} color="#FAAD37" />
      <directionalLight position={[70, 100, 0]} color="#FAAD37" intensity={1} />
      {/* <Box position={[1,1,1]} /> */}

      {/* <pointLight position={[0, 10, 0]} color="red" intensity={11} /> */}
      {/* <SpotLight position={[0, 2, 2]} color="red" intensity={11} castShadow angle={0.5} decay={1} distance={20} penumbra={1}/> */}
      {/* <pointLight position={[-70, 80, -20]} color="red" intensity={0.1} /> */}
      {/* todo: use camera of recoil and update its target position, use lookat ? or worldDrirection ? and compute its direction */}
      {/* <OrbitControls ref={orbitRef} minDistance={1} maxDistance={20} target={[0,2.5,0]}/> */}
      {/* <PointerLockControls ref={orbitRef} minDistance={1} maxDistance={20} target={[0,2.5,0]}/> */}
      <SkyBoxcene />
      <Suspense fallback={null}>
        <Plane />
        {new Array(15).fill(0).map((ji) => {
          return (
            <CubePhysical
              position={[random(-4, 4), random(1, 10), random(-4, 4)]}
              scale={[0.1, 0.1, 0.15]}
              rotation={[random(0.1, 25), 0, 0]}
            />
          );
        })}
        <PlayerModel
          fbxPath={PUBLIC_ENV_URL + "assets/Walking/Walking.fbx"}
          idlePath={PUBLIC_ENV_URL + "assets/Walking/Idle.fbx"}
        />
      </Suspense>
    </>
  );
}

function Scene1() {
  return (
    <>
      <Canvas camera={{ position: [7, 7, 7] }}>
        <RecoilRoot>
          <Physics>
            <MainScene />
          </Physics>
          <Stats />
        </RecoilRoot>
      </Canvas>
    </>
  );
}

export default Scene1;
