import React from 'react';
import { CirclePicker } from 'react-color';
import { Paper, makeStyles, Divider } from '@material-ui/core';

import { connect } from "react-redux";
import { updateLight } from "../../../redux/actions.js";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '3%',
        paddingTop: '3%',
        backgroundColor: '#424242',
        maxWidth: '100%',
    }
}))

const LightColor = ({ lights, updateLight }) => {
    const classes = useStyles();

    const handelColor = (newcolor, event) => {
        if (newcolor !== null) {
            updateLight(
                lights.selectedLight.id,
                { ...lights.selectedLight, color: newcolor.hex }
            );
        }
    };

    const myColors = [
        '#ff1744', '#b2102f', '#f50057', '#ab003c', '#d500f9', '#9500ae',
        '#651fff', '#4615b2', '#3d5afe', '#2a3eb1', '#2979ff', '#007bb2',
        '#00b0ff', '#14a37f', '#00e5ff', '#00a152', '#1de9b6', '#52b202',
        '#00e676', '#8ab200', '#76ff03', '#b2a300', '#c6ff00', '#b28900',
        '#ffea00', '#b26500', '#ffc400', '#b22a00', '#ff3d00',
        '#f5f5f5', '#e0e0e0', '#9e9e9e',
        '#616161', '#263238', '#212121',
        
    ];

    return (
        <>
        <Paper className={classes.root} elevation={0} >
            <CirclePicker
                colors={myColors}
                circleSpacing={7}
                circleSize={32}
                width='100%'
                onChange={handelColor}
            />
        </Paper>
        <Divider />
        </>
    );
}

const mapStateToProps = state => ({
    lights: state.lightReducer
});
const mapDispatchToProps = dispatch => ({
    updateLight: (id, updatedLight) => dispatch(updateLight(id, updatedLight))
});
export default connect(mapStateToProps, mapDispatchToProps)(LightColor);
