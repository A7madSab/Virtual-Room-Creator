import React from "react"
import { NavLink } from "react-router-dom"
import Button from '@material-ui/core/Button'
import { signOut } from "../redux/actions"
import { connect } from "react-redux"

const SignedInLinks = ({ user, signOut }) => (
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
        <NavLink to="/create-Project">
            <Button color="secondary">
                Create Project
            </Button>
        </NavLink>
        <Button color="secondary" onClick={() => signOut()}>
            SIGN OUT
        </Button>
    </>
)

const mapStateToProps = ({ auth }) => ({
    user: auth.user
})

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)
