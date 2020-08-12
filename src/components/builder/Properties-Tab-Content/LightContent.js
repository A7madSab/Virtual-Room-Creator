import React, { Fragment } from "react";

import LightNameField from '../light-properties/LightNameField.js';
import LightTypeField from '../light-properties/LightTypeField.js';
import LightPoition from '../light-properties/LightPosition.js';
import LightColor from '../light-properties/LightColor.js';
import DeleteLightButton from '../light-properties/DeleteLightButton.js';


const LightContent = () => {
    return (
        <Fragment>
            <LightNameField />
            <LightTypeField />
            <LightPoition />
            <LightColor />
            <DeleteLightButton />
        </Fragment>
    );
}

export default LightContent