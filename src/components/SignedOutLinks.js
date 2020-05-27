import React from "react"
import Button from "@material-ui/core/Button"
import { useAuth0 } from "../utils/react-auth0-spa"

const SignedOutLinks = () => {
    const { loading, loginWithRedirect } = useAuth0()

    return (
        loading === null
            ? null
            : < Button
                size="large"
                variant="outlined"
                color="secondary"
                onClick={() => loginWithRedirect({})}
            > Getting Started</Button>
    )

}


export default SignedOutLinks
