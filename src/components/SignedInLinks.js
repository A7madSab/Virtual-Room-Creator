import React from "react"
import { NavLink } from "react-router-dom"
import Button from '@material-ui/core/Button'
import { signOut } from "../redux/actions"
import { connect } from "react-redux"
import { useAuth0 } from "../utils/react-auth0-spa";

const SignedInLinks = ({ user, signOut }) => {
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

const mapStateToProps = ({ auth }) => ({
    user: auth.user
})

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)
