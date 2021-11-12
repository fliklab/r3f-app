import { usePlane } from "@react-three/cannon";
import { PUBLIC_ENV_URL } from "../../config";
import PlaneModel from "./PlaneModel";


function Plane(props) {
    const [ref] = usePlane(() => ({ rotation: [- Math.PI / 2, 0, 0], ...props }));

    return (
      <mesh ref={ref} receiveShadow >
        <PlaneModel path={PUBLIC_ENV_URL + "/assets/map2/BASKETBALL/BASKETBALL.gltf"} position={[15,-24,13]}/>
        <PlaneModel path={PUBLIC_ENV_URL + "/assets/map2/BASE2/BASE.gltf"} position={[15,-24,13]}/>
        <PlaneModel path={PUBLIC_ENV_URL + "/assets/map2/TEST/test.gltf"} position={[15,-24,13]}/>
        {/* <PlainAnimModel path="/assets/water/ocean_wave_test.gltf"/> */}
        {/* <planeBufferGeometry args={[100, 100]} /> */}
      </mesh>
    );
}


export default Plane

  
