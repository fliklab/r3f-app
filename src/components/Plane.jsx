import { usePlane } from "@react-three/cannon";


function Plane(props) {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
    return (
      <mesh ref={ref}>
        <planeBufferGeometry args={[100, 100]} />
      </mesh>
    );
}


export default Plane

  
