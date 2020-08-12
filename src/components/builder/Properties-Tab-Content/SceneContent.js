import React, { Fragment } from "react";
import { Divider } from '@material-ui/core';

import ProjectNameField from "../scene-properties/ProjectNameField.js";
import ShareCodeField from "../scene-properties/ShareCodeField.js";
import SceneBackgroudField from '../scene-properties/SceneBackgroudField.js';
import GridProps from '../scene-properties/GridProps.js';
import PlaneProps from '../scene-properties/PlaneProps.js';
import SkyBoxProps from '../scene-properties/SkyBoxProps.js';
import SaveButton from "../scene-properties/SaveButton.js";


const SceneContent = () => {
    return (
        <Fragment>
            <ProjectNameField />
            <ShareCodeField />
            <SkyBoxProps />
            <SceneBackgroudField />
            <Divider />
            <GridProps />
            <Divider />
            <PlaneProps />
            <Divider />
            <Divider />
            <SaveButton />
        </Fragment>
    );
}

export default SceneContent