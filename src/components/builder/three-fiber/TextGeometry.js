import React, { useMemo, useRef } from "react"
import { useLoader, useResource, useFrame } from "react-three-fiber"
import * as THREE from "three"
import TransformControl from "./TransformControl"

import store from "../../../redux/store"
import { selectMesh } from "../../../redux/actions"

const TextGeometry = ({ text, vAlign = "center", hAlign = "center", size = 1, color = "#000000", ...props }) => {
    const [ref, mesh] = useResource()
    const boxHelperRef = useRef()

    let hovered = store.getState().meshReducer.selectedMesh.id === props.name ? true : false
    let state = store.getState().meshReducer.meshes.find(({ id }) => id === props.name)

    let basicMaterial = state.material === "Basic" ? true : false
    let normalMaterial = state.material === "Normal" ? true : false
    let phongMaterial = state.material === "Phong" ? true : false
    let textureMaterial = state.material === "Texture" ? true : false

    let textSize = Number(state.size)

    const texture = useMemo(() => new THREE.TextureLoader().load(state.texture), [state.texture])

    useFrame(() => {
        if (boxHelperRef.current)
            boxHelperRef.current.update()
    })

    const font = useLoader(THREE.FontLoader, "/fonts/Roboto_Regular.json")
    const config = useMemo(
        () => ({ font, size: textSize, height: 5, curveSegments: 12, bevelEnabled: true, bevelThickness: 1, bevelSize: 2, bevelOffset: 0, bevelSegments: 3 }),
        [font, textSize]
    )

    return (
        <>
            <mesh
                scale={[state.scale * 0.1, state.scale * 0.1, state.scale * 0.1]}
                ref={ref}
                visible={state.visible}
                position={state.position}
                onClick={() => hovered === false ?  store.dispatch(selectMesh(props.name, "MESH")) : null}
                rotation={state.rotation ? [state.rotation[0], state.rotation[1], state.rotation[2]] : [0,0,0]}
                castShadow={state.castShadow}
                receiveShadow={state.receiveShadow}
                {...props}
            >
                <textGeometry attach="geometry" args={[text, config]} />

                {normalMaterial && <meshNormalMaterial attach="material" />}
                {basicMaterial && <meshBasicMaterial attach="material" color={state.color} />}
                {phongMaterial && <meshPhongMaterial attach="material" color={state.color} />}
                {textureMaterial && <meshLambertMaterial attach="material" map={texture} side={THREE.DoubleSide} />}

            </mesh>

            {hovered ? mesh && <TransformControl orbit={props.orbit} mesh={mesh} /> : null}
            {hovered ? mesh && <boxHelper args={[mesh, 0xffff00]} ref={boxHelperRef} /> : null}

        </>
    )
}

export default TextGeometry


// const mesh = useUpdate(
//     self => {
//         const size = new THREE.Vector3()
//         self.geometry.computeBoundingBox()
//         self.geometry.boundingBox.getSize(size)
//         self.position.x = hAlign === "center" ? -size.x / 2 : hAlign === "right" ? 0 : -size.x
//         self.position.y = vAlign === "center" ? -size.y / 2 : vAlign === "top" ? 0 : -size.y
//     },
//     [text]
// )
// <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
// {/* </group> */ }