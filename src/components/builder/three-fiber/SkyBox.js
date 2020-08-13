import React, { useMemo } from "react"
import * as THREE from "three"
import store from "../../../redux/store.js"

const SkyBox = () => {
    const image = store.getState().sceneReducer.skybox.selectedSkybox
    const texture = useMemo(() => new THREE.TextureLoader().load(image), [image])
    
    if (!image) return null

    return (
        <mesh scale={[45, 45, 45]}>
            <sphereGeometry attach="geometry" args={[5, 32, 32]} />
            <meshBasicMaterial attach="material" map={texture} side={THREE.DoubleSide} />
        </mesh>
    )
}

export default SkyBox