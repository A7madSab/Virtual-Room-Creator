import React from "react"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import makeStyles from "@material-ui/styles/makeStyles"
import { useSpring, animated } from "react-spring"

import { useAuth0 } from "../utils/react-auth0-spa"

import twoPeopleUsingVr from "../assets/two-people-with-vr.png"

const styles = makeStyles({
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
    items: {
        padding: 50,
        textAlign:"center"
    },
    card: {
        boxShadow: "2px 2px 5px 3px #888888"
    },
    image: {
        borderRadius: 100,
        width: 150
    }
})

const Profile = () => {
    const { loading, user } = useAuth0()
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

    if (loading || !user) {
        return <div>Loading...</div>
    }

    return (
        <Grid className={classes.container} container justify="center" alignItems="center">
            <animated.div style={fadeIn}>
                <Card className={classes.card}>
                    <Grid item className={classes.items}>
                        <img className={classes.image} src={user.picture} alt="Profile" />
                    </Grid>
                    <Grid item className={classes.items}>
                        <Typography>{user.name}</Typography>
                        <Typography>{user.email}</Typography>
                        <Typography>Projects: {0}</Typography>
                    </Grid>
                </Card>
            </animated.div>
        </Grid>
    )
}

export default Profile
