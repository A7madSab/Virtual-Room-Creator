import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid } from '@material-ui/core';
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '2%',
    },
    inputfield: {
        width: '100%',
        color: '#eeeeee',
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

const Dimension = ({meshes}) => {
    const classes = useStyles();
    let meshDimension = meshes.selectedMesh.dimensions;

    return (
        <Grid container spacing={1} className={classes.root}>
            <Grid item xs={4} style={{paddingLeft:"0px"}}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    label="Height"
                    className={classes.inputfield}
                    placeholder="1.0"
                    InputProps={{
                        className: classes.inputfield,
                    }}
                    value={meshDimension != null ? Number(meshDimension[0]).toFixed(2) : "1.0"}
                />
            </Grid>
            <Grid item xs={4} style={{paddingLeft:"0px"}}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    label="Width"
                    className={classes.inputfield}
                    placeholder="1.0"
                    InputProps={{
                        className: classes.inputfield,
                    }}
                    value={meshDimension != null ? Number(meshDimension[1]).toFixed(2) : "1.0"}
                />
            </Grid>
            <Grid item xs={4} style={{paddingLeft:"0px"}}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    label="Depth"
                    className={classes.inputfield}
                    placeholder="1.0"
                    InputProps={{
                        className: classes.inputfield,
                    }}
                    value={meshDimension != null ? Number(meshDimension[0]).toFixed(2) : "1.0"}
                />
            </Grid>
        </Grid>

    );
}

const mapStateToProps = state => ({
    meshes: state.meshReducer
})

export default connect(mapStateToProps, )(Dimension)
