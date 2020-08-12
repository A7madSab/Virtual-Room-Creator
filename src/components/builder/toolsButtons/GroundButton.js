import React from "react";
import { makeStyles, IconButton, Divider } from "@material-ui/core";
import { BlurOn } from "@material-ui/icons"

import GroundImage from "../../../assets/builder/ground-popover.png";
import PopoverCard from "../PopoverCard.js";

import store from "../../../redux/store.js";
import { updateScene } from "../../../redux/actions.js"

const useStyle = makeStyles((theme) => ({
    button: {
        color: "white",
        padding: "10%",
        marginTop: "10%",
        marginBottom: "10%"
    },
}));

function GroundButton() {
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
        title: "Ground",
        subtitle: "The GridHelper is an object to define grids. Grids are two-dimensional arrays of lines",
        img: GroundImage
    };

    return (
        <React.Fragment>
            <IconButton
                className={classes.button}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                onClick={() => store.dispatch(updateScene({ 
                    ...store.getState().sceneReducer, 
                    planeHelper: { 
                        ...store.getState().sceneReducer.planeHelper, 
                        visible: true 
                    } 
                }))}
                aria-haspopup="true"
            >
                <BlurOn fontSize="large" />
            </IconButton>
            <Divider />
            
            <PopoverCard close={handlePopoverClose} anchorPopover={anchorPopover} info={cardInfo} />
        </React.Fragment>
    );
}

export default GroundButton;
