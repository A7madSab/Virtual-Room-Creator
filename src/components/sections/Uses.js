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
        flexDirection: "row",
        flex: 1,
        alignContent: "center",
        maxWidth: 300,
        textAlign: "center",
        margin: "auto"
    }
})

const Uses = ({ title, image }) => {
    const classes = styles()
    return (
        <Grid>
            <img src={image} className={classes.img} alt="feature" />
            <Typography>{title}</Typography>
        </Grid>
    )
}

export default Uses