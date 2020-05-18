import React from "react"

import Grid from "@material-ui/core/Grid"
import makeStyles from "@material-ui/styles/makeStyles"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"

const styles = makeStyles({
    textContainer: {
        flexDirection: "row",
        flex: 1,
        alignContent: "center",
        maxWidth: 300,
        textAlign: "center",
        margin: "auto"
    }
})

const Feature = ({ title, description, image }) => {
    const classes = styles()
    return (
        <Card className={classes.card}>

            <Grid container justify="space-around" direction="row">
                <Grid item xs>
                    <img width={300} src={image} alt="feature" />
                </Grid>
                <Grid item xs className={classes.textContainer}>
                    <Typography>{title}</Typography>
                    <Typography>{description}</Typography>
                </Grid>
            </Grid>

        </Card>
    )
}

export default Feature