import { useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const PlaneModel = (props) => {
  const modelRef = useRef();
  const model = useLoader(GLTFLoader, props.path);

  return (
    <mesh
      ref={modelRef}
      rotation={[Math.PI / 2, 0, 0]}
    >
      {/* <meshPhysicalMaterial wireframe /> */}
      <primitive
        object={model.scene}
        scale={[1.5, 1.5, 1.5]}
        position={props.position}
      />
         </mesh>
  );
};

export default PlaneModel;
