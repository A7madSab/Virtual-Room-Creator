import React from "react"
import { Link } from "react-router-dom"

import { useAuth0 } from "../utils/react-auth0-spa"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"

const Navbar = () => {
    const { isAuthenticated } = useAuth0()

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

                {isAuthenticated ? <SignedInLinks /> : <SignedOutLinks />}

            </Toolbar>
        </AppBar>
    )
}


export default Navbar