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
        maxWidth: 250,
        textAlign: "center",
        margin: "auto"
    },
    title: {
        fontSize: "1.4em",
        textAlign: "center",
        textDecoration: "underline",
        textDecorationColor: "#505BEC"
    },
    card: {
        margin: 10,
        padding: 5,
        boxShadow: "2px 2px 5px 3px #888888"
    }
})

const Feature = ({ title, description, image }) => {
    const classes = styles()
    return (
        <Card className={classes.card}>
            <Grid container justify="space-around" direction="row">
                <Grid item>
                    <img width={350} style={{ overflow: "hidden" }} src={image} alt="feature" />
                </Grid>
                <Grid item xs className={classes.textContainer}>
                    <Typography className={classes.title}>{title}</Typography>
                    <Typography>{description}</Typography>
                </Grid>
            </Grid>
        </Card>
    )
}

export default Feature