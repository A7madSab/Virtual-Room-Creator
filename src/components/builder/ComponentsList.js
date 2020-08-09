import React from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';

import ComponentItem from "./ComponentItem.js";

const ComponentsList = ({meshes, lights}) => {
    return (
        <Grid container>
            {
                meshes.meshes.map((mesh, key) => {
                    if(mesh.type === "Poly")
                        return <ComponentItem key={mesh.id} component="poly" name={mesh.id} visible={mesh.visible}/>
                    else
                        return <ComponentItem key={mesh.id} component="mesh" name={mesh.id} visible={mesh.visible}/>
                })
            }
            {
                lights.lights.map((light, key) => {
                    return <ComponentItem key={light.id} component="light" name={light.id} visible={true}/>

                })
            }
        </Grid>
    );
}

const mapStateToProps = state => ({
    meshes: state.meshReducer,
    lights: state.lightReducer
})

export default connect(mapStateToProps, )(ComponentsList)

