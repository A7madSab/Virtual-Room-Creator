import React, { useState } from 'react';
import { CirclePicker } from 'react-color';
import {Paper, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '3%',
        paddingTop: '3%',
        backgroundColor: '#424242',
        maxWidth: '100%',
    }
}))

export default function ColorCollection() {
    const classes = useStyles();
    const [, setColor] = useState('#ff1744');
    
    const handelSelectColor = (color, event) => {
        if(color !== null) {
            setColor(color.hex);
        }
    }
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
                onChange={handelSelectColor}
            />
        </Paper>
    );
}
