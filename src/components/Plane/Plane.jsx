import { usePlane } from "@react-three/cannon";
// import PlainAnimModel from "./PlainAnimModel";
import PlaneModel from "./PlaneModel";


function Plane(props) {
    const [ref] = usePlane(() => ({ rotation: [- Math.PI / 2, 0, 0], ...props }));
    return (
      <mesh ref={ref}>
        <PlaneModel path="/assets/map2/BASKETBALL/BASKETBALL.gltf" position={[15,-24,13]}/>
        <PlaneModel path="/assets/map2/BASE2/BASE.gltf" position={[15,-24,13]}/>
        <PlaneModel path="/assets/map2/TEST/TEST.gltf" position={[15,-24,13]}/>
        {/* <PlainAnimModel path="/assets/water/ocean_wave_test.gltf"/> */}
        {/* <planeBufferGeometry args={[100, 100]} /> */}
      </mesh>
    );
}


export default Plane

  
