import React from "react"
import { NavLink } from "react-router-dom"
import Button from "@material-ui/core/Button"

const SignedOutLinks = () => (
    <>
        <NavLink to="/">
            <Button color="secondary">
                landingPage
            </Button>
        </NavLink>
        <NavLink to="/signUp">
            <Button color="secondary">
                Sign Up
            </Button>
        </NavLink>
        <NavLink to="/signIn">
            <Button color="secondary">
                SIgn In
            </Button>
        </NavLink>
    </>
)


export default SignedOutLinks
