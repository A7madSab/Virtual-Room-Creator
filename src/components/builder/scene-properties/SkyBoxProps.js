import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Switch } from '@material-ui/core';

import { connect } from "react-redux";

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



const SkyBoxProps = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (
        <>
            <Grid container spacing={1} className={classes.root}>
                <Grid item xs={10} style={{ paddingLeft: "0px" }}>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        label="SkyBox"
                        className={classes.inputfield}
                        placeholder="example.jpg"
                        defaultValue="example.jpg"
                        InputProps={{
                            className: classes.inputfield,
                        }}
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
})
export default connect(mapStateToProps,)(SkyBoxProps)