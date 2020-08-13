import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Switch } from '@material-ui/core';

import { connect } from "react-redux";
import { addSkybox, selectSkybox, deleteSkybox } from "../../../redux/actions.js";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '2%',
        marginBottom: '2%',
        marginLeft: '0px',
        paddingLeft: '0px'
    },
    inputfield: {
        width: '100%',
        color: '#eeeeee',
        margin: '0px',
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



const SkyBoxProps = ({ scene, addSkybox, selectSkybox, deleteSkybox }) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handleFileUpload = (e) => {
        const { files } = e.target
        const keys = Object.keys(files)

        keys.forEach(index => {
            const reader = new FileReader()
            reader.addEventListener("load", () => {
                addSkybox(reader.result)
            }, false)
            reader.readAsDataURL(files[index])
        })
    }
    return (
        <>
            <Grid container spacing={1} className={classes.root}>
                <Grid item xs={10} style={{ paddingLeft: "0px" }}>
                    <TextField
                        variant="outlined"
                        size="small"
                        label="SkyBox"
                        className={classes.inputfield}
                        placeholder="example.jpg"
                        InputProps={{
                            className: classes.inputfield,
                        }}
                        onDrop={handleFileUpload} 
                        type="file" 
                        onChange={handleFileUpload}
                    />
                </Grid>
                <Grid item xs={2} style={{ paddingLeft: "0px", paddingTop: '7%' }}>
                    <Switch checked={state.checkedB}
                        size="small"
                        onChange={handleChange}
                        name="checkedB"
                        color="secondary"
                        style={{ float: 'right', alignContent: 'right' }} />
                </Grid>
            </Grid>

        </>
    );
}
const mapStateToProps = state => ({
    scene: state.sceneReducer
})
const mapDispatchToProps = dispatch => ({
    addSkybox: image => dispatch(addSkybox(image)),
    selectSkybox: image => dispatch(selectSkybox(image)),
    deleteSkybox: image => dispatch(deleteSkybox(image)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SkyBoxProps)