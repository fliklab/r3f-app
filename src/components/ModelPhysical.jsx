
import { useFrame, useLoader } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import BoundingBoxPhysical from './BoundingBoxPhysical';

const Model = props => {
  const [keyPressed, setKeyPressed] = useState({up:false, down:false, left:false, right:false})
    const modelRef = useRef();
  document.addEventListener('keydown', function (event) {
    console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
    switch (event.key) {
      case 'w':
          setKeyPressed(keyPressed => {return {...keyPressed, up: true}});
          break;
      case 's':
        setKeyPressed(keyPressed => { return { ...keyPressed, down: true } });
        break;
      case 'a':
        setKeyPressed(keyPressed => { return { ...keyPressed, left: true } });
        break;
      case 'd':
        setKeyPressed(keyPressed => { return { ...keyPressed, right: true } });
        break;
      default:
        break;
    }
    });
    document.addEventListener('keyup', function (event) {
      console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed up`);
      switch (event.key) {
        case 'w':
            setKeyPressed(keyPressed => {return {...keyPressed, up: false}});
            break;
        case 's':
          setKeyPressed(keyPressed => { return { ...keyPressed, down: false } });
          break;
        case 'a':
          setKeyPressed(keyPressed => { return { ...keyPressed, left: false } });
          break;
        case 'd':
          setKeyPressed(keyPressed => { return { ...keyPressed, right: false } });
          break;
        default:
          break;
      }
    });  
  
    useFrame(() => {
      if (modelRef.current != null ) {
        if (keyPressed.left && !keyPressed.right)
          modelRef.current.position.set(modelRef.current.position.x - 0.06, modelRef.current.position.y, modelRef.current.position.z);
        else if(keyPressed.right)
          modelRef.current.position.set(modelRef.current.position.x + 0.06, modelRef.current.position.y, modelRef.current.position.z);
      }
        if(keyPressed.up && !keyPressed.down)
          modelRef.current.position.z -= 0.06;
        else if(keyPressed.down)
          modelRef.current.position.z += 0.06;
    })
  
    //  const { path, ...props_ } = props;
    const model = useLoader(
            GLTFLoader,
            "assets/Dwarf Idle/Dwarf Idle.gltf"
        )
    console.log(model);
  return (
    <group ref={modelRef}>
       <BoundingBoxPhysical visible position={[-1, 2, 0]} dims={[0.8, 4, 0.8]} rotation={[0.3, 0, 0]} >
        <primitive object={model.scene} path="assets/Dwarf Idle/Dwarf Idle.gltf" scale={[2,2,2]} position={[0,-2,0]} />;
       </BoundingBoxPhysical>
    </group>
  )  
}

export default Model