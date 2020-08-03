import React from "react";
import { makeStyles, Typography, Grid, Card, CardContent, CardActionArea, CardMedia } from "@material-ui/core";
import { addMesh } from "../../redux/actions"
import { connect } from "react-redux"
import { getModelURL } from "../../api"
// import PolyImage from "../../assets/builder/google-poly.png";

const useStyle = makeStyles((theme) => ({
    root: {
        padding: '0.5%',
        overflow: "hidden"
    },
    content: {
        padding: '5%',
    },
    descriptionText: {
        height: "75px",
        overflow: "hidden"
    },
    card: {
        minHeight: "250px"
    }
}));

const PolyCard = ({ addMesh, model, close }) => {
    const classes = useStyle();
    const handleOnCardPress = (model) => {
        addMesh("Poly", getModelURL(model))
        close()
    }
    return (
        <Grid item lg={2} md={4} xs={2} className={classes.root}>
            <Card onClick={() => handleOnCardPress(model)} className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        classes={{ root: classes.img }}
                        image={model.thumbnail.url}
                        title="Google Poly Image"
                        height='150'
                    />
                    <CardContent className={classes.content}>
                        <Typography gutterBottom variant="h6" component="h6">
                            {model.displayName} - by {model.authorName}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" className={classes.descriptionText}>
                            {model.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

const mapDispatchToProps = dispatch => ({
    addMesh: (type, mesh) => dispatch(addMesh(type, mesh))
})

export default connect(null, mapDispatchToProps)(PolyCard)