import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { connect } from "react-redux"

import ProjectThumbnail from "../components/ProjectThumbnail"

const Dashboard = ({ projects }) => (
    <Grid container direction="column" >
        <Grid>
            <Typography variant="h2">Projects</Typography>
            <Grid container direction="row" style={{ overflow: "hidden" }}>
                {
                    projects?.map((project, key) => <ProjectThumbnail key={key} project={project} />)
                }
            </Grid>
        </Grid>
        <Grid>
            <Typography variant="h2">Gallary</Typography>
        </Grid>
    </Grid>
)

const mapStateToProps = ({ projects }) => ({
    projects
})

export default connect(mapStateToProps)(Dashboard)