import React, { Fragment } from "react";
import { Divider } from '@material-ui/core';

import Visible from "../main-properties/VisibleToggle";
import Locked from "../main-properties/LockToggle.js";
import Position from "../main-properties/PositionField.js";
import Dimension from "../main-properties/DimensionField.js";
import NameField from "../main-properties/NameField.js";
import TypeField from "../main-properties/TypeField.js";

import MaterialType from "../material-properties/MaterialType.js";
import MaterialFill from "../material-properties/MaterialFill.js";


const MeshContent = () => {
    return (
        <Fragment>
            <Visible />
            <Locked />
            <NameField />
            <Position />
            <TypeField />
            <Dimension />
            <Divider />
            <MaterialType />
            <MaterialFill />
        </Fragment>
    );
}

export default MeshContent