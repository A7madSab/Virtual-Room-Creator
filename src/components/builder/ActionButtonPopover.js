import React from "react";
import PropTypes from 'prop-types';
import { makeStyles, IconButton, Popper, Divider } from "@material-ui/core";

import TextRotationNoneOutlinedIcon from '@material-ui/icons/TextRotationNoneOutlined';
import TextRotateUpOutlinedIcon from '@material-ui/icons/TextRotateUpOutlined';
import TextRotationAngleupOutlinedIcon from '@material-ui/icons/TextRotationAngleupOutlined';

import ExposurePlus1OutlinedIcon from '@material-ui/icons/ExposurePlus1Outlined';
import ExposureNeg1OutlinedIcon from '@material-ui/icons/ExposureNeg1Outlined';

import FlipToFrontIcon from '@material-ui/icons/FlipToFront';
import ClearIcon from '@material-ui/icons/Clear';

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
            <IconButton
                className={classes.button}
                aria-haspopup="true"
            >
                <FlipToFrontIcon fontSize="large" />
            </IconButton>
            <Divider />


            <IconButton
                className={classes.button}
                aria-haspopup="true"
            >
                <TextRotationNoneOutlinedIcon fontSize="large" />
            </IconButton>
            <Divider />

            <IconButton
                className={classes.button}
                aria-haspopup="true"
            >
                <TextRotateUpOutlinedIcon fontSize="large" />
            </IconButton>
            <Divider />


            <IconButton
                className={classes.button}
                aria-haspopup="true"
            >
                <TextRotationAngleupOutlinedIcon fontSize="large" />
            </IconButton>
            <Divider />


            <IconButton
                className={classes.button}
                aria-haspopup="true"
            >
                <ExposurePlus1OutlinedIcon fontSize="large" />
            </IconButton>
            <Divider />
            <IconButton
                className={classes.button}
                aria-haspopup="true"
            >
                <ExposureNeg1OutlinedIcon fontSize="large" />
            </IconButton>
            <Divider />

            <IconButton
                className={classes.button}
                aria-haspopup="true"
            >
                <ClearIcon fontSize="large" />
            </IconButton>
            <Divider />            
        </Popper>
    );
}
ActionButtonPopover.propTypes = {
    anchorPopover: PropTypes.any,
}