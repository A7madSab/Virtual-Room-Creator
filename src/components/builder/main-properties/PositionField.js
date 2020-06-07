import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '3%',
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

export default function Position(props) {
    const classes = useStyles();
    return (
        <Grid container spacing={1} className={classes.root}>
            <Grid item xs={4}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    label="X"
                    className={classes.inputfield}
                    placeholder="0.0"
                    defaultValue="0.0"
                    InputProps={{
                        className: classes.inputfield,
                    }}
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    label="Y"
                    className={classes.inputfield}
                    placeholder="0.0"
                    defaultValue="0.0"
                    InputProps={{
                        className: classes.inputfield,
                    }}
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    label="Z"
                    className={classes.inputfield}
                    placeholder="0.0"
                    defaultValue="0.0"
                    InputProps={{
                        className: classes.inputfield,
                    }}
                />
            </Grid>
        </Grid>

    );
}
