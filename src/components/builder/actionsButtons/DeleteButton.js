import React, { Fragment } from "react";
import { makeStyles, IconButton, Divider } from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';

import { connect } from "react-redux"
import { deleteMesh } from "../../../redux/actions.js";

const useStyle = makeStyles((theme) => ({
    button: {
        color: "white",
        borderRadius: 3
    },
}));

const DeleteMeshButton = ({ meshes, deleteMesh}) =>  {
    const classes = useStyle();
    return (
        <Fragment>
            <IconButton
                className={classes.button}
                aria-haspopup="true"
                onClick={() => deleteMesh(meshes.selectedMesh.id)}
            >
                <ClearIcon fontSize="large" />
            </IconButton>
            <Divider />       
        </Fragment>
                 
    );
}

const mapStateToProps = state => ({
    meshes: state.meshReducer
})

const mapDispatchToProps = dispatch => ({
    deleteMesh: (id ) => dispatch(deleteMesh(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteMeshButton)