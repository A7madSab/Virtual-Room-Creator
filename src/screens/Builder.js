import React from "react";
import { Grid, makeStyles, Hidden } from "@material-ui/core";

import ToolsSection from "../components/builder/sections/Tools.js";
import TabsSection from "../components/builder/sections/Tabs.js";
import SceneSection from "../components/builder/sections/Scene.js";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "#212121",
    minHeight: "91.5vh",
    overflow: "hidden"
  },
  tool: {
    display: 'flex',
    alignItems: 'center',
  },
}));

function Builder() {
  const classes = useStyle();
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
  );
}

export default Builder;
