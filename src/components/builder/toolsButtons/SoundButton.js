import React from "react";
import { makeStyles, IconButton, Divider } from "@material-ui/core";
import { VolumeUp } from "@material-ui/icons"

import SoundImage from "../../../assets/builder/sound-popover.png";
import PopoverCard from "../PopoverCard.js";

const useStyle = makeStyles((theme) => ({
    button: {
        color: "white",
        padding: "10%",
        marginTop: "10%",
        marginBottom: "10%"
    },
}));

export default function SoundButton() {
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
        title: "Sound",
        subtitle: "Add sounds to the scene to make it more interactive and fun",
        img: SoundImage
    };

    return (
        <React.Fragment>
            <IconButton
                className={classes.button}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                aria-haspopup="true"
            >
                <VolumeUp fontSize="large" />
            </IconButton>
            <Divider />
            <PopoverCard close={handlePopoverClose} anchorPopover={anchorPopover} info={cardInfo} />
        </React.Fragment>
    );
}


