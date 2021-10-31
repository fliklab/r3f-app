
import { useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const PlaneModel = props => {
    const modelRef = useRef();

    const model = useLoader(
            GLTFLoader,
            process.env.PUBLIC_URL + props.path
        )
   
  return (
      <group ref={modelRef}  >
        <mesh rotation={[Math.PI / 2,0, 0]} >
            {/* <meshPhysicalMaterial wireframe /> */}
            <primitive object={model.scene} scale={[1.5,1.5,1.5]} position={props.position} />;
         </mesh>
    </group>
  )  
}

export default PlaneModel