import React, { useState } from "react"

import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"

import { createProject } from "../redux/actions"
import { connect } from "react-redux"

const CreateProject = ({ createProject }) => {
    const [project, setProject] = useState({ title: "", content: "" })
    const handleOnCreateProjectClick = () => {
        // console.log("project", project)
        createProject(project)
    }
    return (
        <Grid container alignItems="center" justify="center" >
            <Card>
                <CardContent>
                    <Grid container direction="column" justify="center">
                        <Typography variant="h3" color="primary">Create Project</Typography>

                        <TextField type="text" label="Project Title" value={project.title} onChange={e => setProject({ ...project, title: e.target.value })} />
                        <TextField type="text" multiline label="Project Description" value={project.content} onChange={e => setProject({ ...project, content: e.target.value })} />

                        <Button size="small" onClick={handleOnCreateProjectClick}>Create Project</Button>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}

const mapDispatchToProps = dispatch => ({
    createProject: project => dispatch(createProject(project))
})

export default connect(null, mapDispatchToProps)(CreateProject)