import React from "react"
import QRCode from "qrcode.react"

import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import makeStyles from "@material-ui/styles/makeStyles"
import Typography from "@material-ui/core/Typography"

import Planets from "../assets/planets.png"
import { useHistory } from "react-router-dom"

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

    textHeader: {
        textAlign: "center",
        margin: 15
    }
})

const ProjectDetail = ({ match }) => {
    const { id } = match.params
    const classes = styles()
    const history = useHistory();

    return (
        <Grid container justify="center" className={classes.container}>
            <Typography className={classes.textHeader} variant="h2">Project Detail</Typography>
            <Grid container justify="space-around" alignItems="center" direction="row">
                <Grid item>
                    <QRCode size={250} value={`https://virtualroomcreator.herokuapp.com/viewer/${id}`} />
                    <Typography className={classes.textHeader} style={{ textDecoration: "underline" }}>
                        Scan to View on Mobile
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.textHeader}> {id}</Typography>
                    {/* <Input disabled={true} value={id} fullWidth margin/> */}
                    <Button
                        fullWidth
                        size="large"
                        variant="contained"
                        onClick={() => history.push(`/builder/${id}`)}
                        color="primary" style={{ marginTop: 15 }} > Open Editor</Button>
                    <Button
                        fullWidth
                        size="large"
                        variant="contained"
                        onClick={() => history.push(`/viewer/${id}`)}
                        color="primary" style={{ marginTop: 15 }} > Open Viewer</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ProjectDetail