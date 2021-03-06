
import { useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { PUBLIC_ENV_URL } from '../config';
import BoundingBoxPhysical from './BoundingBoxPhysical';

const Model = props => {
    const modelRef = useRef();

    const model = useLoader(
            GLTFLoader,
            PUBLIC_ENV_URL + props.path
        )
   
  return (
    <group ref={modelRef}>
       <BoundingBoxPhysical visible position={[-1, 1, 0]}>
          <primitive object={model.scene} scale={[2,2,2]} position={[0,-2,0]} />;
       </BoundingBoxPhysical>
    </group>
  )  
}

export default Model