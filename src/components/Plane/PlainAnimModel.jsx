import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const PlainAnimModel = (props) => {

  const modelRef = useRef();

  const { path } = props;
  const model = useLoader(GLTFLoader, path);

  let mixer;
  mixer = new THREE.AnimationMixer(model.scene);
  const action = mixer.clipAction(model.animations[0]);
  if (model.animations.length > 0) {
    // action.time = 0;
    // mixer.stopAllAction();
    // action.fadeIn(0.5)
    action.play();
    // action.play();

    // action_idle.fadeIn(0.5);
    // action_idle.setLoop(THREE.LoopOnce);
    // action_idle.clampWhenFinished = true;
    // action_idle.play();
  }

  useFrame((scene, delta) => {
    mixer.update(delta);
  });



  return (
    <group ref={modelRef} up={[0, 1, 0]}>
        <mesh rotation={[Math.PI / 2,0, 0]} >
        <primitive
          object={model.scene}
          path={process.env.PUBLIC_URL + "/assets/Dwarf Idle/Dwarf Idle.gltf"}
          scale={[0.03,0.03,0.03]}
          position={[8, -3.8, -10]}
        />
      </mesh>
    </group>
  );
};

export default PlainAnimModel;
