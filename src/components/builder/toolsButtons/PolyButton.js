import React from "react";
import { makeStyles, IconButton, Divider } from "@material-ui/core";
import { ThreeDRotationOutlined } from "@material-ui/icons"

import PolyImage from "../../../assets/builder/poly-popover.png";
import PopoverCard from "../PopoverCard.js";
import PolyDialog from "../PolyDialog.js";

const useStyle = makeStyles((theme) => ({
    button: {
        color: "white",
        padding: "10%",
        marginTop: "10%",
        marginBottom: "10%"
    },
}));

export default function PloyButton() {

    /**
     * Poly Dialog Component
    **/
    const [dialog, setDialog] = React.useState(false);
    const handleClickOpen = () => setDialog(true);
    const handleClose = () => setDialog(false);

    /**
     * Popover Card Component
    **/
    const [anchorPopover, setAnchorPopover] = React.useState();
    const handlePopoverOpen = (event) => setAnchorPopover(event.currentTarget);
    const handlePopoverClose = () => setAnchorPopover(null);
    const cardInfo = {
        title: "Poly",
        subtitle: "The OBJ file format is a simple data-format that represents 3D" +
            "geometry in a human readable format, using list of vertices, and texture vertices.",
        img: PolyImage
    };

    const classes = useStyle();
    return (
        <React.Fragment>
            <IconButton
                className={classes.button}
                onClick={handleClickOpen}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                aria-haspopup="true"
            >
                <ThreeDRotationOutlined fontSize="large" />
            </IconButton>
            <Divider />

            <PopoverCard close={handlePopoverClose} anchorPopover={anchorPopover} info={cardInfo} />
            <PolyDialog open={dialog} close={handleClose} />
        </React.Fragment>
    );
}

