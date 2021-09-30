
import { useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three'


const Model = props => {
    const modelRef = useRef();
    useFrame(() => {
        if(modelRef.current != null){
          // modelRef.current.rotation.y += 0.003
        }
      })
    const { path, ...props_ } = props;
    const model = useLoader(
            GLTFLoader,
            path
    )
  let mixer;
  if (model.animations.length > 0) {
    mixer = new THREE.AnimationMixer(model.scene);
    // model.animations.forEach((clip, index) => {
    //   const action = mixer.clipAction(clip)
    //   action.play();
    //   console.log(`clip ${index}`, clip)
    // })
    const action = mixer.clipAction(model.animations[1]);
    action.play();
  }
  useFrame((scene, delta) => {mixer.update(delta)})
  console.log(model);

  return <primitive ref={modelRef} object={model.scene} {...props_} />;
}

export default Model