import React from "react";
import { makeStyles, IconButton, Divider, Menu, MenuItem } from "@material-ui/core";
import { Category } from "@material-ui/icons"

import MeshImage from "../../../assets/builder/mesh-popover.png";
import PopoverCard from "../PopoverCard.js";

import store from "../../../redux/store.js";
import { addMesh } from "../../../redux/actions.js"

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

function MeshButton() {
    const classes = useStyle();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const executeAction = (type) => {
        store.dispatch(addMesh(type));
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
        title: "Mesh Three.js",
        subtitle: " Class representing triangular polygon mesh based objects. Also serves as a base for other classes such as SkinnedMesh.",
        img: MeshImage
    };

    return (
        <React.Fragment>
            <IconButton
                className={classes.button}
                onClick={handleClick}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                aria-controls="meshes-menu"
                aria-haspopup="true"
            >
                <Category fontSize="large" />
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
                <MenuItem onClick={(type) => executeAction("Box-Geometry")}>Box Geometry</MenuItem>
                <MenuItem onClick={(type) => executeAction("Dodecahedron-Geometry")}>Dodecahedron Geometry</MenuItem>
                <MenuItem onClick={(type) => executeAction("Cone-Geometry")}>Cone Geometry</MenuItem>
                <MenuItem onClick={(type) => executeAction("Cylinder-Geometry")}>Cylinder Geometry</MenuItem>
            </Menu>
            <PopoverCard close={handlePopoverClose} anchorPopover={anchorPopover} info={cardInfo} />
        </React.Fragment>
    );
}

export default MeshButton;