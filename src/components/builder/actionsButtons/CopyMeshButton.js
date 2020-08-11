import React, { Fragment } from "react";
import { makeStyles, IconButton, Divider } from "@material-ui/core";
import FlipToFrontIcon from '@material-ui/icons/FlipToFront';

import { connect } from "react-redux"
import { copyMesh } from "../../../redux/actions.js";

const useStyle = makeStyles((theme) => ({
    button: {
        color: "white",
        borderRadius: 3
    },
}));

const CopyMeshButton = ({ copyMesh }) =>  {
    const classes = useStyle();
    return (
        <Fragment>
            <IconButton
                className={classes.button}
                aria-haspopup="true"
                onClick={() => copyMesh()}
            >
                <FlipToFrontIcon fontSize="large" />
            </IconButton>
            <Divider />     
        </Fragment>
                 
    );
}

const mapStateToProps = state => ({
    meshes: state.meshReducer
})

const mapDispatchToProps = dispatch => ({
    copyMesh: () => dispatch(copyMesh()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CopyMeshButton)