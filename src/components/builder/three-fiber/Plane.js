import React from "react"

const Plane = (props) => {
    return (
        <>
            <mesh castShadow={true} receiveShadow={true} rotation={[-1.571, 0, 0]} visible={props.visible}>
                <planeBufferGeometry attach="geometry" args={[props.width, props.height]} />
                <meshPhongMaterial attach="material" color={props.color} />
            </mesh>
        </>
    )
}
export default Plane