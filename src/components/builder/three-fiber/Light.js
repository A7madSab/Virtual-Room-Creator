import React, {useRef} from "react";
import { useResource, useFrame } from "react-three-fiber";

import TransformControl from "./TransformControl.js"
import store from "../../../redux/store.js"
import { selectLight } from "../../../redux/actions.js";

const Light = (props) => {
    const [ref, light] = useResource();
    const lightHelperRef = useRef()

    let hovered = store.getState().lightReducer.selectedLight.id === props.name ? true : false
    let state = store.getState().lightReducer.lights.find(({ id }) => id === props.name);

    let pointLight = state.type === "Point-Light" ? true : false;
    let directionalLight = state.type === "Directional-Light" ? true : false;
    let spotLight = state.type === "Spot-Light" ? true : false;
    let ambientLight = state.type === "Ambient-Light" ? true : false;

    useFrame(() => {
        if (lightHelperRef.current) {
            lightHelperRef.current.update();
        }
    })
    return(
        <>
            { pointLight && <pointLight ref={ref} position={state.position} args={[state.color, state.intensity]}/>}
            { directionalLight && <directionalLight ref={ref} position={state.position} args={[state.color, state.intensity]}/>}
            { spotLight && <spotLight ref={ref} position={state.position} args={[state.color, state.intensity]}/>}
            { ambientLight && <ambientLight ref={ref} position={state.position} args={[state.color, state.intensity]}/>}

            {pointLight && light != null ? <pointLightHelper args={[light]} ref={lightHelperRef} onClick={() => hovered === false ? store.dispatch(selectLight(props.name, "Light")) : null}/> : null}
            {directionalLight && light != null ? <directionalLightHelper args={[light]} ref={lightHelperRef} onClick={() => hovered === false ? store.dispatch(selectLight(props.name, "Light")) : null}/> : null}
            {spotLight && light != null ? <spotLightHelper args={[light]} ref={lightHelperRef} onClick={() => hovered === false ? store.dispatch(selectLight(props.name, "Light")) : null}/> : null}
            
            {hovered ? light && <TransformControl orbit={props.orbit} light={light} /> : null}
        </>
    );
}

export default Light;