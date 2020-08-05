import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Divider } from '@material-ui/core';

import AcceptText from '../text-properties/AcceptText.js'

import Visible from '../main-properties/VisibleToggle.js';
import Locked from '../main-properties/LockToggle.js';
import Position from '../main-properties/PositionField.js';
import Dimension from '../main-properties/DimensionField.js';
import NameField from "../main-properties/NameField.js";
import TypeField from '../main-properties/TypeField.js';

import MaterialType from '../material-properties/MaterialType.js';
import MaterialFill from '../material-properties/MaterialFill.js';

import LightNameField from '../light-properties/LightNameField.js';
import LightTypeField from '../light-properties/LightTypeField.js';
import LightPoition from '../light-properties/LightPosition.js';
import LightColor from '../light-properties/LightColor.js';

import ProjectNameField from "../scene-properties/ProjectNameField.js";
import ShareCodeField from "../scene-properties/ShareCodeField.js";
import SceneBackgroudField from '../scene-properties/SceneBackgroudField.js';
import GridProps from '../scene-properties/GridProps.js';
import PlaneProps from '../scene-properties/PlaneProps.js';
import SkyBoxProps from '../scene-properties/SkyBoxProps.js';
import CameraProps from "../scene-properties/CameraProps.js";
import SaveButton from "../scene-properties/SaveButton.js";


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

    let SceneContent = contentType === "Scene" ? true : false;
    let MeshContent = contentType === "Mesh" ? true : false;
    let LightContent = contentType === "Light" ? true : false;
    let TextContent = contentType === "Text" ? true : false;

    return (
        <Paper hidden={value !== index} className={classes.paper} square>
            {TextContent && <Fragment>
                <AcceptText />
                <MaterialType />
                <MaterialFill />
            </Fragment>}
            {MeshContent && <Fragment>
                <Visible />
                <Locked />
                <NameField />
                <Position />
                <TypeField />
                <Dimension />
                <Divider />
                <MaterialType />
                <MaterialFill />
            </Fragment>}
            {LightContent && <Fragment>
                <LightNameField />
                <LightTypeField />
                <LightPoition />
                <LightColor />
            </Fragment>}
            {SceneContent && <Fragment>
                <ProjectNameField />
                <ShareCodeField />
                <SkyBoxProps />
                <SceneBackgroudField />
                <Divider />
                <GridProps />
                <Divider />
                <PlaneProps />
                <Divider />
                <CameraProps />
                <Divider />
                <SaveButton />
            </Fragment>}
        </Paper>
    );
}
PropertiesTab.propTypes = {
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
    contentType: PropTypes.any.isRequired
};

export default PropertiesTab