import React, { useState } from "react"

// Material-UI
import Grid from "@material-ui/core/Grid"
import Tabs from "@material-ui/core/Tabs"
import makeStyles from "@material-ui/styles/makeStyles"
import Typography from "@material-ui/core/Typography"
import Input from "@material-ui/core/Input"
import Button from "@material-ui/core/Button"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Box from "@material-ui/core/Box"
import Drawer from "@material-ui/core/Drawer"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
// import { useSpring, animated } from "react-spring"
// import { Keyframes } from 'react-spring/renderprops'

// Components
import Feature from "../components/sections/Feature"
import Use from "../components/sections/Use"
import Application from "../components/sections/Application"
import Review from "../components/sections/Review"
import Technology from "../components/sections/Technology"
import { useAuth0 } from "../utils/react-auth0-spa"

// Assets
import VRPerson from "../assets/person-with-vr.png"
import UsesIcon from "../assets/Uses.png"
import VRPeople from "../assets/people-using-vr.png"
import buildingVR from "../assets/Building-VR.png"
import personWearingVr from "../assets/person-wearing-vr.png"
import footerBackground from "../assets/footer-background.png"
import sittingVrPerson from "../assets/person-sitting-with-vr.png"
import screenVrPerson from "../assets/person-screen-vr.png"
import gameUsingVr from "../assets/game-using-vr.png"
import chemistryUsingVr from "../assets/chemistry-using-vr.png"
import experemntUsingVr from "../assets/experemnt-using-vr.png"
import teachingUsingVr from "../assets/Teaching-using-Vr.png"
import threejs from "../assets/three.png"
import react from "../assets/react.png"
import node from "../assets/node.png"

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
    applicationContainer: {
        padding: 35,
        backgroundImage: `url(${buildingVR})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        background: "#5851EA"
    },
    reviewContainer: {
        padding: 35,
        backgroundImage: `url(${buildingVR})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        background: "#5851EA"
    },
    subscribeContainer: {
        padding: 35,
        // backgroundImage: `url(${buildingVR})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        background: "#505BEC"
    },
    footerContainer: {
        // backgroundColor: "#505BEC",
        padding: 15,
        backgroundSize: "cover",
        backgroundImage: `url(${footerBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        height: 250,
        textAlign: "center",
    },
    VRCtitle: {
        fontSize: "4em",
        textShadow: "2px 2px 4px #000000",
        color: "#ffff",
        fontWeight: "600",
        textAlign: "center"
    },
    VRCslogan: {
        fontSize: "2.5em",
        color: "#ffff",
        fontWeight: "600",
        textAlign: "center"
    },
    title: {
        fontSize: "2em",
        textAlign: "center",
        textDecoration: "underline",
        textDecorationColor: "#505BEC"
    },
    whiteTitle: {
        fontSize: "2em",
        textAlign: "center",
        textDecoration: "underline",
        textDecorationColor: "#505BEC",
        color: "white",
    },
    subtitle: {
        fontSize: "1em",
        textAlign: "center",
        padding: 15
    },
    whiteSubtitle: {
        fontSize: "1em",
        textAlign: "center",
        padding: 15,
        color: "white",
    },
    textContainer: {
        flex: 1,
        alignContent: "center",
        maxWidth: 350,
        textAlign: "center",
        margin: "auto",
    }
})

const features = [{
    image: VRPerson,
    title: "Amet duis tempor",
    description: "Lorem nostrud labore consequat sunt enim est aute incididunt ad ea non ut sint. Ex amet laboris ipsum sint cupidatat anim consectetur magna anim ipsum irure. Culpa est duis in elit."
}, {
    image: sittingVrPerson,
    title: "Amet duis tempor",
    description: "Lorem nostrud labore consequat sunt enim est aute incididunt ad ea non ut sint. Ex amet laboris ipsum sint cupidatat anim consectetur magna anim ipsum irure. Culpa est duis in elit."
}]

const applications = [{
    image: screenVrPerson,
    title: "Visual Tours",
    description: "Cupidatat laborum dolore cillum id mollit duis ad. Elit nulla velit eu dolore exercitation ullamco consequat sint. Sunt ex ad excepteur sunt laborum nostrud sit eu occaecat commodo non aliquip minim. Ut enim excepteur dolor esse excepteur enim dolore consectetur mollit tempor.",
    inverted: false
}, {
    image: personWearingVr,
    title: "Historial Tours",
    description: "Nulla consectetur do cillum irure quis culpa pariatur voluptate ullamco elit adipisicing eiusmod eiusmod. Commodo occaecat in aliqua consectetur exercitation irure aliqua quis anim. Sunt aute reprehenderit non Lorem fugiat ea velit do pariatur sit non. Amet sunt ut nisi non pariatur do quis cillum. Laborum fugiat est magna consectetur consequat elit. Qui qui et ipsum elit non nisi ipsum aliquip sint minim sit irure tempor. Tempor et laborum aliquip aliquip qui ut tempor.",
    inverted: true
}]

const uses = [{
    image: gameUsingVr,
    title: "Gaming In VR"
}, {
    image: chemistryUsingVr,
    title: "Chemistry In VR"
}, {
    image: experemntUsingVr,
    title: "Experiment In VR"
}, {
    image: teachingUsingVr,
    title: "Teaching In VR "
},]

const review = [{
    name: "Adam Smith",
    position: "CEO",
    initial: "A",
    review: "This impressive paella is a perfect party dish and a fun meal to cooktogether with your guests. Add 1 cup of frozen peas along with themussels, if you like."
}, {
    name: "Adam Smith",
    position: "CEO",
    initial: "A",
    review: "This impressive paella is a perfect party dish and a fun meal to cooktogether with your guests. Add 1 cup of frozen peas along with themussels, if you like."
}, {
    name: "Adam Smith",
    position: "CEO",
    initial: "A",
    review: "This impressive paella is a perfect party dish and a fun meal to cooktogether with your guests. Add 1 cup of frozen peas along with themussels, if you like."
}, {
    name: "Adam Smith",
    position: "CEO",
    initial: "A",
    review: "This impressive paella is a perfect party dish and a fun meal to cooktogether with your guests. Add 1 cup of frozen peas along with themussels, if you like."
}]

const technology = [{
    image: node,
    title: "Node"
}, {
    image: threejs,
    title: "THREE"
}, {
    image: react,
    title: "React"
}, {
    image: node,
    title: "Node"
}]


const LandingPage = () => {
    const classes = styles()
    const [state, setState] = useState(false)
    const { loginWithRedirect } = useAuth0()
    const [yAxis, setY] = useState(true)
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up("md"))

    const toggleDrawer = open => event => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return
        }

        setState(open)
    }

    const sideList = () => (
        <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {["home", "brochure", "about", "contact"].map(text => (
                    <ListItem
                        button
                        key={text}
                    >
                        {/* <ListItemIcon>
                            {text === "home" ? (
                                // <HomeIcon />
                            ) : text === "brochure" ? (
                                // <BrochureIcon />
                            ) : text === "about" ? (
                                // <InfoIcon />
                            ) : (
                                // <ContactSupportIcon />
                            )}
                        </ListItemIcon> */}
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <List>
                {["products", "blogs"].map(text => (
                    <ListItem
                        button
                        key={text}
                    >
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    )
    return (
        <Grid container justify="center" className={classes.container}>
            {/* App Bar */}
            <AppBar elevation={0} color={yAxis ? "primary" : "secondary"}>
                <Toolbar style={{ backgroundColor: "transparent" }}>
                    {matches ? (
                        <Grid container direction="row" justify="space-around" alignItems="center"  >
                            <Button edge="start" color="inherit">
                                <img src={node} height={60} alt="logo" />
                            </Button>
                            <Button color={yAxis ? "inherit" : "primary"}>
                                Brochure
                            </Button>
                            <Button color={yAxis ? "inherit" : "primary"}>
                                Products
                            </Button>
                            <Button color={yAxis ? "inherit" : "primary"}>
                                About Us
                            </Button>
                            <Button color={yAxis ? "inherit" : "primary"}>
                                Contact Us
                            </Button>
                        </Grid>
                    ) : (
                            <Box flexGrow="1" alignItems="center" display="flex" justifyContent="space-between"                            >
                                <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={toggleDrawer(true)}>
                                    MenuIcon
                                </IconButton>
                                <Drawer open={state} onClose={toggleDrawer(false)}>
                                    {sideList()}
                                </Drawer>
                                <Button edge="start" color="inherit">
                                    {/* <img src={logo} height={80} alt="logo" /> */}
                                </Button>
                            </Box>
                        )}
                </Toolbar>
            </AppBar>


            {/* Title */}
            <Grid container direction="column" justify="center" alignItems="center" className={classes.homeContainer}>
                <Typography className={classes.VRCtitle}>
                    Virtual Room Creator
                </Typography>
                <Typography className={classes.VRCslogan}>
                    Visualize Education
                </Typography>
                <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    onClick={() => loginWithRedirect({})}
                >
                    Getting Started
                </Button>
            </Grid>


            {/* Features */}
            <Grid container justify="center" direction="column" style={{ padding: 35 }} >
                <Typography className={classes.title}>
                    Features
                </Typography>
                <Typography className={classes.subtitle}>
                    Our innovative method of creating and rendering Virtual Scenes include
                </Typography>
                <Grid container justify="space-around" direction="row">
                    {
                        features.map(({ image, title, description }, key) => <Feature key={key} image={image} title={title} description={description} />)
                    }
                </Grid>
            </Grid>

            {/* Application */}
            <Grid container justify="center" direction="column" className={classes.applicationContainer} >
                <Typography className={classes.whiteTitle}>
                    Application
                </Typography>
                <Typography className={classes.whiteSubtitle}>
                    Our innovative method of creating and rendering Virtual Scenes include
                </Typography>
                <Grid container justify="space-around" direction="column">
                    {
                        applications.map(({ image, title, description, inverted }, key) => <Application key={key} image={image} title={title} description={description} inverted={inverted} />)
                    }
                </Grid>
            </Grid>

            {/* Uses */}
            <Grid container justify="center" direction="column" style={{ padding: 35 }}>
                <Typography className={classes.title}>
                    Uses
                </Typography>
                <Typography className={classes.subtitle}>
                    Our innovative method of creating and rendering Virtual Scenes include
                </Typography>
                <Grid container justify="space-around" direction="row">
                    {
                        uses.map(({ image, title }) => <Use image={image} title={title} />)
                    }
                </Grid>
            </Grid>


            {/* Review */}
            <Grid container justify="center" direction="column" className={classes.reviewContainer}>
                <Typography className={classes.whiteTitle}>Reviews</Typography>
                <Grid style={{ width: "100%" }}>
                    <Tabs indicatorColor="primary" textColor="primary" variant="scrollable" scrollButtons="on" aria-label="scrollable auto tabs example">
                        {
                            review.map(({ name, position, initial, review }) => <Review name={name} position={position} initial={initial} review={review} />)
                        }
                    </Tabs>
                </Grid>
            </Grid>

            {/* Technology */}
            <Grid container justify="center" direction="column" style={{ padding: 35 }}>
                <Typography className={classes.title}>Technology</Typography>
                <Grid container justify="space-around" alignItems="center" direction="row">
                    {
                        technology.map(({ title, image }) => <Technology title={title} image={image} />)
                    }
                </Grid>
            </Grid>

            {/* Subscribe Newsletters & Get Resources */}
            {/* <Grid container justify="center" direction="column" className={classes.subscribeContainer}>
            </Grid> */}

            {/* Footer */}
            <Grid container justify="center" direction="column" className={classes.footerContainer}>
                <Typography className={classes.whiteTitle}>Subscribe Newsletters & Get Resources</Typography>

                <Grid container justify="center" direction="row" style={{ padding: 15 }}>
                    <Input placeholder="enter your email" />
                    <Button>Subscribe</Button>
                </Grid>
            </Grid>
        </Grid >
    )
}

export default LandingPage