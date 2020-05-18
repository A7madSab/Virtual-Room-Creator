import React from "react"

import Grid from "@material-ui/core/Grid"
import makeStyles from "@material-ui/styles/makeStyles"
import Typography from "@material-ui/core/Typography"

const styles = makeStyles({
    img: {
        borderRadius: "50%",
        width: "150px"
    }
})

const Uses = ({ title, image }) => {
    const classes = styles()
    return (
        <Grid>
            <img src={image} className={classes.img} alt="feature" />
            <Typography style={{ textAlign: "center" }}>{title}</Typography>
        </Grid>
    )
}

export default Uses