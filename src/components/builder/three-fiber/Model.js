import React, { useState, useMemo, useRef } from "react"
import { useResource, useFrame } from "react-three-fiber"
import TransformControl from "./TransformControl"
import store from "../../../redux/store"
import { selectMesh } from "../../../redux/actions"

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"

const ObjModel = (props) => {
    const [ref, mesh] = useResource()
    const boxHelperRef = useRef()

    let hovered = store.getState().meshReducer.selectedMesh.id === props.name ? true : false
    let state = store.getState().meshReducer.meshes.find(({ id }) => id === props.name)
    const [obj, set] = useState()

    useFrame(() => {
        if (boxHelperRef.current) boxHelperRef.current.update()
    })

    useMemo(() => {
        new MTLLoader().load(props.murl, function (material) {
            material.preload()
            new OBJLoader().setMaterials(material).load(props.url, (model) => {
                model.children = model?.children.map(mesh => {
                    mesh.castShadow = true
                    return mesh
                })
                console.log("modelmodelmodelmodel", typeof model, model)
                set(model)
            })
        })
    }, [props.url, props.murl,])

    return obj
        ? (
            <>
                <primitive
                    rotation={state.rotation ? [state.rotation[0], state.rotation[1], state.rotation[2]] : [0, 0, 0]}
                    scale={[state.scale, state.scale, state.scale]}
                    ref={ref}
                    position={state.position}
                    onClick={() => store.dispatch(selectMesh(props.name, "MESH"))}
                    object={obj}
                    castShadow={true}
                    receiveShadow={true}
                />
                {hovered ? mesh && <TransformControl orbit={props.orbit} mesh={mesh} /> : null}
                {hovered ? mesh && <boxHelper args={[mesh, 0xffff00]} ref={boxHelperRef} /> : null}
            </>
        )
        : null
}

export default ObjModel