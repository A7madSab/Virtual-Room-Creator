import React, { useState } from "react"
import { makeStyles, IconButton, Divider } from "@material-ui/core"
import { TextFieldsOutlined } from "@material-ui/icons"
import { connect } from "react-redux"
import { selectMeshType } from "../../../redux/actions"

import TextImage from "../../../assets/builder/text-popover.png"
import PopoverCard from "../PopoverCard.js"

const useStyle = makeStyles({
    button: {
        color: "white",
        padding: "10%",
        marginTop: "10%",
        marginBottom: "10%"
    }
})

const TextButton = ({ selectMeshType }) => {
    const [anchorPopover, setAnchorPopover] = useState(null)
    const classes = useStyle()

    const handlePopoverClose = () => setAnchorPopover(null)

    const cardInfo = {
        title: "3D Text",
        subtitle: "A class for generating text as a single geometry." +
            "It is constructed by providing a string of text, " +
            "and a hash of parameters consisting of a loaded Font ",
        img: TextImage
    }

    return (
        <React.Fragment>
            <IconButton
                className={classes.button}
                onClick={() => selectMeshType("Text")}
                onMouseEnter={event => setAnchorPopover(event.currentTarget)}
                onMouseLeave={handlePopoverClose}
                aria-haspopup="true"
            >
                <TextFieldsOutlined fontSize="large" />
            </IconButton>
            <Divider />
            <PopoverCard close={handlePopoverClose} anchorPopover={anchorPopover} info={cardInfo} />
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    selectMeshType: type => dispatch(selectMeshType(type))
})

export default connect(null, mapDispatchToProps)(TextButton)