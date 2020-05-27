import React from 'react'

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import makeStyles from "@material-ui/styles/makeStyles"

import Planets from "../assets/planets.png"

const styles = makeStyles({
    container: {
        margin: 0,
        padding: 0,
        height: "85%",
        backgroundSize: "100%",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${Planets})`
    },
    button: {
        width: 175,
        margin: 15
    }
})
const NotFound = () => {
    const classes = styles()
    return (
        <Grid container direction="column" justify="center" alignItems="center" className={classes.container}>
            <Grid item style={{ padding: 50 }}>
                <Typography align="center" variant="h2">Page not found</Typography>
                <Typography align="center">Go back to</Typography>
            </Grid>

            <Grid item>
                <Button className={classes.button} variant="contained" color="primary">Dashboard</Button>
                <Button className={classes.button} variant="contained" color="primary">Create Project</Button>
                <Button className={classes.button} variant="contained" color="primary">Profile</Button>
            </Grid>
        </Grid>
    )
}
export default NotFound