import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { Typography } from '@material-ui/core';
import { updateMesh } from "../../../redux/actions"
import { connect } from "react-redux"

import ColorCollection from './ColorCollection';

const CustomToggel = withStyles({
    root: {
        borderColor: '#616161',
        borderRadius: 2,
        height: '35px',
        width: '50%',
        textTransform: 'none',
        color: '#616161',
        '&$selected': {
            color: '#eeeeee'
        },
        '&:hover': {
            borderColor: 'white'
        }
    },
    selected: {},
})((props) => <ToggleButton color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
    toggel: {
        marginBottom: '3%',
        marginTop: '2%',
        borderColor: '#757575',
        backgroundColor: '#424242',
        width: '100%',
    },
}));

const MaterialFill = ({ meshes, updateMesh }) => {
    const classes = useStyles();
    const [fill, setFill] = React.useState('color');
    const [image, setImage] = useState(null)
    const [base64Image, setBase64Image] = useState(null)

    useEffect(() => {
        if (image) {
            const reader = new FileReader()
            reader.addEventListener("load", () => {
                setBase64Image(reader.result)
                updateMesh(
                    meshes.selectedMesh.id,
                    { ...meshes.selectedMesh, material: "Texture", texture: reader.result }
                );
            }, false)
            reader.readAsDataURL(image)
        }
    }, [image])

    const handleMaterialFill = (event, newFill) => {
        if (newFill !== null) {
            setFill(newFill);
        }
    };
    return (
        <React.Fragment>
            <ToggleButtonGroup value={fill} exclusive onChange={handleMaterialFill}
                className={classes.toggel}
            >
                <CustomToggel value="color">
                    <Typography>Color</Typography>
                </CustomToggel>
                <CustomToggel value="texture">
                    <Typography>Texture</Typography>
                </CustomToggel>
            </ToggleButtonGroup>
            {fill === "color"
                ? <ColorCollection />
                : <React.Fragment>
                    <Typography>Select a file:</Typography>
                    <input type="file" onChange={e => setImage(e.target.files[0])} />
                    <img src={base64Image} height={25} width={25} alt="preview" />
                </React.Fragment>
            }
        </React.Fragment>
    );
}


const mapStateToProps = state => ({
    meshes: state.meshReducer
})

const mapDispatchToProps = dispatch => ({
    updateMesh: (id, updatedMesh) => dispatch(updateMesh(id, updatedMesh))
})

export default connect(mapStateToProps, mapDispatchToProps)(MaterialFill)