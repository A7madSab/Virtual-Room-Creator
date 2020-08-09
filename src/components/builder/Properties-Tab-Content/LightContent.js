import React, { Fragment } from "react";

import LightNameField from '../light-properties/LightNameField.js';
import LightTypeField from '../light-properties/LightTypeField.js';
import LightPoition from '../light-properties/LightPosition.js';
import LightColor from '../light-properties/LightColor.js';


const LightContent = () => {
    return (
        <Fragment>
            <LightNameField />
            <LightTypeField />
            <LightPoition />
            <LightColor />
        </Fragment>
    );
}

export default LightContent