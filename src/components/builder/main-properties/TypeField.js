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

const TypeField = ({meshes}) => {
    const classes = useStyles();
    let meshType = meshes.selectedMesh.type;
    return (
        <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            label="Type"
            className={classes.inputfield}
            placeholder="Mesh-Type"
            contentEditable={false}
            InputProps={{
                className: classes.inputfield,
            }}
            value={meshType != null ? meshType : "Mesh-Type"}
        />
    )
}

const mapStateToProps = state => ({
    meshes: state.meshReducer
})

export default connect(mapStateToProps, )(TypeField)

