import React from "react"
import { extend, useThree } from "react-three-fiber"

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
extend({ OrbitControls })

const OrbitControl = React.forwardRef((props, ref) => {
    const { camera, gl } = useThree()
    return (<orbitControls {...props} ref={ref} args={[camera, gl.domElement]} />)
})

export default OrbitControl