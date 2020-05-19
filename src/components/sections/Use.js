import React from "react"

import Grid from "@material-ui/core/Grid"
import makeStyles from "@material-ui/styles/makeStyles"
import Typography from "@material-ui/core/Typography"

const styles = makeStyles({
    img: {
        borderRadius: "50%",
        width: "150px"
    },
    textContainer: {
        flex: 1,
        flexDirection: "row",
        alignContent: "center",
        maxWidth: 300,
        textAlign: "center",
        margin: "auto"
    }
})

const Use = ({ title, image }) => {
    const classes = styles()
    return (
        <Grid className={classes.textContainer}>
            <img src={image} className={classes.img} alt="feature" />
            <Typography>{title}</Typography>
        </Grid>
    )
}

export default Use