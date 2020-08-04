import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Divider, Button, Typography } from '@material-ui/core';
import { Category, VisibilityOutlined,VisibilityOffOutlined, WbSunnyOutlined, ThreeDRotationOutlined, TextFieldsOutlined } from "@material-ui/icons"

import store from "../../redux/store.js";
import {selectMesh, selectLight } from "../../redux/actions.js";

const useStyles = makeStyles((theme) => ({
    item: {
        display: 'flex',
        justifyContent: 'start',
        width: '98%',
        backgroundColor: '#424242',
        borderColor: '#616161',
        color: '#fafafa',
        margin: '1%',
        padding: '4%',
        paddingRight: '1%',
        textTransform: 'none'
    },
    icon: {
        marginRight: '2%',
        width: '10%'
    },
    content: {
        paddingLeft: '3%',
        width: '70%',
        textAlign: 'left'
    },
    visible: {
        width: '10%',
        marginLeft: '2%',
        color: '#e0e0e0'
    },
}));

export default function ComponentItem(props) {
    const classes = useStyles();
    function handelSelection() { 
        if(props.component === "mesh") {
            store.dispatch(selectMesh(props.name, "MESH"));
        }
        else if(props.component === "light") {
            store.dispatch(selectLight(props.name, "LIGHT"))
        }
    }
    function handelComponentIcon(component) {
        if (component === "mesh") {
            return <Category className={classes.icon} />;
        }
        else if (component === "poly") {
            return <ThreeDRotationOutlined className={classes.icon} />;
        }
        else if (component === "light") {
            return <WbSunnyOutlined className={classes.icon} />;
        }
        else if (component === "text") {
            return <TextFieldsOutlined className={classes.icon} />;
        }
    }
    return (
        <Grid item xs={12} style={{margin: "1%"}}>
            <Button className={classes.item} elevation={5} variant="outlined" 
                onClick={handelSelection}
            >
                {handelComponentIcon(props.component)}
                <Divider orientation="vertical" flexItem />
                <Typography className={classes.content} variant="body2">{props.name}</Typography>
                <Divider orientation="vertical" flexItem />
                { props.visible === true 
                    ? <VisibilityOutlined className={classes.visible} fontSize="small" /> 
                    : <VisibilityOffOutlined className={classes.visible} fontSize="small" />
                }
            </Button>
        </Grid>
    );
}

