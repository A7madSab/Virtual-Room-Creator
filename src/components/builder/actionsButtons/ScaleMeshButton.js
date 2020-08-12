import React, { Fragment } from "react";
import { makeStyles, IconButton, Divider } from "@material-ui/core";

import ExposurePlus1OutlinedIcon from '@material-ui/icons/ExposurePlus1Outlined';
import ExposureNeg1OutlinedIcon from '@material-ui/icons/ExposureNeg1Outlined';

import { connect } from "react-redux"
import { updateMesh } from "../../../redux/actions.js";

const useStyle = makeStyles((theme) => ({
    button: {
        color: "white",
        borderRadius: 3
    },
}));

const ScaleMeshButton = ({ meshes, updateMesh}) =>  {
    const classes = useStyle();
    return (
        <Fragment>
            <IconButton
                className={classes.button}
                aria-haspopup="true"
                onClick={() => meshes.selectedMesh.scale ? updateMesh(
                    meshes.selectedMesh.id,
                    {...meshes.selectedMesh, 
                        scale: meshes.selectedMesh.scale + 0.1
                    }
                ) : null}
            >
                <ExposurePlus1OutlinedIcon fontSize="large" />
            </IconButton>
            <Divider />
            <IconButton
                className={classes.button}
                aria-haspopup="true"
                onClick={() => meshes.selectedMesh.scale ? updateMesh(
                    meshes.selectedMesh.id,
                    {...meshes.selectedMesh, 
                        scale: meshes.selectedMesh.scale - 0.1
                    }
                ) : null}
            >
                <ExposureNeg1OutlinedIcon fontSize="large" />
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

export default connect(mapStateToProps, mapDispatchToProps)(ScaleMeshButton)