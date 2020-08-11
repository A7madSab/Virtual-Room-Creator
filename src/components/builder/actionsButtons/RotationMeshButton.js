import React, { Fragment } from "react";
import { makeStyles, IconButton, Divider } from "@material-ui/core";

import TextRotationNoneOutlinedIcon from '@material-ui/icons/TextRotationNoneOutlined';
import TextRotateUpOutlinedIcon from '@material-ui/icons/TextRotateUpOutlined';
import TextRotationAngleupOutlinedIcon from '@material-ui/icons/TextRotationAngleupOutlined';

import { connect } from "react-redux"
import { updateMesh } from "../../../redux/actions.js";

const useStyle = makeStyles((theme) => ({
    button: {
        color: "white",
        borderRadius: 3
    },
}));

const RotationMeshButton = ({ meshes, updateMesh}) =>  {
    const classes = useStyle();
    return (
        <Fragment>
            <IconButton
                className={classes.button}
                aria-haspopup="true"
                onClick={() => meshes.selectedMesh.rotation ? updateMesh(
                    meshes.selectedMesh.id,
                    {...meshes.selectedMesh, 
                        rotation: [
                            meshes.selectedMesh.rotation[0] + 0.1,
                            meshes.selectedMesh.rotation[1],
                            meshes.selectedMesh.rotation[2]
                        ]
                    }
                ) : null}
            >
                <TextRotationNoneOutlinedIcon fontSize="large" />
            </IconButton>
            <Divider />

            <IconButton
                className={classes.button}
                aria-haspopup="true"
                onClick={() => meshes.selectedMesh.rotation ? updateMesh(
                    meshes.selectedMesh.id,
                    {...meshes.selectedMesh, 
                        rotation: [
                            meshes.selectedMesh.rotation[0],
                            meshes.selectedMesh.rotation[1] + 0.1,
                            meshes.selectedMesh.rotation[2]
                        ]
                    }
                ) : null}
            >
                <TextRotateUpOutlinedIcon fontSize="large" />
            </IconButton>
            <Divider />

            <IconButton
                className={classes.button}
                aria-haspopup="true"
                onClick={() => meshes.selectedMesh.rotation ? updateMesh(
                    meshes.selectedMesh.id,
                    {...meshes.selectedMesh, 
                        rotation: [
                            meshes.selectedMesh.rotation[0],
                            meshes.selectedMesh.rotation[1],
                            meshes.selectedMesh.rotation[2] + 0.1
                        ]
                    }
                ) : null}
            >
                <TextRotationAngleupOutlinedIcon fontSize="large" />
            </IconButton>
            <Divider />
        </Fragment>
                 
    );
}

const mapStateToProps = state => ({
    meshes: state.meshReducer
})

const mapDispatchToProps = dispatch => ({
    updateMesh: (id, newObject) => dispatch(updateMesh(id, newObject))
})

export default connect(mapStateToProps, mapDispatchToProps)(RotationMeshButton)