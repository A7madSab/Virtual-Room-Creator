import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    inputfield: {
        width: '100%',
        color: '#eeeeee',
        marginBottom: '3%',
        marginTop: '1%',
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

export default function TypeField() {
    const classes = useStyles();
    return (
        <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            label="Type"
            className={classes.inputfield}
            placeholder="Box-Geometry"
            defaultValue="Box-Geometry"
            InputProps={{
                className: classes.inputfield,
            }}
        />
    )
}

