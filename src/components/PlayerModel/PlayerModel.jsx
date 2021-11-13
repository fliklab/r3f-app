import { Box, OrbitControls } from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { AnimationMixer, LoopRepeat, Mesh, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useKeyboard } from "../../hooks/useKeyboard";
import { $player } from "../../state";
import BoundingBox from "./BoundingBox";

const PlayerModel = (props) => {
  const orbitRef = useRef();
  const [animState, setAnimState] = useState(0);

  const modelRef = useRef();
  const { moveForward, moveBackward, moveLeft, moveRight } = useKeyboard();

  const { path } = props;
  const { nodes, scene, animations } = useLoader(GLTFLoader, path);

  const setPlayerPosition = useSetRecoilState($player);

  const { camera } = useThree();

  useMemo(
    () =>
      Object.values(nodes).forEach(
        (obj) =>
          obj instanceof Mesh &&
          Object.assign(obj, { castShadow: true, receiveShadow: true })
      ),
    [nodes]
  );

  let mixer;
  mixer = new AnimationMixer(scene);
  const action_idle = mixer.clipAction(animations[props.idleIndex ?? 0]);
  const action_walk = mixer.clipAction(animations[props.walkIndex ?? 1]);
  if (animations.length > 0) {
    mixer.stopAllAction();
  }

  useFrame((scene, delta) => {
    if (moveForward | moveBackward | moveLeft | moveRight) {
      setAnimState(1); // 1 : walk
    } else setAnimState(0); // 0: idle
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
      .multiplyScalar(0.1)
      .applyEuler(camera.rotation);

    setPlayerPosition((pos) => {
      const newPosition = [
        pos.position[0] + direction.x,
        1,
        pos.position[2] + direction.z,
      ];
      const camRotation = camera.rotation.toArray();
      console.log(camRotation);
      camera.position.copy(
        new Vector3(
          newPosition[0] + 10 * Math.sin(camRotation[1]),
          3,
          newPosition[2] + 10 * Math.cos(camRotation[1])
        )
      );
      orbitRef.current.target = new Vector3(
        newPosition[0],
        camera.position.y,
        newPosition[2]
      );
      orbitRef.current.update();
      return {
        position: newPosition,
        rotation: [0, camRotation[1] + Math.PI, 0],
      };
    });
  });

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
  }, [animState, action_walk, action_idle, mixer]);

  return (
    <group ref={modelRef} up={[0, 1, 0]}>
      <OrbitControls ref={orbitRef} />
      <BoundingBox visible up={[0, 0, 0]} dims={[1.5, 2, 1.5]}>
        <primitive
          object={scene}
          path={props.path}
          scale={[2, 2, 2]}
          position={[0, -1, 0]}
        />
        <boxBufferGeometry scale={[2, 2, 2]} />
      </BoundingBox>
    </group>
  );
};

export default PlayerModel;
