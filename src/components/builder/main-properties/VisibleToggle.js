import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import { connect } from "react-redux";
import { updateMesh } from "../../../redux/actions.js";

import { VisibilityOffOutlined, VisibilityOutlined } from "@material-ui/icons";

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
})((props) => <ToggleButton color="default" {...props} />)

const useStyles = makeStyles((theme) => ({
    toggel: {
        marginBottom: '4%',
        backgroundColor: '#424242',
        width: '50%',
    },

}));

const Visible = ({ meshes, updateMesh }) => {
    const classes = useStyles();

    let meshVisible = meshes.selectedMesh.visible === true ? 'visible' : 'unVisible';
    const handelVisible = (event, newVisible) => {
        if (newVisible !== null) {
            updateMesh(
                meshes.selectedMesh.id,
                { ...meshes.selectedMesh, visible: newVisible === 'visible' ? true : false}
            );
        }
    };
    return (
        <ToggleButtonGroup
            value={meshVisible}
            exclusive
            onChange={handelVisible}
            className={classes.toggel}
        >
            <CustomToggle value="visible">
                <VisibilityOutlined fontSize="small" />
            </CustomToggle>
            <CustomToggle value="unVisible">
                <VisibilityOffOutlined fontSize="small" />
            </CustomToggle>
        </ToggleButtonGroup>
    );
}

const mapStateToProps = state => ({
    meshes: state.meshReducer
});
const mapDispatchToProps = dispatch => ({
    updateMesh: (id, updatedMesh) => dispatch(updateMesh(id, updatedMesh))
});
export default connect(mapStateToProps, mapDispatchToProps)(Visible);