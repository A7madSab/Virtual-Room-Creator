import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Switch } from '@material-ui/core';

import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '1%',
        marginBottom: '0%',
        marginLeft: '0px',
        paddingLeft: '0px'
    },
    root2: {
        marginTop: '0%',
        marginBottom: '1%',
        marginLeft: '0px',
        paddingLeft: '0px'
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



const PlaneProps = () => {
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
            <Grid item xs={5} style={{paddingLeft:"0px"}}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    label="Plane Width"
                    className={classes.inputfield}
                    placeholder= "0"
                    defaultValue="50"
                    InputProps={{
                        className: classes.inputfield,
                    }}
                />
            </Grid>
            <Grid item xs={5} style={{paddingLeft:"0px"}}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    label="Plane Height"
                    className={classes.inputfield}
                    placeholder="0"
                    defaultValue="50"
                    InputProps={{
                        className: classes.inputfield,
                    }}
                />
            </Grid>
            <Grid item xs={2} style={{paddingLeft:"0px",paddingTop: '7%'}}>
            <Switch checked={state.checkedB}
            size="small"
                    onChange={handleChange}
                    name="checkedB"
                    color="secondary"
                    style={{float: 'right', alignContent: 'right'}} />
            </Grid>
        </Grid>
        <Grid container spacing={1} className={classes.root2}>
            <Grid item xs={5} style={{paddingLeft:"0px"}}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    label="Plane Depth"
                    className={classes.inputfield}
                    placeholder= "0"
                    defaultValue="50"
                    InputProps={{
                        className: classes.inputfield,
                    }}
                />
            </Grid>
            <Grid item xs={5} style={{paddingLeft:"0px"}}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    label="Plane Color"
                    className={classes.inputfield}
                    placeholder="0"
                    defaultValue="50"
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
export default connect(mapStateToProps,)(PlaneProps)