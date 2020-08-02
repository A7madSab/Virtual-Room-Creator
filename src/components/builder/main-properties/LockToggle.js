import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import { connect } from "react-redux";
import { updateMesh } from "../../../redux/actions.js";

import {LockOutlined, LockOpenOutlined } from "@material-ui/icons";

const CustomToggle = withStyles({
    root: {
        borderColor: '#616161',
        borderRadius: 2,
        height: '35px',
        width: '50%',
        color: '#616161',
        '&$selected': {
            color: '#eeeeee',
        },
        '&:hover': {
            borderColor: 'white'
        }
    },
    selected: {}
})((props)=> <ToggleButton color="default" {...props} />)

const useStyles = makeStyles((theme) => ({
    toggel: {
        marginBottom: '4%',
        marginLeft: '2%',
        backgroundColor: '#424242',
        width: '48%',
    },
    
}));

const Locked = ({meshes, updateMesh}) => {
    const classes = useStyles();

    let meshLocked = meshes.selectedMesh.locked === false ? 'unLocked' : 'Locked';
    const handleLocked = (event, newLocked) => {
        updateMesh(
            meshes.selectedMesh.id,
            { ...meshes.selectedMesh, locked: newLocked === 'Locked' ? true : false}
        );
    };
    return (
        <ToggleButtonGroup
            value={meshLocked}
            exclusive
            onChange={handleLocked}
            className={classes.toggel}
        >
            <CustomToggle value="unLocked" >
                <LockOpenOutlined fontSize="small" />
            </CustomToggle>
            <CustomToggle value="Locked" >
                <LockOutlined fontSize="small" />
            </CustomToggle>
        </ToggleButtonGroup>
    );
}

const mapStateToProps = state => ({
    meshes: state.meshReducer
})
const mapDispatchToProps = dispatch => ({
    updateMesh: (id, updatedMesh) => dispatch(updateMesh(id, updatedMesh))
});
export default connect(mapStateToProps, mapDispatchToProps)(Locked)