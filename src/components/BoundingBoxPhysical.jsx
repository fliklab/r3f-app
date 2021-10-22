import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { useRecoilValue } from "recoil";
import { $player } from "../state";

const BoundingBoxPhysical = ({
  position = [0, 0, 0],
  offset = [0, 0, 0],
  dims = [1, 1, 1],
  visible = false,
  children,
}) => {
  const [ref, api] = useBox(() => ({ mass: 1, args: dims, position }));
  const {position:pPosition, rotation} = useRecoilValue($player);


  useFrame(({ clock }) => {
    api.position.set(
      pPosition[0],pPosition[1],pPosition[2]
    );
    api.rotation.set(
      rotation[0], rotation[1], rotation[2]
    );
  });
  


  return (
    <group ref={ref} api={api}>
      <mesh scale={dims} visible={visible}>
        <boxBufferGeometry />
        <meshPhysicalMaterial wireframe />
      </mesh>
      <group position={offset}>{children}</group>
    </group>
  );
};

export default BoundingBoxPhysical;
