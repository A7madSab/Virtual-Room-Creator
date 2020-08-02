import React from 'react';
import { CirclePicker } from 'react-color';
import { Paper, makeStyles } from '@material-ui/core';

import { connect } from "react-redux";
import { updateMesh } from "../../../redux/actions.js";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '3%',
        paddingTop: '3%',
        backgroundColor: '#424242',
        maxWidth: '100%',
    }
}))

const ColorCollection = ({ meshes, updateMesh }) => {
    const classes = useStyles();

    const handelColor = (newcolor, event) => {
        if (newcolor !== null) {
            updateMesh(
                meshes.selectedMesh.id,
                { ...meshes.selectedMesh, color: newcolor.hex }
            );
        }
    };

    const myColors = [
        '#ff1744', '#f50057', '#d500f9',
        '#651fff', '#3d5afe', '#2979ff',
        '#00b0ff', '#00e5ff', '#1de9b6',
        '#00e676', '#76ff03', '#c6ff00',
        '#ffea00', '#ffc400', '#ff9100',
        '#ff3d00', '#fafafa'
    ];

    return (
        <Paper className={classes.root} elevation={0} >
            <CirclePicker
                colors={myColors}
                circleSpacing={6}
                circleSize={30}
                width='100%'
                onChange={handelColor}
            />
        </Paper>
    );
}

const mapStateToProps = state => ({
    meshes: state.meshReducer
});
const mapDispatchToProps = dispatch => ({
    updateMesh: (id, updatedMesh) => dispatch(updateMesh(id, updatedMesh))
});
export default connect(mapStateToProps, mapDispatchToProps)(ColorCollection);
