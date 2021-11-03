import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { useSetRecoilState } from "recoil";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useKeyboard } from "../../hooks/useKeyboard";
import { $player } from "../../state";

const PlayerSimpleModel = (props) => {

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
  const action = mixer.clipAction(model.animations[0]);
  if (model.animations.length > 0) {
    // action.time = 0;
    mixer.stopAllAction();
    // action.fadeIn(0.5)
   action.play();
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


  return (
    <group ref={modelRef} up={[0, 1, 0]}>
        <primitive
          object={model.scene}
          path={props.path}
          up={[0, 0, 0]}
          rotation={[-Math.PI/2, 0, 0]}
          scale={[2, 2, 2]}
          position={[0, 1.4, 0]}
        />
    </group>
  );
};

export default PlayerSimpleModel;
