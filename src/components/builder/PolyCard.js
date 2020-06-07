import React from "react";
import { makeStyles, Typography, Grid, Card, CardContent, CardActionArea, CardMedia} from "@material-ui/core";
import PolyImage from "../../assets/builder/google-poly.png";

const useStyle = makeStyles((theme) => ({
    root: {
        padding: '0.5%',
    },
    content: {
        padding: '5%',
    },

}));

export default function PolyCard(props) {
    const classes = useStyle();
    return (
        <Grid item lg={2} md={4} xs={2} className={classes.root}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        classes={{ root: classes.img }}
                        image={PolyImage}
                        title="Google Poly Image"
                        height='150'
                    />
                    <CardContent className={classes.content}>
                        <Typography gutterBottom  variant="h6" component="h6">
                            Poly
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            Discover, and download thousands of free 3D objects.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}


