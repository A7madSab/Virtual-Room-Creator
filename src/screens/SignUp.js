import React, { useState } from "react"
import { Link } from "react-router-dom"

import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"

import { signIn } from "../api/index"

const SignUp = () => {
    const [signUpFrom, setSignUpForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
    const handleOnSignUpClick = () => {
        signIn(signUpFrom)
    }
    return (
        <Grid style={{ height: "75vh" }} container alignItems="center" justify="center" >
            <Card>
                <CardContent>
                    <Grid container direction="column" justify="center">
                        <Typography align="center" variant="h3" color="primary"> Sign Up</Typography>

                        <Grid container direction="row">
                            <TextField type="text" label="First Name" value={signUpFrom.firstName} onChange={e => setSignUpForm({ ...signUpFrom, firstName: e.target.value })} />
                            <TextField type="text" label="Last Name" value={signUpFrom.lastName} onChange={e => setSignUpForm({ ...signUpFrom, lastName: e.target.value })} />
                        </Grid>

                        <TextField type="email" label="E-mail" value={signUpFrom.email} onChange={e => setSignUpForm({ ...signUpFrom, email: e.target.value })} />
                        <TextField type="password" label="Password" value={signUpFrom.password} onChange={e => setSignUpForm({ ...signUpFrom, password: e.target.value })} />

                        <Button style={{ marginTop: 15 }} size="small" variant="contained" color="primary" onClick={handleOnSignUpClick}>Sign Up</Button>

                        <Grid container direction="row" justify="center" alignItems="center">
                            <Typography>
                                Already have an  an account?
                            </Typography>
                            <Link to="/signup">
                                <Button>Sign In </Button>
                            </Link>
                        </Grid>

                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default SignUp