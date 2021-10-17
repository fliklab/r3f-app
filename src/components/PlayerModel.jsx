import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useKeyboard } from "../hooks/useKeyboard";
import { $player } from "../state";
import BoundingBoxPhysical from "./BoundingBoxPhysical";

const PlayerModel = (props) => {
  const modelRef = useRef();
  // const xRef = useRef(0);
  const [moving, setMoving] = useState();

  const  { moveForward,
  moveBackward,
  moveLeft,
  moveRight,} = useKeyboard()

  const { path } = props;
  const model = useLoader(GLTFLoader, path);
  // const { camera } = useThree();
  const setPlayerPosition = useSetRecoilState($player);


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
  useFrame((scene, delta) => {
    // camera.position.copy(modelRef.current.position);
    mixer.update(delta);
  });
  // console.log(model);

  useFrame(({ clock }) => {
    const direction = new THREE.Vector3();

    const frontVector = new THREE.Vector3(
      0,
      0,
      - Number(moveBackward) + Number(moveForward)
    );
    const sideVector = new THREE.Vector3(Number(moveLeft) - Number(moveRight), 0, 0);

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(0.3)
      // .applyEuler(camera.rotation);
    
    if (moving) {
      setPlayerPosition(cubes => [
        cubes[0] + direction.x,
        cubes[1],
        cubes[2] + direction.z,
      ]);
    }
  }
  );

  document.addEventListener("keyup", function (event) {
    setMoving(false);
  });
  document.addEventListener("keydown", function (event) {
    setMoving(true);
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
    <group ref={modelRef} up={[0,1,0]}>
      <BoundingBoxPhysical
        visible
        up={[0, 10, 0]}
        position={[0, 0, 0]}
        dims={[1, 0.8, 1]}
        rotation={[0, 0, 0]}
      >
        <primitive
          object={model.scene}
          path="assets/Dwarf Idle/Dwarf Idle.gltf"
          scale={[2, 2, 2]}
          position={[0, 0, 0]}
        />
      </BoundingBoxPhysical>
    </group>
  );
};

export default PlayerModel;
