import React from "react"
// import { NavLink } from "react-router-dom"
import Button from "@material-ui/core/Button"
import { useAuth0 } from "../utils/react-auth0-spa"

const SignedOutLinks = () => {
    const { loginWithRedirect } = useAuth0()

    return (
        <>
            <Button
                size="large"
                variant="outlined"
                color="secondary"
                onClick={() => loginWithRedirect({})}
            >
                Getting Started
            </Button>
        </>
    )

}


export default SignedOutLinks
