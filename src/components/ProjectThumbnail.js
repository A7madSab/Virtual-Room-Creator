import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import VRPerson from "../assets/person-sitting-with-vr.png"

import { useHistory } from "react-router-dom"

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: 15,
        height: 280,
        boxShadow: "2px 2px 5px 3px #777"
    },
    image: {
        height: 140,
    }
})

const ProjectDetais = ({ project }) => {
    const classes = useStyles()
    const history = useHistory();

    return (
        <Card className={classes.root}>
            <CardActionArea onClick={() => history.push(`/project/${project.projectid}`)}>
                <img
                    alt="project"
                    src={VRPerson}
                    className={classes.image}
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="h2">
                        {project.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {project.content}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <Button fullWidth variant="text" color="primary" onClick={() => history.push(`/project/${project.projectid}`)}>
                Details
            </Button>
        </Card>
    )
}

export default ProjectDetais
