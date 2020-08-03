import React from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';

import ComponentItem from "./ComponentItem.js";

const ComponentsList = ({meshes}) => {
    return (
        <Grid container>
            {
                meshes.meshes.map((mesh, key) => {
                    if(mesh.type === "poly")
                        return <ComponentItem key={key} component="poly" name={mesh.id} visible={mesh.visible}/>
                    else
                        return <ComponentItem key={key} component="mesh" name={mesh.id} visible={mesh.visible}/>
                })
            }
        </Grid>
    );
}

const mapStateToProps = state => ({
    meshes: state.meshReducer
})

export default connect(mapStateToProps, )(ComponentsList)

