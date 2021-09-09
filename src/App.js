import './App.css';
// import Box from './components/Box';
import { OrbitControls, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useMemo } from 'react';

function App() {
  const [positions, colors] = useMemo(() => {
    let positions = [], colors = []
  for (let i = 0; i < 4; i++) {
    positions.push(1 - Math.random() * 2)
    positions.push(1 - Math.random() * 2)
    positions.push(1 - Math.random() * 2)
    colors.push(0);
    colors.push(0);
    colors.push(0.5);
  }
  console.log('points', positions, colors);
  return [new Float32Array(positions), new Float32Array(colors)]
  }, [])


  return (
    <>
      <Canvas>
        {/* <ambientLight />
          <pointLight position={[0, 2, 0]} color='red' power={20}/>
          <pointLight position={[0.5, 2, 0]} color='blue' power={20}/>
          <pointLight position={[0, 3, 0]} color='pink' power={20}/>
        <pointLight position={[10, 10, 10]} /> */}
        <OrbitControls />
        <line>
          <bufferGeometry attach="geometry">
            <bufferAttribute
              attachObject={["attributes", "position"]}
              count={positions.length / 3}
              array={positions}
              itemSize={3} />
            <bufferAttribute
              attachObject={["attributes", "color"]}
              count={colors.length / 3}
              array={colors}
              itemSize={3} />
          </bufferGeometry>
          <lineBasicMaterial
            attach="material"
            sizeAttenuation={false}
            lineWidth={50}
            color={[1,0.5,0.5]}
            linecap={'round'} linejoin={'round'}
          />
        </line>
        <points>
          <bufferGeometry attach="geometry">
            <bufferAttribute
              attachObject={["attributes", "position"]}
              count={positions.length / 3}
              array={positions}
              itemSize={3} />
            <bufferAttribute
              attachObject={["attributes", "color"]}
              count={colors.length / 3}
              array={colors}
              itemSize={3} />
          </bufferGeometry>
          <pointsMaterial
            attach="material"
            vertexColors
            size={20}
            sizeAttenuation={false}
          />
        </points>
        <Stats />
        <axesHelper />

      </Canvas>
    </>
  );
}

export default App;
