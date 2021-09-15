import { useBox } from "@react-three/cannon";

function CubePhysical(props) {
    const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], ...props }));
    return (
      <mesh ref={ref}>
        <boxBufferGeometry />
        <meshPhysicalMaterial/>
      </mesh>
    );
}
  
export default CubePhysical;