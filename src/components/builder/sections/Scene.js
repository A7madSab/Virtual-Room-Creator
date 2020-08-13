import React, { createRef, Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { connect } from "react-redux"

import OrbitControl from "../three-fiber/OrbitControl.js";
import Geometry from "../three-fiber/Geometry.js";
import Light from "../three-fiber/Light.js";
import Model from "../three-fiber/Model";
import TextGeometry from "../three-fiber/TextGeometry.js";
import VrButtom from "../three-fiber/VrButton.js";
import GridHelper from "../three-fiber/GridHelper.js";
import Plane from "../three-fiber/Plane.js";
import SkyBox from "../three-fiber/SkyBox.js";

function Scene({ meshReducer, lightReducer, sceneReducer, asViewer }, props) {
    const orbitRef = createRef();
    return (
        <Canvas
            vr={true}
            camera={{
                fov: 80,
                aspect: window.innerWidth / window.innerHeight,
                near: 0.1,
                far: 500,
                position: [0, 10, 15]
            }}
        >
            <OrbitControl ref={orbitRef} />
            {asViewer && <VrButtom />}
            <SkyBox />
            <Plane
                visible={sceneReducer.planeHelper.visible}
                width={sceneReducer.planeHelper.width}
                height={sceneReducer.planeHelper.height}
                color={sceneReducer.planeHelper.color}
            />
            <GridHelper
                visible={sceneReducer.gridHelper.visible}
                size={sceneReducer.gridHelper.size}
                divid={sceneReducer.gridHelper.divid}
            />


            {
                lightReducer.lights.map((light, key) => {
                    return <Light orbit={orbitRef} key={light.id} name={light.id} />
                })
            }
            {
                meshReducer.meshes.map((mesh, key) => {
                    if (mesh.type === "Poly") {
                        return (
                            <Suspense key={mesh.id} fallback={null}>
                                <Model orbit={orbitRef} key={mesh.id} name={mesh.id} url={mesh.url} murl={mesh.murl} />
                            </Suspense>
                        )
                    }
                    if (mesh.type === "Text") {
                        return (
                            <Suspense key={mesh.id} fallback={null}>
                                <TextGeometry orbit={orbitRef} key={mesh.id} name={mesh.id} text={mesh.text} />
                            </Suspense>
                        )
                    }
                    return (
                        <Geometry orbit={orbitRef} key={mesh.id} name={mesh.id} />
                    )
                })
            }
        </Canvas>
    );
}

const mapStateToProps = (state) => ({
    meshReducer: state.meshReducer,
    lightReducer: state.lightReducer,
    sceneReducer: state.sceneReducer,
});
const mapDispatchToProps = dispatch => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(Scene)
