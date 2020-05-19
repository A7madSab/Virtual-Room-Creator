import React from "react"

import Card from "@material-ui/core/Card"
import Box from "@material-ui/core/Box"
import Avatar from "@material-ui/core/Avatar"
import CardHeader from "@material-ui/core/CardHeader"
import Typography from "@material-ui/core/Typography"
import CardContent from "@material-ui/core/CardContent"
import makeStyles from "@material-ui/core/styles/makeStyles"
import { getRandomColor } from "../../utils"

const useStyles = makeStyles({
    container: {
        height: 200,
        minWidth: 340,
        margin: 10,
        display: "felx",
        flexDirection: "column",
        whiteSpace: "initial",
        justifyContent: "center"
    },
})

const Review = ({ initial, name, position, review }) => {
    const classes = useStyles()
    return (
        <Card className={classes.container}>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {review}
                </Typography>
            </CardContent>
            <Box display="flex" alignContent="center" justifyContent="center">
                <CardHeader
                    title={name}
                    subheader={position}
                    avatar={<Avatar aria-label="recipe" style={{ backgroundColor: getRandomColor() }}>{initial}</Avatar>}
                />
            </Box>
        </Card>
    )
}

export default Review