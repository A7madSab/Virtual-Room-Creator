import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Typography } from '@material-ui/core';

import { connect } from "react-redux";
import { updateMesh } from "../../../redux/actions.js";

const CustomToggel = withStyles({
    root: {
        borderColor: '#616161',
        borderRadius: 2,
        height: '35px',
        width: '33.333%',
        textTransform: 'none',
        color: '#616161',
        '&$selected': {
            color: '#eeeeee'
        },
        '&:hover': {
            borderColor: 'white'
        }
    },
    selected: {},
})((props) => <ToggleButton color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
    toggel: {
        marginBottom: '3%',
        marginTop: '2%',
        borderColor: '#757575',
        backgroundColor: '#424242',
        width: '100%',
    },
}));

const MaterialType = ({meshes, updateMesh}) => {
    const classes = useStyles();

    let meshMaterial = "Normal";
    if(meshes.selectedMesh.material != null)
        meshMaterial = meshes.selectedMesh.material;

    const handelMaterial = (event, newMaterial) => {
        if (newMaterial !== null) {
            updateMesh(
                meshes.selectedMesh.id,
                { ...meshes.selectedMesh, material: newMaterial}
            );
        }
    };

    return (
        <ToggleButtonGroup value={meshMaterial} exclusive onChange={handelMaterial}
            className={classes.toggel}
        >
            <CustomToggel value="Normal">
                <Typography>Normal</Typography>
            </CustomToggel>
            <CustomToggel value="Phong">
                <Typography>Phong</Typography>
            </CustomToggel>
            <CustomToggel value="Basic">
                <Typography>Basic</Typography>
            </CustomToggel>
        </ToggleButtonGroup>
    );
}

const mapStateToProps = state => ({
    meshes: state.meshReducer
});
const mapDispatchToProps = dispatch => ({
    updateMesh: (id, updatedMesh) => dispatch(updateMesh(id, updatedMesh))
});
export default connect(mapStateToProps, mapDispatchToProps)(MaterialType);