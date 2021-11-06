import React from "react";
import { useLoader } from "react-three-fiber";
import * as THREE from "three";
import { PlainAnimator } from "three-plain-animator/lib/plain-animator";

const Fire2 = ({  IconPosition, IconSize }) => {
    const spriteTexture = useLoader(THREE.TextureLoader,  'assets/fire/fire.png');
    const animator = new PlainAnimator(spriteTexture, 4, 4, 10, 10);
    const texture = animator.init();    

    const geometry =  new  THREE.PlaneGeometry(512,  512);
    const material =  new  THREE.MeshBasicMaterial({ map: texture, transparent:  true  });

    let mesh =  new  THREE.Mesh(geometry, material)

    return (
        <mesh ref={mesh} position={IconPosition}>
            <boxBufferGeometry attach="geometry" args={IconSize} />
            <meshStandardMaterial
                attach="material"
                map={texture}
                transparent={true}
            />
        </mesh>
    );
};
export default Fire2