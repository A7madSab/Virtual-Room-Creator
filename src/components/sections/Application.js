import React from "react"

import Grid from "@material-ui/core/Grid"
import makeStyles from "@material-ui/styles/makeStyles"
import Typography from "@material-ui/core/Typography"

const styles = makeStyles({
    textContainer: {
        alignContent: "center",
        textAlign: "center",
    }
})

const Uses = ({ title, image, inverted }) => {
    const classes = styles()
    return (
        <Grid container direction={inverted ? "row-reverse" : "row"} justify="space-evenly">
            <Grid item xs={3}>
                <img width="350" src={image} alt="feature" style={{ alignSelf: "center" }} />
            </Grid>
            <Grid item xs={3} className={classes.textContainer}>
                <Typography>{title}</Typography>
                <Typography>
                    Aliquip ipsum mollit incididunt ut ad deserunt anim cupidatat anim laborum pariatur elit nisi. Sit elit aliqua aliqua aute sunt qui. Lorem cillum culpa occaecat exercitation labore. Ea in amet ipsum consectetur velit deserunt ut minim elit commodo ea est. Nostrud nostrud ut laborum velit minim nulla. Elit elit nostrud ad enim nulla sint officia commodo fugiat est dolore ex. Velit in duis reprehenderit deserunt est ullamco incididunt sit duis velit nisi ut eiusmod.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Uses