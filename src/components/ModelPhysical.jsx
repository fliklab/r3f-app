
import { useFrame, useLoader } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

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
        if(keyPressed.left && !keyPressed.right)
          modelRef.current.position.x -= 0.01;
        else if(keyPressed.right)
          modelRef.current.position.x += 0.01;
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