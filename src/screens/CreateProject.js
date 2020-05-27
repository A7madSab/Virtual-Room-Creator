import React, { useState } from "react"

import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import makeStyle from "@material-ui/styles/makeStyles"
import { useSpring, animated } from "react-spring"

import { createProject } from "../redux/actions"
import { connect } from "react-redux"
import { useAuth0 } from "../utils/react-auth0-spa"
import { useHistory } from "react-router-dom"

import twoPeopleUsingVr from "../assets/two-people-with-vr.png"

const styles = makeStyle({
    container: {
        flex: 1,
        margin: 0,
        padding: 0,
        height: "85%",
        backgroundSize: "85%",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${twoPeopleUsingVr})`,
    },
    card: {
        margin: 10,
        padding: 5,
        boxShadow: "2px 2px 5px 3px #888888"
    }
})

const CreateProject = ({ createProject }) => {
    const [project, setProject] = useState({ title: "", content: "" })
    const { user } = useAuth0()
    const history = useHistory();

    const handleOnCreateProjectClick = async () => {
        await createProject({ ...project, email: user.email, name: user.name })
        history.push("/dashboard");
    }

    const classes = styles()
    const fadeIn = useSpring({
        from: {
            opacity: 0,
            transform: "translate3d(0,0,0) scale(0.5) rotateX(0deg)",
        }, to: {
            transform: "translate3d(0px,0,0) scale(1) rotateX(0deg)",
            opacity: 1,
        }
    })

    return (
        <Grid className={classes.container} container alignItems="center" justify="center" >
            <animated.div style={fadeIn}>
                <Card className={classes.card}>
                    <CardContent>
                        <Grid container direction="column" justify="center">
                            <Typography variant="h3" color="primary">Create Project</Typography>

                            <TextField type="text" label="Project Title" value={project.title} onChange={e => setProject({ ...project, title: e.target.value })} />
                            <TextField type="text" multiline label="Project Description" value={project.content} onChange={e => setProject({ ...project, content: e.target.value })} />
                            <Button
                                size="large"
                                variant="contained"
                                color="primary"
                                onClick={handleOnCreateProjectClick}
                                style={{ marginTop: 15 }}
                            >
                                Create Project
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>
            </animated.div>
        </Grid>
    )
}

const mapDispatchToProps = dispatch => ({
    createProject: project => dispatch(createProject(project))
})

export default connect(null, mapDispatchToProps)(CreateProject)
