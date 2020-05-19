import React from "react"

import Grid from "@material-ui/core/Grid"
import makeStyles from "@material-ui/styles/makeStyles"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"

const styles = makeStyles({
    textContainer: {
        textAlign: "center",
    },
    image: {
        width: "25vw"
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
        boxShadow: "2px 2px 5px 3px #505BEC"
    }
})

const Uses = ({ title, image, description, inverted }) => {
    const classes = styles()
    return (

        <Grid container direction={inverted ? "row-reverse" : "row"} alignItems="center" justify="space-evenly">
            <Grid item lg={4}>
                <Grid container justify="center">
                    <img className={classes.image} src={image} alt="feature" />
                </Grid>
            </Grid>
            <Grid item lg={4} xs={12} className={classes.textContainer}>
                <Card className={classes.card} style={{ padding: 15 }}>
                    <Typography className={classes.title}>{title}</Typography>
                    <Typography>{description}</Typography>
                </Card>
            </Grid>
        </Grid>

    )
}

export default Uses