import React, { useEffect } from "react"
import { Grid, makeStyles } from "@material-ui/core"

import SceneSection from "../components/builder/sections/Scene.js"

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
  const { id } = match.params

  const classes = useStyle()
  useEffect(() => {
    viewProject(id)
  }, [viewProject, id])

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <SceneSection asViewer={true} />
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
