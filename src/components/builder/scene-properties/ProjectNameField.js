import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
    inputfield: {
        width: '100%',
        color: '#eeeeee',
        marginBottom: '2%',
        marginTop: '2%',
        marginLeft: '0px',
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

const ProjectNameField = () => {
    const classes = useStyles();
    
    return (
        <TextField
            variant="outlined"
            size="small"
            label="Name"
            className={classes.inputfield}
            placeholder="Project Name"
            defaultValue= "Project Name"
            InputProps={{
                className: classes.inputfield,
            }}   
        />

    );
}
const mapStateToProps = state => ({
})
export default connect(mapStateToProps, )(ProjectNameField)