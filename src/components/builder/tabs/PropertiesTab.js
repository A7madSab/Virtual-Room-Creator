import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Divider } from '@material-ui/core';

import AcceptText from '../text-properties/AcceptText.js'

import MaterialType from '../material-properties/MaterialType.js';
import MaterialFill from '../material-properties/MaterialFill.js';

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

const PropertiesTab = ({ value, index, contentType }) => {
    const classes = useStyles();

    let SceneSelected = contentType === "Scene" ? true : false;
    let MeshSelected = contentType === "Mesh" ? true : false;
    let LightSelected = contentType === "Light" ? true : false;
    let TextSelected = contentType === "Text" ? true : false;

    return (
        <>
            {value === index
                ? <Paper hidden={value !== index} className={classes.paper} square >
                    {MeshSelected && <MeshContent />}
                    {LightSelected && <LightContent />}
                    {SceneSelected && <SceneContent />}
                    {TextSelected && <Fragment>
                        <AcceptText />
                        <MaterialType />
                        <MaterialFill />
                    </Fragment>}
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