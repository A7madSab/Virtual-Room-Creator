import React, { useRef, useMemo } from "react"
import { useResource, useFrame } from "react-three-fiber"
import * as THREE from "three"

import TransformControl from "./TransformControl.js"

import store from "../../../redux/store.js"
import { selectMesh } from "../../../redux/actions"

const Geometry = (props) => {
    const [ref, mesh] = useResource()
    const boxHelperRef = useRef()


    let hovered = store.getState().meshReducer.selectedMesh.id === props.name ? true : false
    let state = store.getState().meshReducer.meshes.find(({ id }) => id === props.name)

    let boxGeometry = state.type === "Box-Geometry" ? true : false;
    let dodecahedronGeometry = state.type === "Dodecahedron-Geometry" ? true : false;
    let coneGeometry = state.type === "Cone-Geometry" ? true : false;
    let cylinderGeometry = state.type === "Cylinder-Geometry" ? true : false;

    let basicMaterial = state.material === "Basic" ? true : false
    let normalMaterial = state.material === "Normal" ? true : false
    let phongMaterial = state.material === "Phong" ? true : false
    let textureMaterial = state.material === "Texture" ? true : false

    const texture = useMemo(() => new THREE.TextureLoader().load(state.texture), [state.texture])

    useFrame(() => {
        if (boxHelperRef.current) {
            boxHelperRef.current.update();
        }
    })
    return (
        <>
            <mesh
                scale={[state.scale, state.scale, state.scale,]}
                ref={ref}
                visible={state.visible}
                position={state.position}
                onClick={() => store.dispatch(selectMesh(props.name, "MESH"))}
                castShadow={state.castShadow}
                receiveShadow={state.receiveShadow}
                {...props}
            >
                {boxGeometry && <boxGeometry attach="geometry" args={state.dimensions} />}
                {dodecahedronGeometry && <dodecahedronBufferGeometry attach="geometry" args={[2, 5]} />}
                {coneGeometry && <coneGeometry attach="geometry" args={[2, 5, 32]} />}
                {cylinderGeometry && <cylinderGeometry attach="geometry" args={[2, 2, 5, 32]} />}


                {normalMaterial && <meshNormalMaterial attach="material" />}
                {basicMaterial && <meshBasicMaterial attach="material" color={state.color} />}
                {phongMaterial && <meshPhongMaterial attach="material" color={state.color} />}
                {textureMaterial && <meshLambertMaterial attach="material" map={texture} side={THREE.DoubleSide} />}
            </mesh>

            {hovered ? mesh && !state.locked && <TransformControl orbit={props.orbit} mesh={mesh} /> : null}
            {hovered ? mesh && <boxHelper args={[mesh, 0xffff00]} ref={boxHelperRef} /> : null}
        </>
    )
}
export default Geometry