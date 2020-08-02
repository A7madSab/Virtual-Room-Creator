import React, { useEffect, useRef } from "react"
import { extend, useThree, useFrame } from "react-three-fiber"
import { TransformControls } from "three/examples/jsm/controls/TransformControls.js"

import store from "../../../redux/store.js"
import { updateMesh } from "../../../redux/actions"

extend({ TransformControls })

function TransformControl(props) {
  const orbitRef = props.orbit
  const mesh = props.mesh
  const transformRef = useRef()
  const { camera, gl } = useThree()

  useFrame(() => orbitRef.current && orbitRef.current.update())

  useEffect(() => {
    if (transformRef.current) {
      const controls = transformRef.current
      const callback = event => {
        (orbitRef.current.enabled = !event.value)
        store.dispatch(
          updateMesh(
            store.getState().meshReducer.selectedMesh.id,
            { ...store.getState().meshReducer.selectedMesh, position: [mesh.position.x, mesh.position.y, mesh.position.z] }
        ))
      }
      controls.addEventListener("dragging-changed", callback)
      return () => controls.removeEventListener("dragging-changed", callback)
    }
  })
  return (
    <transformControls ref={transformRef} args={[camera, gl.domElement]} onUpdate={self => self.attach(mesh)} {...props} />
  )
}

export default TransformControl