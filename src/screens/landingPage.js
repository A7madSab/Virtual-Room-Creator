import React, { useState } from "react"

// Material-UI
import Grid from "@material-ui/core/Grid"
import Tabs from "@material-ui/core/Tabs"
import makeStyles from "@material-ui/styles/makeStyles"
import Typography from "@material-ui/core/Typography"
import Input from "@material-ui/core/Input"
import Button from "@material-ui/core/Button"

// Components
import Feature from "../components/sections/Feature"
import Uses from "../components/sections/Uses"
import Application from "../components/sections/Application"
import Review from "../components/sections/Review"
import Technology from "../components/sections/Technology"

// Assets
import buildingVR from "../assets/Building-VR.png"
import VRPerson from "../assets/person-with-vr.png"
import UsesIcon from "../assets/Uses.png"
import personWearingVr from "../assets/person-wearing-vr.png"
import footerBackground from "../assets/footer-background.png"

const styles = makeStyles({
    container: {
        height: "100%"
    },
    homeContainer: {
        height: "100vh",
        backgroundImage: `url(${buildingVR})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        background: "#5851EA"
    },
    footerContainer: {
        backgroundColor: "#505BEC",
        backgroundSize: "cover",
        backgroundImage: `url(${footerBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: 250,
        textAlign: "center",
    },
    VRCtitle: {
        fontSize: "3em",
        color: "#ffff",
        fontWeight: "600",
        textAlign: "center"
    },
    VRCslogan: {
        fontSize: "2.5em",
        color: "#FF8891",
        fontWeight: "600",
        textAlign: "center"
    },
    title: {
        fontSize: "2em",
        textAlign: "center"
    },
    subtitle: {
        fontSize: "1em",
        textAlign: "center"
    },
    textContainer: {
        flex: 1,
        alignContent: "center",
        maxWidth: 350,
        textAlign: "center",
        margin: "auto",
    }
})

const features = {
    image: VRPerson,
    title: "Amet duis tempor",
    description: "Lorem nostrud labore consequat sunt enim est aute incididunt ad ea non ut sint. Ex amet laboris ipsum sint cupidatat anim consectetur magna anim ipsum irure. Culpa est duis in elit."
}

const LandingPage = () => {
    const classes = styles()
    const [value, setValue] = useState(0)

    return (
        <Grid container justify="center" className={classes.container}>

            {/* Title */}
            <Grid container direction="column" justify="center" alignItems="center" className={classes.homeContainer}        >
                <Typography className={classes.VRCtitle}>
                    Visualize Education
                </Typography>
                <Typography className={classes.VRCslogan}>
                    Virtual Room Creator
                </Typography>
            </Grid>

            {/* Features */}
            <Grid container justify="center" direction="column">
                <Typography className={classes.title}>
                    Features
                </Typography>
                <Typography className={classes.subtitle}>
                    Our innovative method of creating and rendering Virtual Scenes include
                </Typography>
                <Grid container justify="space-around" direction="row">
                    <Feature image={features.image} title={features.title} description={features.description} />
                    <Feature image={features.image} title={features.title} description={features.description} />
                </Grid>
            </Grid>

            {/* Uses */}
            <Grid container justify="center" direction="column">
                <Typography className={classes.title}>
                    Uses
                </Typography>
                <Typography className={classes.subtitle}>
                    Our innovative method of creating and rendering Virtual Scenes include
                </Typography>
                <Grid container justify="space-around" direction="row">
                    <Uses image={UsesIcon} title={features.title} />
                    <Uses image={UsesIcon} title={features.title} />
                    <Uses image={UsesIcon} title={features.title} />
                    <Uses image={UsesIcon} title={features.title} />
                </Grid>
            </Grid>

            {/* Application */}
            <Grid container justify="center" direction="column">
                <Typography className={classes.title}>
                    Application
                </Typography>
                <Typography className={classes.subtitle}>
                    Our innovative method of creating and rendering Virtual Scenes include
                </Typography>
                <Grid container justify="space-around" direction="column">
                    <Application image={personWearingVr} title={features.title} description={features.description} />
                    <Application image={personWearingVr} title={features.title} description={features.description} inverted />
                </Grid>
            </Grid>

            {/* Review */}
            <Grid container justify="center" direction="column" style={{ backgroundColor: "#505BEC", height: 300 }}>
                <Typography className={classes.title}>Users Review</Typography>
                <Grid style={{ overflow: "scroll", width: "100%", WebkitOverflowScrolling: "touch" }}>
                    <Tabs
                        value={value}
                        onChange={(item, newValue) => setValue(newValue)}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="on"
                        aria-label="scrollable auto tabs example"
                    >
                        <Review name="Adam Smith" position="CEO" initial="A" review="This impressive paella is a perfect party dish and a fun meal to cooktogether with your guests. Add 1 cup of frozen peas along with themussels, if you like." />
                        <Review name="Adam Smith" position="CEO" initial="A" review="This impressive paella is a perfect party dish and a fun meal to cooktogether with your guests. Add 1 cup of frozen peas along with themussels, if you like." />
                        <Review name="Adam Smith" position="CEO" initial="A" review="This impressive paella is a perfect party dish and a fun meal to cooktogether with your guests. Add 1 cup of frozen peas along with themussels, if you like." />
                        <Review name="Adam Smith" position="CEO" initial="A" review="This impressive paella is a perfect party dish and a fun meal to cooktogether with your guests. Add 1 cup of frozen peas along with themussels, if you like." />
                        <Review name="Adam Smith" position="CEO" initial="A" review="This impressive paella is a perfect party dish and a fun meal to cooktogether with your guests. Add 1 cup of frozen peas along with themussels, if you like." />
                    </Tabs>
                </Grid>
            </Grid>

            {/* Technology */}
            <Grid container justify="space-around" direction="row">
                <Technology image={VRPerson} title="Three.js" />
                <Technology image={VRPerson} title="Three.js" />
                <Technology image={VRPerson} title="Three.js" />
                <Technology image={VRPerson} title="Three.js" />
            </Grid>

            {/* Subscribe Newsletters & Get Resources */}
            <Grid container justify="center" direction="column">
                <Typography className={classes.title}>Subscribe Newsletters & Get Resources</Typography>

                <Grid container justify="center" direction="row">
                    <Input placeholder="enter your email" />
                    <Button>Subscribe</Button>
                </Grid>
            </Grid>

            {/* Footer */}
            <Grid container justify="center" direction="row" className={classes.footerContainer}>
                <Grid item xs={3}>
                    one
                </Grid>
                <Grid item xs={3}>
                    two
                </Grid>
                <Grid item xs={3}>
                    three
                </Grid>
                <Grid item xs={3}>
                    four
                </Grid>
            </Grid>
        </Grid>
    )
}

export default LandingPage