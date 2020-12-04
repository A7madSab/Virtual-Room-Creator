import React from "react"
import Grid from "@material-ui/core/Grid"
import CircularProgress from "@material-ui/core/CircularProgress"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
    root: {
        flex: 1,
        width: "100vw",
        height: "100vh",
        backgroundColor: theme.palette.secondary.main
    }
}))

const SplashScreen = () => {
    const classes = styles()
    return (
        <Grid className={classes.root} container justify="center" alignItems="center" direction="column">
            <CircularProgress style={{ padding: 15 }} size={175} />
            <Typography style={{ padding: 15 }}> Loading ...</Typography>
        </Grid>
    )
}

export default SplashScreen
