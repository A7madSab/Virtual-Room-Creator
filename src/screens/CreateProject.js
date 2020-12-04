import React from "react"

import * as Yup from "yup"
import { Formik } from "formik"

import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import makeStyle from "@material-ui/styles/makeStyles"
import { useSpring, animated } from "react-spring"
import { useSnackbar } from "notistack"

import useIsMountedRef from "../hooks/useIsMountedRef"
import { createProject } from "../redux/actions"
import { connect } from "react-redux"
import { useAuth0 } from "../utils/react-auth0-spa"
import { useHistory } from "react-router-dom"

import twoPeopleUsingVr from "../assets/two-people-with-vr.png"

const styles = makeStyle({
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
    card: {
        margin: 10,
        padding: 5,
        boxShadow: "2px 2px 5px 3px #888888"
    }
})

const CreateProject = ({ createProject }) => {
    const classes = styles()
    const { enqueueSnackbar } = useSnackbar()
    const { user } = useAuth0()
    const history = useHistory()
    const isMountedRef = useIsMountedRef()

    const handleOnCreateProjectClick = async (values, { setStatus, setSubmitting }) => {
        try {
            if (isMountedRef.current) {
                await createProject({ ...values, email: user.email, name: user.name })
                enqueueSnackbar("Created Project Successfully", { variant: "success" })
                history.push("/dashboard")
                setSubmitting(false)
            }
        } catch (err) {
            if (isMountedRef.current) {
                console.log("New Error", err)
                enqueueSnackbar("Something went wrong. Try Again!", { variant: "error" })
                setStatus({ success: false })
                setSubmitting(false)
            }
        }
    }

    const fadeIn = useSpring({
        from: {
            opacity: 0,
            transform: "translate3d(0,0,0) scale(0.5) rotateX(0deg)",
        }, to: {
            transform: "translate3d(0px,0,0) scale(1) rotateX(0deg)",
            opacity: 1,
        }
    })

    return (
        <Grid className={classes.container} container alignItems="center" justify="center" >
            <animated.div style={fadeIn}>
                <Card className={classes.card}>
                    <CardContent>
                        <Grid container direction="column" justify="center">
                            <Typography variant="h3" color="primary">Create Project</Typography>

                            <Formik
                                onSubmit={handleOnCreateProjectClick}
                                initialValues={{ title: "", content: "" }}
                                validationSchema={Yup.object().shape({
                                    title: Yup.string().min(2).max(255).required("Project title is required."),
                                    content: Yup.string().min(10).max(255).required("Project Description is required.")
                                })}
                            >
                                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                                    <form noValidate onSubmit={handleSubmit}>
                                        <TextField error={Boolean(touched.title && errors.title)} fullWidth helperText={touched.title && errors.title} label="Title" margin="normal" name="title" onBlur={handleBlur} onChange={handleChange} type="text" value={values.title} />
                                        <TextField error={Boolean(touched.content && errors.content)} fullWidth helperText={touched.content && errors.content} label="Project Description" margin="normal" name="content" onBlur={handleBlur} onChange={handleChange} type="text" value={values.content} />
                                        <Button size="large" variant="contained" color="primary" disabled={isSubmitting} onClick={handleSubmit} style={{ marginTop: 15 }} type="submit">
                                            Create Project
                                        </Button>
                                    </form>
                                )}
                            </Formik>

                        </Grid>
                    </CardContent>
                </Card>
            </animated.div>
        </Grid>
    )
}

const mapDispatchToProps = dispatch => ({
    createProject: project => dispatch(createProject(project))
})

export default connect(null, mapDispatchToProps)(CreateProject)
