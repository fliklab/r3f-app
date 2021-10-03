import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import BoundingBoxPhysical from "./BoundingBoxPhysical";
import { findAllByTestId } from "@testing-library/dom";

const Model = (props) => {
  const modelRef = useRef();
  // const xRef = useRef(0);
  const [moving, setMoving] = useState();

  const { path } = props;
  const model = useLoader(GLTFLoader, path);


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
    mixer.update(delta);
  });
  // console.log(model);

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
    <group resadf={modelRef}>
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
        ;
      </BoundingBoxPhysical>
    </group>
  );
};

export default Model;
