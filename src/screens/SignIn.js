import React, { useState } from "react"
import { Link } from "react-router-dom"

import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"

const SignIn = () => {
    const [signInFrom, setSignInForm] = useState({ email: "", password: "" })
    const handleOnSignInClick = () => console.log("signInFrom", signInFrom)
    return (
        <Grid container alignItems="center" justify="center" >
            <Card>
                <CardContent>
                    <Grid container direction="column" justify="center">
                        <Typography variant="h3" color="primary">Sign In</Typography>

                        <TextField type="e-mail" label="E-mail" value={signInFrom.email} onChange={e => setSignInForm({ ...signInFrom, email: e.target.value })} />
                        <TextField type="password" label="Password" value={signInFrom.password} onChange={e => setSignInForm({ ...signInFrom, password: e.target.value })} />

                        <Grid container direction="row">
                            <Typography display="inline" variant="body1">
                                You Dont have an account?
                                </Typography>
                            <Link to="/signup">
                                <Button>
                                    Sign Up
                                    </Button>
                            </Link>
                        </Grid>

                        <Button size="small" onClick={handleOnSignInClick}>Sign In</Button>
                        <Button size="small" variant="contained" color="primary">Sign In With Google</Button>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default SignIn