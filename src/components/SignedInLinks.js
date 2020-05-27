import React from "react"

import Button from "@material-ui/core/Button"
import { NavLink } from "react-router-dom"
import { useAuth0 } from "../utils/react-auth0-spa"

const SignedInLinks = () => {
    const { logout } = useAuth0()

    return (
        <>
            <NavLink to="/">
                <Button color="secondary">
                    landingPage
                </Button>
            </NavLink>
            <NavLink to="/dashboard">
                <Button color="secondary">
                    DashBoard
                </Button>
            </NavLink>
            <NavLink to="/createProject">
                <Button color="secondary">
                    Create Project
                </Button>
            </NavLink>
            <NavLink to="/profile">
                <Button color="secondary">
                    Profile
                </Button>
            </NavLink>
            <Button color="secondary" onClick={() => logout()}>
                SIGN OUT
            </Button>
        </>
    )
}

export default SignedInLinks
