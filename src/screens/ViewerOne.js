import React, { useState, useEffect } from "react"
import { Grid, makeStyles } from "@material-ui/core"

import SceneSection from "../components/builder/sections/Scene.js"
import Loading from "../screens/Loading"

import { viewProject } from "../redux/actions"
import { connect } from "react-redux"

const useStyle = makeStyles({
    root: {
        backgroundColor: "#212121",
        minHeight: "91.5vh",
        overflow: "hidden"
    },
    tool: {
        display: 'flex',
        alignItems: 'center',
    },
})

const Builder = ({ viewProject, match }) => {
    const id = "fa0aacc9-8dc8-42b8-ab8a-b5abc1caea78"
    const [loading, setLoading] = useState(true)
    const classes = useStyle()

    useEffect(() => {
        (async () => {
            await viewProject(id)
            setLoading(false)
        })()
    }, [viewProject, id])

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                {
                    loading
                        ? <Loading />
                        : <SceneSection asViewer={true} />
                }
            </Grid>
        </Grid>
    )
}

const mapStateToProps = ({ projects }) => ({
    projects
})

const mapDispatchToProps = dispatch => ({
    viewProject: (projectId) => dispatch(viewProject(projectId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Builder)
