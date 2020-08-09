import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

import MeshContent from "../Properties-Tab-Content/MeshContent.js";
import LightContent from "../Properties-Tab-Content/LightContent.js";
import SceneContent from "../Properties-Tab-Content/SceneContent.js";

const useStyles = makeStyles((theme) => ({
    paper: {
        height: '99%',
        marginTop: '1%',
        backgroundColor: '#424242',
        color: '#fafafa',
        padding: '4%',
    },
}));

const PropertiesTab = (props) => {
    const { value, index, contentType } = props;
    const classes = useStyles();

    let SceneSelected = contentType === "Scene" ? true : false;
    let MeshSelected = contentType === "Mesh" ? true : false;
    let LightSelected = contentType === "Light" ? true : false;

    return (
        <>
            {value === index
                ? <Paper hidden={value !== index} className={classes.paper} square >
                    {MeshSelected && <MeshContent />}
                    {LightSelected && <LightContent />}
                    {SceneSelected && <SceneContent />}
                </Paper>
                : null
            }
        </>
    );
}

PropertiesTab.propTypes = {
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
    contentType: PropTypes.any.isRequired
};

export default PropertiesTab