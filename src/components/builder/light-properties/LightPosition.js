import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Divider } from '@material-ui/core';

import { connect } from "react-redux"


const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '2%',
        marginLeft: '0px',
        paddingLeft: '0px'
    },
    inputfield: {
        width: '100%',
        color: '#eeeeee',
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

const LightPosition = ({ lights }) => {
    const classes = useStyles();
    let position = lights.selectedLight.position;
    return (
        <>
            <Grid container spacing={1} className={classes.root}>
                <Grid item xs={4} style={{ paddingLeft: "0px" }}>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        label="X"
                        className={classes.inputfield}
                        placeholder="0.0"
                        InputProps={{
                            className: classes.inputfield,
                        }}
                        value={position != null ? Number(position[0]).toFixed(2) : "0.0"}
                    />
                </Grid>
                <Grid item xs={4} style={{ paddingLeft: "0px" }}>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        label="Y"
                        className={classes.inputfield}
                        placeholder="0.0"
                        InputProps={{
                            className: classes.inputfield,
                        }}
                        value={position != null ? Number(position[1]).toFixed(2) : "0.0"}
                    />
                </Grid>
                <Grid item xs={4} style={{ paddingLeft: "0px" }}>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        label="Z"
                        className={classes.inputfield}
                        placeholder="0.0"
                        InputProps={{
                            className: classes.inputfield,
                        }}
                        value={position != null ? Number(position[2]).toFixed(2) : "0.0"}
                    />
                </Grid>
            </Grid>
            <Divider />
        </>
    );
}

const mapStateToProps = state => ({
    lights: state.lightReducer
})
const mapDispatchToProps = dispatch => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(LightPosition)