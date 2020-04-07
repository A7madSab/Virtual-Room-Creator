import React from "react"
import { Link } from "react-router-dom"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography style={{ flexGrow: 1 }} variant="h6" >
                    <Link to="/">
                        <Button color="secondary" variant="text" style={{ fontSize: 28 }}>
                            VRC
                        </Button>
                    </Link>
                </Typography>

                <SignedOutLinks />
                <SignedInLinks />
            </Toolbar>
        </AppBar>
    )
}

export default Navbar


// import IconButton from "@material-ui/core/IconButton"
// import MenuIcon from "@material-ui/icons/Menu"
// {/* <IconButton edge="start" color="inherit" aria-label="menu">
// {/* <MenuIcon /> */}
// </IconButton> */}