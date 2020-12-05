import React, { useEffect, useState } from "react"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import makeStyles from "@material-ui/styles/makeStyles"
import CircularProgress from "@material-ui/core/CircularProgress"

import { connect } from "react-redux"
import { useAuth0 } from "../utils/react-auth0-spa"
import { getProject } from "../redux/actions"

import ProjectThumbnail from "../components/ProjectThumbnail"
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
    }
})

const Dashboard = ({ projects, getProject }) => {
    const [loading, setLoading] = useState(true)
    const { user } = useAuth0()
    const classes = styles()

    useEffect(() => {
        (async () => {
            if (user) {
                await getProject(user)
                setLoading(false)
            }
        })()
    }, [user, getProject])

    return (
        <Grid container justify="center" className={classes.container}>
            <Typography variant="h2">Dashboard</Typography>
            <Grid container justify="center">
                {
                    loading
                        ? <Grid container justify="center" alignItems="center" direction="column">
                            <CircularProgress style={{ padding: 15 }} size={175} />
                            <Typography style={{ padding: 15 }}> Loading ...</Typography>
                        </Grid>
                        : projects?.map((project, key) => <ProjectThumbnail key={key} project={project} />)
                }
            </Grid>
        </Grid>
    )
}

const mapStateToProps = ({ projects }) => ({
    projects: projects.projects
})

const mapDispatchToProps = dispatch => ({
    getProject: user => dispatch(getProject(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)