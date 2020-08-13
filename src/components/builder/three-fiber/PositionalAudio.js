import React, { Suspense } from "react"
import { PositionalAudio } from "drei"

const PositionalAudio = ({ music }) => (
    <Suspense fallback={null}>
        <mesh>
            {/* <boxBufferGeometry attach="geometry" /> */}
            {/* <meshBasicMaterial attach="material" color="hotpink" /> */}
            <PositionalAudio
                url={music}
                distance={1}
                loop
                {...props}
            />
        </mesh>
    </Suspense>
)

export default PositionalAudio