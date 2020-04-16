import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import { Link } from "react-router-dom"

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    }
})

const ProjectDetais = ({ project }) => {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="logo192"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {project.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {project.content}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions con>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Link to={`/project/${project.id}`}>
                    <Button size="small" color="primary">
                        Details
                    </Button>
                </Link>
            </CardActions>
        </Card>

    )
}

export default ProjectDetais
