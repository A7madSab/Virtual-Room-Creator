import React from "react";
import { makeStyles, IconButton, Divider } from "@material-ui/core";
import { TextFieldsOutlined } from "@material-ui/icons"

import TextImage from "../../../assets/builder/text-popover.png";
import PopoverCard from "../PopoverCard.js";

const useStyle = makeStyles((theme) => ({
    button: {
        color: "white",
        padding: "10%",
        marginTop: "10%",
        marginBottom: "10%"
    },
}));

function TextButton() {
    const classes = useStyle();

    const [anchorPopover, setAnchorPopover] = React.useState(null);
    const handlePopoverOpen = (event) => {
        setAnchorPopover(event.currentTarget);
    };
    const handlePopoverClose = () => {
        setAnchorPopover(null);
    };
    const cardInfo = {
        title: "3D Text",
        subtitle: "A class for generating text as a single geometry." +
                  "It is constructed by providing a string of text, " +
                  "and a hash of parameters consisting of a loaded Font ",
        img: TextImage
    };

    return (
        <React.Fragment>
            <IconButton
                className={classes.button}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                aria-haspopup="true"
            >
                <TextFieldsOutlined fontSize="large" />
            </IconButton>
            <Divider />
            <PopoverCard close={handlePopoverClose} anchorPopover={anchorPopover} info={cardInfo} />
        </React.Fragment>
    );
}

export default TextButton;
