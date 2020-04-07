import React from "react"
import { NavLink } from "react-router-dom"
import Button from '@material-ui/core/Button'

const SignedInLinks = () => (
    <>
        <NavLink to="/create-Project">
            <Button color="secondary">
                Create Project
            </Button>
        </NavLink>
        <NavLink to="/">
            <Button color="secondary">
                Log out
            </Button>
        </NavLink>
    </>
)


export default SignedInLinks
