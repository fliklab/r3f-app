
import { useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = props => {
    const modelRef = useRef();
    useFrame(() => {
        if(modelRef.current != null){
          modelRef.current.rotation.y += 0.003
        }
      })
    const { path, ...props_ } = props;
    const model = useLoader(
            GLTFLoader,
            path
        )
    console.log(model);
    return <primitive ref={modelRef} object={model.scene} {...props_} />;
}

export default Model