import { Physics, useBox, usePlane } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import "./App.css";

function Plane(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh ref={ref}>
      <planeBufferGeometry args={[100, 100]} />
    </mesh>
  );
}

function Cube(props) {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], ...props }));
  return (
    <mesh ref={ref}>
      <boxBufferGeometry />
      <meshPhysicalMaterial/>
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      {/* <ambientLight /> */}
      <Physics>
        <pointLight position={[0, 2, 0]} color="red" power={20} />
        <pointLight position={[0.5, 2, 0]} color="blue" power={20} />
        <pointLight position={[0, 3, 0]} color="pink" power={20} />
        <pointLight position={[10, 10, 10]} />
        <Cube position={[0.2, 2, 0]} rotation={[0, 0, 0]} />
        <Cube position={[0.1, 5, 0]} rotation={[0.11, 0.1, 0]} />
        <Cube position={[-0.40, 7, 0]} rotation={[0.2, 0.1, 0]} />
        <Cube position={[-0.1, 9, 0]} rotation={[0, 0.1, 0]} />
        <Plane />
      </Physics>
    </Canvas>
  );
}

export default App;
