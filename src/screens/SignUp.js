import React, { useState } from "react"
import { Link, Redirect } from "react-router-dom"

import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import { connect } from "react-redux"

import { signUp } from "../redux/actions"

const SignUp = ({ signUpUser, user, error }) => {
    const [signUpFrom, setSignUpForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    if (user) {
        console.log("SignUp")
        return <Redirect to="/signIn" />
    }

    return (
        <Grid style={{ height: "75vh" }} container alignItems="center" justify="center" >
            <Card style={{ minWidth: "400px" }}>
                <CardContent>
                    <Grid container direction="column" justify="center">
                        <Typography align="center" variant="h3" color="primary"> Sign Up</Typography>

                        <Grid container direction="row">
                            <TextField type="text" label="First Name" value={signUpFrom.firstName} onChange={e => setSignUpForm({ ...signUpFrom, firstName: e.target.value })} />
                            <TextField type="text" label="Last Name" value={signUpFrom.lastName} onChange={e => setSignUpForm({ ...signUpFrom, lastName: e.target.value })} />
                        </Grid>

                        <TextField type="email" label="E-mail" value={signUpFrom.email} onChange={e => setSignUpForm({ ...signUpFrom, email: e.target.value })} />
                        <TextField type="password" label="Password" value={signUpFrom.password} onChange={e => setSignUpForm({ ...signUpFrom, password: e.target.value })} />

                        <Button style={{ marginTop: 15 }} size="small" variant="contained" color="primary" onClick={() => signUpUser(signUpFrom)}>Sign Up</Button>
                        {error ? <Typography style={{ fontSize: 12, paddingTop: 10 }} align="center" color="error">{error}</Typography> : null}

                        <Grid container direction="row" justify="center" alignItems="center">
                            <Typography>
                                Already have an  an account?
                            </Typography>
                            <Link to="/signIn">
                                <Button>Sign In </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}

const mapStateToProps = ({ auth }) => ({
    user: auth.user,
    error: auth.error
})
const mapDispatchToProps = dispatch => ({
    signUpUser: user => dispatch(signUp(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)