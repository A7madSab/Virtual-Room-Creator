import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Switch } from '@material-ui/core';

import { connect } from "react-redux";
import { updateScene } from "../../../redux/actions.js";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '2%',
        marginLeft: '0px',
        paddingLeft: '0px'
    },
    inputfield: {
        width: '100%',
        color: '#eeeeee',
        marginLeft: '0px',
        paddingLeft: '0px',
        paddingBottom: '0px',
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



const GridProps = ({sceneReducer, updateScene}) => {
    const classes = useStyles();
    const [visible, setVisible] = React.useState(false);
    const [size, setSize] = React.useState(10);
    const [divid, setDivid] = React.useState(30);

    React.useEffect(() => {
        setVisible(sceneReducer.gridHelper.visible);
    }, [sceneReducer.gridHelper])

    function updateSize() {
        updateScene({...sceneReducer, gridHelper: {...sceneReducer.gridHelper, size: size}})
    }

    function updateDivid() {
        updateScene({...sceneReducer, gridHelper: {...sceneReducer.gridHelper, divid: divid}})
    }

    React.useEffect(updateSize, [size]);
    React.useEffect(updateDivid, [divid]);

    return (
        <>
            <Grid container spacing={1} className={classes.root}>
                <Grid item xs={5} style={{ paddingLeft: "0px" }}>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        label="Grid Size"
                        className={classes.inputfield}
                        placeholder="0"
                        InputProps={{
                            className: classes.inputfield,
                        }}
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        disabled={!visible}
                    />
                </Grid>
                <Grid item xs={5} style={{ paddingLeft: "0px" }}>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        label="Grid Divid"
                        className={classes.inputfield}
                        placeholder="0"
                        InputProps={{
                            className: classes.inputfield,
                        }}
                        value={divid}
                        onChange={(e) => setDivid(e.target.value)}
                        disabled={!visible}
                    />
                </Grid>
                <Grid item xs={2} style={{ paddingLeft: "0px", paddingTop: '7%' }}>
                    <Switch checked={visible}
                        size="small"
                        onChange={() => updateScene({...sceneReducer, gridHelper: {...sceneReducer.gridHelper, visible: !visible}})}
                        color="secondary"
                        style={{ float: 'right', alignContent: 'right' }} />
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

export default connect(mapStateToProps,mapDispatchToProps)(GridProps)