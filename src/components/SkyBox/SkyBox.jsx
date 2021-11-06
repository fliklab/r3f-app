import React, { Suspense, useEffect } from "react";
import { useThree , Canvas} from "@react-three/fiber";
import * as THREE from "three";
// import { DoubleSide } from "three";

// function Thing() {
//   const ref = useRef<typeof Box>();
//   useFrame(
//     () =>
//       ref.current && (ref.current.rotation.x = ref.current.rotation.y += 0.01)
//   );
//   return (
//     <Box
//       ref={ref}
//       args={[1, 1, 1]}
//       onClick={(e) => console.log("click")}
//       onPointerOver={(e) => console.log("hover")}
//       onPointerOut={(e) => console.log("unhover")}
//     >
//       <meshNormalMaterial attach="material" />
//     </Box>
//   );
// }

// const path = "/assets/city-sky/";
// const images = ['back','front',  'top', 'bottom',  'left', 'right',]

// const images = ["nx1.jpg", "px2.png","ny1.jpg","py2.jpg","pz2.png","nz1.png" ,];

const path = "/assets/skyboxes/city/";
const images = ["px.png","nx.png", "py.png","ny.png","nz.png","pz.png"];

// const ext = ".png";

const imagePaths = images.map((img) => path + img );

// function Planet() {
//   const { scene, scenes, animations, cameras, asset, materials } = useLoader(
//     GLTFLoader,
//     "./Earth/CHAHIN_EARTH.gltf"
//   );

//   const ref = useRef();

//   useFrame(() => ref.current && (ref.current.rotation.y += 0.01));

//   return <primitive ref={ref} object={scene} />;
// }

const useSkybox = (paths) => {
  const { scene } = useThree();

  useEffect(() => {
    const loader = new THREE.CubeTextureLoader();
    const mat = loader.load(paths);
    scene.background = mat;
    scene.environment = mat;
  }, [paths, scene.background, scene]);

  return null;
};

export function Scene() {
  useSkybox(imagePaths);

  return (
    <>
      {/* <ambientLight />
      <pointLight ref={light} args={[2, 2, 2]} /> */}
      {/* <Text fontSize={1}>spaceyboi</Text> */}
      {/* <Dodecahedron args={[10]}> */}
        {/* <meshPhysicalMaterial
          color="white"
          metalness={0.99}
          roughness={0.012}
          transparency={0.5}
          refractionRatio={0.82}
          transparent
          side={DoubleSide}
        /> */}
      {/* </Dodecahedron> */}
      {/* <Planet /> */}
    </>
  );
}

export function SkyBoxApp() {
  return (
    <Canvas style={{ background: "black" }}>
      <Suspense fallback={null}>
        <Scene />
        {/* <Effects /> */}
      </Suspense>
    </Canvas>
  );
}
