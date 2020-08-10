import React from "react";
import { Paper, makeStyles } from "@material-ui/core";
import Draggable from 'react-draggable';

import ClickButton from "../toolsButtons/ClickButton.js";
import MeshButton from "../toolsButtons/MeshButton.js";
import LightButton from "../toolsButtons/LightButton.js";
import PloyButton from "../toolsButtons/PolyButton.js";
import TextButton from "../toolsButtons/TextButton.js";
import SkyBoxButton from "../toolsButtons/SkyBoxButton.js";
import GroundButton from "../toolsButtons/GroundButton.js";

const useStyle = makeStyles((theme) => ({
    ComponentPanel: {
        height: '70%',
        width: '50%',
        backgroundColor: '#424242',
        textAlign: 'center',
        marginLeft: '15px',
        padding: '1%',
        borderRadius: 50,
        overflow: 'hidden'
    },
}));

function ToolsSection() {
    const classes = useStyle();
    return (
        <Draggable>
            <Paper className={classes.ComponentPanel}>
                <ClickButton />
                <MeshButton  />
                <PloyButton  />
                <LightButton />
                <TextButton  />
                <SkyBoxButton/>
                <GroundButton/>
            </Paper>
        </Draggable>
    );
}

export default ToolsSection;
