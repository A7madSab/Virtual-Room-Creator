import React, { useState } from "react"
import { Link, Redirect } from "react-router-dom"
import { useSpring, animated } from "react-spring"

import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import { connect } from "react-redux"

import { signIn } from "../redux/actions"
import { useAuth0 } from "../utils/react-auth0-spa"

const SignIn = ({ user, signIn, error }) => {
    const [signInFrom, setSignInForm] = useState({ email: "", password: "" })
    const { loginWithRedirect } = useAuth0()
    const props = useSpring({
        from: {
            opacity: 0,
            transform: "translate3d(0,0,0) scale(0.5) rotateX(0deg)",
        }, to: {
            transform: "translate3d(0px,0,0) scale(1) rotateX(0deg)",
            opacity: 1,
        }
    })

    if (user) {
        return <Redirect to="/" />
    }

    return (
        <animated.div style={props}>
            <Grid style={{ height: "75vh" }} container alignItems="center" justify="center" >
                <Card style={{ minWidth: "400px" }}>
                    <CardContent>
                        <Grid container direction="column" justify="center">
                            <Typography align="center" variant="h3" color="primary">Sign In</Typography>

                            <TextField type="e-mail" label="E-mail" value={signInFrom.email} onChange={e => setSignInForm({ ...signInFrom, email: e.target.value })} />
                            <TextField type="password" label="Password" value={signInFrom.password} onChange={e => setSignInForm({ ...signInFrom, password: e.target.value })} />

                            <Button style={{ marginTop: 15 }} size="small" variant="contained" color="primary" onClick={() => loginWithRedirect({})}>Sign In</Button>

                            {error ? <Typography style={{ fontSize: 12, paddingTop: 10 }} align="center" color="error">{error}</Typography> : null}

                            <Grid container direction="row" justify="center" alignItems="center">
                                <Typography display="inline" variant="body1">
                                    You Dont have an account?
                                </Typography>
                                <Link to="/signup">
                                    <Button>
                                        Sign Up
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </animated.div>
    )
}

const mapStateToProps = ({ auth }) => ({
    user: auth.user,
    error: auth.error
})

const mapDispatchToProps = dispatch => ({
    signIn: user => dispatch(signIn(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)