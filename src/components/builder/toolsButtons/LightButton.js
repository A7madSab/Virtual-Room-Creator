import React from "react";
import { makeStyles, IconButton, Divider, Menu, MenuItem } from "@material-ui/core";
import { WbSunnyOutlined } from "@material-ui/icons"

import LightImage from "../../../assets/builder/light-popover.png";
import PopoverCard from "../PopoverCard.js";

import store from "../../../redux/store.js";
import { addLight } from "../../../redux/actions.js"

const useStyle = makeStyles((theme) => ({
    button: {
        color: "white",
        padding: "10%",
        marginTop: "10%",
        marginBottom: "10%"
    },
    menu: {
        backgroundColor: '#424242',
        marginLeft: '1%',
        color: '#fff'
    },
}));

function LightButton() {
    const classes = useStyle();

    /**
     * Light Menu Component
    **/
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const executeAction = (type) => {
        store.dispatch(addLight(type));
        handleClose();
    }

    /**
     * Popover Card Component
    **/
    const [anchorPopover, setAnchorPopover] = React.useState(null);
    const handlePopoverOpen = (event) => {
        setAnchorPopover(event.currentTarget);
    };
    const handlePopoverClose = () => {
        setAnchorPopover(null);
    };
    const cardInfo = {
        title: "Light Three.js",
        subtitle: " Abstract base class for lights - all other light types inherit the properties and methods described here. ",
        img: LightImage
    };
    return (
        <React.Fragment>
            <IconButton
                className={classes.button}
                onClick={handleClick}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                aria-controls="light-menu"
                aria-haspopup="true"
            >
                <WbSunnyOutlined fontSize="large" />
            </IconButton>
            <Divider />
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                }}
                getContentAnchorEl={null}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                classes={{ paper: classes.menu }}
            >
                <MenuItem onClick={(type) => executeAction("Ambient-Light")}>Ambient Light</MenuItem>
                <MenuItem onClick={(type) => executeAction("Directional-Light")}>Directional Light</MenuItem>
                <MenuItem onClick={(type) => executeAction("Point-Light")}>Point Light</MenuItem>
                <MenuItem onClick={(type) => executeAction("Spot-Light")}>Spot Light</MenuItem>
            </Menu>
            <PopoverCard close={handlePopoverClose} anchorPopover={anchorPopover} info={cardInfo} />
        </React.Fragment>
    );
}

export default LightButton;
