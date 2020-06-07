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

export default function NameField() {
    const classes = useStyles();
    return (
        <TextField
            variant="outlined"
            size="small"
            label="Name"
            className={classes.inputfield}
            placeholder="MESH 1"
            defaultValue="MESH 1"
            InputProps={{
                className: classes.inputfield,
            }}
        />

    );
}