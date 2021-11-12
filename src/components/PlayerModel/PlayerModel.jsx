import { OrbitControls } from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { AnimationMixer, LoopRepeat, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useKeyboard } from "../../hooks/useKeyboard";
import { $player } from "../../state";
import BoundingBox from "./BoundingBox";

const PlayerModel = (props) => {
  const [animState, setAnimState] = useState(0);

  const modelRef = useRef();
  const {
    moveForward,
    moveBackward,
    moveLeft,
    moveRight,} = useKeyboard()

  const { path } = props;
  const model = useLoader(GLTFLoader, path);

  const setPlayerPosition = useSetRecoilState($player);

  const { camera } = useThree();
  
  let mixer;
  mixer = new AnimationMixer(model.scene);
  const action_idle = mixer.clipAction(model.animations[props.idleIndex ?? 0]);
  const action_walk = mixer.clipAction(model.animations[props.walkIndex ?? 1]);
  if (model.animations.length > 0) {
    mixer.stopAllAction();
  }

  useFrame((scene, delta) => {
    if (moveForward | moveBackward | moveLeft | moveRight) {
      setAnimState(1) // 1 : walk
    }
    else setAnimState(0) // 0: idle
    mixer.update(delta);
  });

  useFrame(({ clock }) => {
    const direction = new Vector3();
    const frontVector = new Vector3(
      0,
      0,
      Number(moveBackward) - Number(moveForward)
    );
    const sideVector = new Vector3(Number(moveLeft) - Number(moveRight), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(0.07)
      .applyEuler(camera.rotation);
    
      setPlayerPosition(pos => {
        const newPosition = [
          pos.position[0] + direction.x,
          1,
          pos.position[2] + direction.z,
        ]
        const camRotation = camera.rotation.toArray()
        return {
          position:newPosition,
          rotation: [0, (camRotation[2]+Math.PI), 0]
        }
      });
    }
  );

  useEffect(() => {
    mixer.stopAllAction();
    switch (animState) {
      case 1:
        action_walk.setLoop(LoopRepeat);    
        action_walk.play();
        break;
      default:
        action_idle.setLoop(LoopRepeat);
        action_idle.play();
      break;
    }
}, [animState,action_walk,action_idle, mixer])

  return (
    <group ref={modelRef} up={[0, 1, 0]}>
      <OrbitControls />
      <BoundingBox
        visible
        up={[0, 0, 0]}
        position={[0, 2.4, 0]}
        dims={[1.5, 2, 1.5]}
        rotation={[0, 0, 0]}
      >
        <primitive
          object={model.scene}
          path={props.path}
          scale={[2, 2, 2]}
          position={[0, -1, 0]}
        />
      </BoundingBox>
    </group>
  );
};

export default PlayerModel;
