import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Switch } from '@material-ui/core';

import { connect } from "react-redux";
import { updateScene } from "../../../redux/actions.js";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '1%',
        marginBottom: '0%',
        marginLeft: '0px',
        paddingLeft: '0px'
    },
    root2: {
        margin: '0px',
        padding: '0px',
        marginBottom: '1%',
    },
    inputfield: {
        width: '100%',
        color: '#eeeeee',
        paddingTop: '0px',
        marginLeft: '0px',
        paddingLeft: '0px',
        '& label.Mui-focused': {
            color: 'white',
        },
        '& label': {
            color: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#616161',
                borderRadius: 2
            },
            '&:hover fieldset': {
                borderColor: 'white',
                borderWidth: '1px'
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
                borderWidth: '1px',
            },
        },
    },
}));



const PlaneProps = ({ sceneReducer, updateScene }) => {
    const classes = useStyles();
    const [visible, setVisible] = React.useState(false);
    const [width, setWidth] = React.useState(sceneReducer.planeHelper.width);
    const [height, setHeight] = React.useState(sceneReducer.planeHelper.height);
    const [color, setColor] = React.useState(sceneReducer.planeHelper.color);

    React.useEffect(() => {
        setVisible(sceneReducer.planeHelper.visible);
    }, [sceneReducer.planeHelper])

    function updateWidth() {
        updateScene({ ...sceneReducer, planeHelper: { ...sceneReducer.planeHelper, width: width } })
    }

    function updateHeight() {
        updateScene({ ...sceneReducer, planeHelper: { ...sceneReducer.planeHelper, height: height } })
    }

    function updateColor() {
        updateScene({ ...sceneReducer, planeHelper: { ...sceneReducer.planeHelper, color: color } })
    }

    React.useEffect(updateWidth, [width]);
    React.useEffect(() => setWidth(sceneReducer.planeHelper.width), [sceneReducer.planeHelper.width]);

    React.useEffect(updateHeight, [height]);
    React.useEffect(() => setHeight(sceneReducer.planeHelper.height), [sceneReducer.planeHelper.height]);

    React.useEffect(updateColor, [color]);
    React.useEffect(() => setColor(sceneReducer.planeHelper.color), [sceneReducer.planeHelper.color]);
    return (
        <>
            <Grid container spacing={1} className={classes.root}>
                <Grid item xs={5} style={{ paddingLeft: "0px" }}>
                    <TextField
                        variant="outlined"
                        size="small"
                        label="Plane Width"
                        className={classes.inputfield}
                        placeholder="5.0"
                        InputProps={{
                            className: classes.inputfield,
                        }}
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        disabled={!visible}
                    />
                </Grid>
                <Grid item xs={5} style={{ paddingLeft: "0px" }}>
                    <TextField
                        variant="outlined"
                        size="small"
                        label="Plane Height"
                        className={classes.inputfield}
                        placeholder="5.0"
                        InputProps={{
                            className: classes.inputfield,
                        }}
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        disabled={!visible}
                    />
                </Grid>
                <Grid item xs={2} style={{ paddingLeft: "0px", paddingTop: '7%' }}>
                    <Switch checked={visible}
                        size="small"
                        onChange={() => updateScene({ ...sceneReducer, planeHelper: { ...sceneReducer.planeHelper, visible: !visible } })}
                        color="secondary"
                        style={{ float: 'right', alignContent: 'right' }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={1} className={classes.root2}>
                <Grid item xs={12} style={{ padding: "0px", paddingRight: '10px' }}>
                    <TextField
                        variant="outlined"
                        size="small"
                        label="Plane Color"
                        className={classes.inputfield}
                        placeholder="#00b0ff"
                        InputProps={{
                            className: classes.inputfield,
                        }}
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        disabled={!visible}
                    />
                </Grid>

            </Grid>
        </>
    );
}
const mapStateToProps = state => ({
    sceneReducer: state.sceneReducer
})

const mapDispatchToProps = dispatch => ({
    updateScene: (newScene) => dispatch(updateScene(newScene))
})
export default connect(mapStateToProps, mapDispatchToProps)(PlaneProps)