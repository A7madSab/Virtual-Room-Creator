import React from "react";
import { makeStyles, IconButton, Divider, Button, TextField, Grid, CardMedia } from "@material-ui/core";
import { PanoramaHorizontal } from "@material-ui/icons"

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import PopoverCard from "../PopoverCard.js";
import SkyBoxImage from "../../../assets/builder/skybox-popover.png";

import { connect } from "react-redux";
import { addSkybox, selectSkybox, deleteSkybox } from "../../../redux/actions.js";

const useStyle = makeStyles((theme) => ({
    button: {
        color: "white",
        padding: "10%",
        marginTop: "10%",
        marginBottom: "10%"
    },
}));

function SkyBoxButton({ scene, addSkybox, selectSkybox, deleteSkybox }) {
    const classes = useStyle();
    /***
     * Sky Box Dialog
     ***/
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleFileUpload = (e) => {
        const { files } = e.target
        const keys = Object.keys(files)

        keys.forEach(index => {
            const reader = new FileReader()
            reader.addEventListener("load", () => {
                addSkybox(reader.result)
            }, false)
            reader.readAsDataURL(files[index])
        })
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
                onClick={handleClickOpen}
            >
                <PanoramaHorizontal fontSize="large" />
            </IconButton>
            <Divider />
            <PopoverCard close={handlePopoverClose} anchorPopover={anchorPopover} info={cardInfo} />

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle style={{ backgroundColor: "#9932CC", color: "white" }}>
                    Sky Box
                </DialogTitle>
                <DialogContent>
                    <DialogContentText style={{ fontFamily: "Balsamiq Sans", }}>
                        Here you can uploade images as sky box for your scene.
                        Click on image to set, double Click for delete.
                    </DialogContentText>
                    <TextField
                        variant="standard"
                        size="medium"
                        onDrop={handleFileUpload}
                        multiple="multiple"
                        type="file"
                        onChange={handleFileUpload}
                    />
                    <Grid container direction="row" justify="space-around">
                        {scene.skybox.gallary.map((img, key) =>
                            <CardMedia
                                onDoubleClick={() => deleteSkybox(img)}
                                onClick={() => selectSkybox(img)}
                                key={key}
                                component="img"
                                image={img}
                                title="Sky Box Img"
                                style={{maxWidth: "100px", maxHeight: "100px"}}
                            />)}
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary"> Save and Close </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    scene: state.sceneReducer
})
const mapDispatchToProps = dispatch => ({
    addSkybox: image => dispatch(addSkybox(image)),
    selectSkybox: image => dispatch(selectSkybox(image)),
    deleteSkybox: image => dispatch(deleteSkybox(image)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SkyBoxButton)

