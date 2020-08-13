import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';

import { connect } from 'react-redux';

import ComponentItem from "./ComponentItem.js";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      position: 'relative',
      overflow: 'auto',
      maxHeight: '80vh',
    },
}));

const ComponentsList = ({meshes, lights}) => {
    const classes = useStyles();
    return (
        <List className={classes.root}>
            {
                meshes.meshes.map((mesh, key) => {
                    if(mesh.type === "Poly")
                        return <ComponentItem key={mesh.id} component="poly" name={mesh.id} visible={mesh.visible}/>
                    else if (mesh.type === "Text")
                        return <ComponentItem key={mesh.id} component="text" name={mesh.id} visible={mesh.visible}/>
                    else
                        return <ComponentItem key={mesh.id} component="mesh" name={mesh.id} visible={mesh.visible}/>
                })
            }
            {
                lights.lights.map((light, key) => {
                    return <ComponentItem key={light.id} component="light" name={light.id} visible={true}/>

                })
            }
       </List>
    );
}

const mapStateToProps = state => ({
    meshes: state.meshReducer,
    lights: state.lightReducer
})

export default connect(mapStateToProps, )(ComponentsList)

