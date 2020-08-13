import React, { useState, Fragment } from "react"
import { makeStyles, IconButton, Divider, Button, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core"
import { VolumeUp } from "@material-ui/icons"


import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContentText from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

import SoundImage from "../../../assets/builder/sound-popover.png"
import PopoverCard from "../PopoverCard.js"
import { updateScene } from "../../../redux/actions"
import { connect } from "react-redux"

const useStyle = makeStyles((theme) => ({
    button: {
        color: "white",
        padding: "10%",
        marginTop: "10%",
        marginBottom: "10%"
    },
}))

const SoundButton = ({ sceneReducer, updateScene }) => {
    const classes = useStyle()
    const [open, setOpen] = useState(false)
    const [sound, setSound] = useState("")

    const handleSoundChange = e => {
        setSound(e.target.value)
        updateScene({ ...sceneReducer, sound: e.target.value })
    }

    const handleClickOpen = () => setOpen(true)
    const handleClose = () => {
        setOpen(false)
    }

    const [anchorPopover, setAnchorPopover] = useState(null)
    const handlePopoverOpen = (event) => {
        setAnchorPopover(event.currentTarget)
    }
    const handlePopoverClose = () => {
        setAnchorPopover(null)
    }
    const cardInfo = {
        title: "Sound",
        subtitle: "Add sounds to the scene to make it more interactive and fun",
        img: SoundImage
    }

    return (
        <Fragment>
            <IconButton
                className={classes.button}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                aria-haspopup="true"
                onClick={handleClickOpen}
            >
                <VolumeUp fontSize="large" />
            </IconButton>
            <Divider />
            <PopoverCard close={handlePopoverClose} anchorPopover={anchorPopover} info={cardInfo} />

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle style={{ backgroundColor: "#9932CC", color: "white" }}>
                    Environment Sound
                </DialogTitle>
                <DialogContent>
                    <DialogContentText style={{ fontFamily: "Balsamiq Sans", }}>
                        Here you can select sounds to place in your scene.
                    </DialogContentText>

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Sound</InputLabel>
                        <Select
                            label="Sound"
                            style={{ width: "200px" }}
                            id="demo-simple-select-outlined"
                            labelId="demo-simple-select-outlined-label"
                            value={sound}
                            onChange={handleSoundChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="lullaby.mp3">Lullaby</MenuItem>
                            <MenuItem value="ocean.mp3">Ocean</MenuItem>
                            <MenuItem value="forest.mp3">forest</MenuItem>
                        </Select>
                    </FormControl>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary"> Save and Close </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}


const mapStateToProps = state => ({
    sceneReducer: state.sceneReducer
})

const mapDispatchToProps = dispatch => ({
    updateScene: newScene => dispatch(updateScene(newScene))
})

export default connect(mapStateToProps, mapDispatchToProps)(SoundButton)