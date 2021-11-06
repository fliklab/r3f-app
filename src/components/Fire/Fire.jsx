import { useTexture } from "@react-three/drei"
import { Suspense } from "react"

function Fire(props) {
  const colorMap = useTexture('assets/fire/fire.png')

    return (
      <Suspense fallback={null} >
        <sprite scale={2} {...props}>
          <spriteMaterial map={colorMap} alphaMap={colorMap}/>
        </sprite>
      </Suspense>
    )
}
  
export default Fire