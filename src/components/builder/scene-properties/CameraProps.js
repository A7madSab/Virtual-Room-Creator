import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid } from '@material-ui/core';

import { connect } from "react-redux"

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '1%',
        marginBottom: '0.5%',
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

const CameraProps =  () => {
    const classes = useStyles();
    return (
        <>
        <Grid container spacing={1} className={classes.root}>
            <Grid item xs={4} style={{paddingLeft:"0px"}}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    label="Cam-X"
                    className={classes.inputfield}
                    placeholder= "0.0"
                    defaultValue="0.0"
                    InputProps={{
                        className: classes.inputfield,
                    }}
                />
            </Grid>
            <Grid item xs={4} style={{paddingLeft:"0px"}}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    label="Cam-Y"
                    className={classes.inputfield}
                    placeholder="0.0"
                    defaultValue="5.0"
                    InputProps={{
                        className: classes.inputfield,
                    }}
                />
            </Grid>
            <Grid item xs={4} style={{paddingLeft:"0px"}}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    label="Cam-Z"
                    className={classes.inputfield}
                    placeholder="0.0"
                    defaultValue="15.0"
                    InputProps={{
                        className: classes.inputfield,
                    }}
                />
            </Grid>
        </Grid>

        <Grid container spacing={1} className={classes.root}>
        <Grid item xs={4} style={{paddingLeft:"0px"}}>
            <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                label="fov"
                className={classes.inputfield}
                placeholder= "0.0"
                defaultValue="80"
                InputProps={{
                    className: classes.inputfield,
                }}
            />
        </Grid>
        <Grid item xs={4} style={{paddingLeft:"0px"}}>
            <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                label="near"
                className={classes.inputfield}
                placeholder="0.0"
                defaultValue="0.1"
                InputProps={{
                    className: classes.inputfield,
                }}
            />
        </Grid>
        <Grid item xs={4} style={{paddingLeft:"0px"}}>
            <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                label="far"
                className={classes.inputfield}
                placeholder="0.0"
                defaultValue="500"
                InputProps={{
                    className: classes.inputfield,
                }}
            />
        </Grid>
    </Grid>
    </>
    );
}

const mapStateToProps = state => ({
})
const mapDispatchToProps = dispatch => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(CameraProps)