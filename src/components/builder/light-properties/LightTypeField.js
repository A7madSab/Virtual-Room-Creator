import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
    inputfield: {
        width: '100%',
        color: '#eeeeee',
        marginBottom: '2%',
        marginTop: '1%',
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

const LightTypeField = ({lights}) => {
    const classes = useStyles();
    let lightType = lights.selectedLight.type;
    return (
        <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            label="Type"
            className={classes.inputfield}
            placeholder="Light-Type"
            contentEditable={false}
            InputProps={{
                className: classes.inputfield,
            }}
            value={lightType != null ? lightType : "Light-Type"}
        />
    )
}

const mapStateToProps = state => ({
    lights: state.lightReducer
})

export default connect(mapStateToProps, )(LightTypeField)

