import React from "react"
import Button from "@material-ui/core/Button"
import SaveIcon from "@material-ui/icons/Save"
import { useHistory } from "react-router-dom"
import { useSnackbar } from "notistack"

import { connect } from "react-redux"
import { updateScene } from "../../../api/index.js"

const CloseBotton = ({ sceneReducer, meshReducer, lightReducer, selectedProject }) => {
    const { enqueueSnackbar } = useSnackbar()
    const history = useHistory()

    async function saveScene() {
        let sceneId = sceneReducer.sceneId
        const response = await updateScene(sceneId, sceneReducer, meshReducer, lightReducer)
        if (response.code === 200) {
            history.push(`/project/${selectedProject.projectid}`)
            enqueueSnackbar("Saved Project Successfully", { variant: "success" })
        }
        else {
            enqueueSnackbar("Something went wrong. Try Again!", { variant: "error" })
        }
    }

    return (
        <Button
            onClick={() => saveScene()}
            startIcon={<SaveIcon />}
            variant="contained"
            color="primary"
            style={{ marginTop: "2%", width: "100%" }}
        >
            Close
        </Button>
    )
}

const mapStateToProps = state => ({
    sceneReducer: state.sceneReducer,
    meshReducer: state.meshReducer,
    lightReducer: state.lightReducer,
    selectedProject: state.projects.selectedProject
})

export default connect(mapStateToProps)(CloseBotton)
