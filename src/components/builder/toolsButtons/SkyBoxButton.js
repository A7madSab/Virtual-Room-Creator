import React from "react";
import { makeStyles, IconButton, Divider } from "@material-ui/core";
import { PanoramaHorizontal } from "@material-ui/icons"

import PopoverCard from "../PopoverCard.js";
import SkyBoxImage from "../../../assets/builder/skybox-popover.png";

const useStyle = makeStyles((theme) => ({
    button: {
        color: "white",
        padding: "10%",
        marginTop: "10%",
        marginBottom: "10%"
    },
}));

function SkyBoxButton() {
    const classes = useStyle();

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
        title: "SkyBox - Panorama",
        subtitle: "Method of creating backgrounds to make a scene level look bigger than it really is. When a skybox is used, the level is enclosed in a cuboid.",
        img: SkyBoxImage
    };

    return (
        <React.Fragment>
            <IconButton
                className={classes.button}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                aria-haspopup="true"
            >
                <PanoramaHorizontal fontSize="large" />
            </IconButton>
            <Divider />
            <PopoverCard close={handlePopoverClose} anchorPopover={anchorPopover} info={cardInfo} />
        </React.Fragment>
    );
}

export default SkyBoxButton;
