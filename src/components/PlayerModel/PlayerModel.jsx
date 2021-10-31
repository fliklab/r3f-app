import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { useSetRecoilState } from "recoil";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useKeyboard } from "../../hooks/useKeyboard";
import { $player } from "../../state";
import BoundingBox from "./BoundingBox";

const PlayerModel = (props) => {

  const modelRef = useRef();
  const {
      moveForward,
    moveBackward,
    moveLeft,
    moveRight,} = useKeyboard()

  const { path } = props;
  const model = useLoader(GLTFLoader, path);
  const setPlayerPosition = useSetRecoilState($player);
  // const playerState = useRecoilState($player);

  const {camera} = useThree();
  let mixer;
  mixer = new THREE.AnimationMixer(model.scene);
  const action_idle = mixer.clipAction(model.animations[0]);
  const action_walk = mixer.clipAction(model.animations[15]);
  const action_die = mixer.clipAction(model.animations[1]);
  if (model.animations.length > 0) {
    // action.time = 0;
    mixer.stopAllAction();
    // action.fadeIn(0.5)
    // action.play();
    // action.play();
  }
  // const { messages, sendMessage } = useChat();

  useFrame((scene, delta) => {
    mixer.update(delta);
  });

  useFrame(({ clock }) => {
    const direction = new THREE.Vector3();
    const frontVector = new THREE.Vector3(
      0,
      0,
      Number(moveBackward) - Number(moveForward)
    );
    const sideVector = new THREE.Vector3(Number(moveLeft) - Number(moveRight), 0, 0);
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

  document.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "x":
        action_die.time = 0;
        mixer.stopAllAction();
        action_die.fadeIn(0.5);
        action_die.setLoop(THREE.LoopOnce);
        action_die.clampWhenFinished = true;
        action_die.play();
        break;
      case "w":
        mixer.stopAllAction();
        action_walk.play();
        break;
      case "a":
        action_idle.fadeIn(0.5);
        mixer.stopAllAction();
        action_idle.play();
        break;
      case "d":
        break;
      default:
        break;
    }
  });


  return (
    <group ref={modelRef} up={[0, 1, 0]}>
      <BoundingBox
        visible
        up={[0, 0, 0]}
        position={[0, 2.4, 0]}
        dims={[1.5, 2, 1.5]}
        rotation={[0, 0, 0]}
      >
        <primitive
          object={model.scene}
          path={process.env.PUBLIC_URL + "/assets/Dwarf Idle/Dwarf Idle.gltf"}
          scale={[2, 2, 2]}
          position={[0, -1, 0]}
        />
      </BoundingBox>
    </group>
  );
};

export default PlayerModel;
