import React from "react";
import PropTypes from 'prop-types';
import { makeStyles, Popper } from "@material-ui/core";

import DeleteMeshButton from "../builder/actionsButtons/DeleteButton.js"
import RotationMeshButton from "../builder/actionsButtons/RotationMeshButton.js"
import CopyMeshButton from "../builder/actionsButtons/CopyMeshButton.js"
import ScaleMeshButton from "../builder/actionsButtons/ScaleMeshButton.js"

const useStyle = makeStyles((theme) => ({
    popover: {
        marginRight: "10px",
        marginTop: '10%',
        backgroundColor: "#424242",
        borderRadius: 3,
        maxWidth: '4%',
    },
    button: {
        
        color: "white",
        borderRadius: 3
    },
}));

export default function ActionButtonPopover(props) {
    const classes = useStyle();
    return (
        <Popper
            className={classes.popover}
            disablePortal={false}
            modifiers={{
                flip: {
                  enabled: false,
                },
            }}
            placement="left-start"
            open={Boolean(props.anchorPopover)}
            anchorEl={props.anchorPopover}
        >
            <CopyMeshButton />
            <RotationMeshButton />
            <ScaleMeshButton />
            <DeleteMeshButton />           
        </Popper>
    );
}
ActionButtonPopover.propTypes = {
    anchorPopover: PropTypes.any,
}