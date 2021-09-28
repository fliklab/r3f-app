import { useBox } from '@react-three/cannon';

const BoundingBoxPhysical = ({
    position = [0,0,0],
    offset = [0,0,0],
    dims = [1,1,1],
    visible = false,
    children,
}) => {
    const usedBox = useBox(() => ({ mass: 1, args: dims, position }));
    const [ref, api] = usedBox;

    document.addEventListener('keydown', function (event) {
        switch (event.key) {
            case 'w':
                api.position.set(0, 1, 0);
                console.log('usedBox',api)
                break;
          case 's':
            api.position.set(1, 0, 0);
            break;
          case 'a':
            api.position.set(0, 0, 1);
            break;
          case 'd':
            api.position.set(-1, 0, 0);
            break;
          default:
            break;
        }
        });

    return (
        <group ref={ref} api={api}>
            <mesh scale={dims} visible={visible}>
                <boxBufferGeometry/>
                <meshPhysicalMaterial wireframe/>
            </mesh>
            <group position={offset}>
                {children}
            </group>
    </group>
    )
    
}

 export default BoundingBoxPhysical;