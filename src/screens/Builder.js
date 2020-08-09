import React, { useEffect } from "react"
import { Grid, makeStyles, Hidden } from "@material-ui/core"

import ToolsSection from "../components/builder/sections/Tools.js"
import TabsSection from "../components/builder/sections/Tabs.js"
import SceneSection from "../components/builder/sections/Scene.js"

import { useAuth0 } from "../utils/react-auth0-spa"
import { openProject } from "../redux/actions"
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

const Builder = ({ openProject, match }) => {
  const { id } = match.params
  const { user } = useAuth0()
  const classes = useStyle()

  useEffect(() => {
    if (user) {
      openProject(user, id)
    }
  }, [user, openProject, id])

  return (
    <Grid container className={classes.root}>
      <Hidden mdDown>
        <Grid item xs={1} className={classes.tool}>
          <ToolsSection />
        </Grid>
      </Hidden>

      <Grid item xs={9}>
        <SceneSection />
      </Grid>

      <Hidden mdDown>
        <Grid item xs={2}>
          <TabsSection />
        </Grid>
      </Hidden>
    </Grid>
  )
}

const mapStateToProps = ({ projects }) => ({
  projects
})

const mapDispatchToProps = dispatch => ({
  openProject: (user, projectId) => dispatch(openProject(user, projectId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Builder)
