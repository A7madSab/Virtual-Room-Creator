import React from "react"
import Button from "@material-ui/core/Button"
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import SaveIcon from "@material-ui/icons/Save"

import { connect } from "react-redux";
import { updateScene } from "../../../api/index.js";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
  
const SaveButton = ({ sceneReducer, meshReducer, lightReducer }) => {
    const [openSuccess, setOpenSuccess] = React.useState(false);
    const [openError, setOpenError] = React.useState(false);

    const handleClickSuccess = () => setOpenSuccess(true);
    const handleCloseSuccess = (event, reason) => {
        if (reason === 'clickaway')
            return;
        setOpenSuccess(false);
    };

    const handleClickError = () => setOpenError(true);
    const handleCloseError = (event, reason) => {
        if (reason === 'clickaway')
            return;
        setOpenError(false);
    };

    async function saveScene() {
        let sceneId = sceneReducer.sceneId;
        const response = await updateScene(sceneId, sceneReducer, meshReducer, lightReducer);
        if (response.code === 200) {
            handleClickSuccess();
        }
        else {
            handleClickError();
        }
    }
    return (
        <>
            <Button
                onClick={() => saveScene()}
                startIcon={<SaveIcon />}
                variant="contained"
                color="secondary"
                style={{ marginTop: "2%", width: "100%" }}
            >
                Save Project
        </Button>
            <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleCloseSuccess}>
                <Alert onClose={handleCloseSuccess} severity="success">
                    Save Success !
                </Alert>
            </Snackbar>
            <Snackbar open={openError} autoHideDuration={6000} onClose={handleCloseError}>
                <Alert onClose={handleCloseError} severity="error">
                    Can not save scene try agin !
                </Alert>
            </Snackbar>
        </>
    )
}

const mapStateToProps = state => ({
    sceneReducer: state.sceneReducer,
    meshReducer: state.meshReducer,
    lightReducer: state.lightReducer
});

export default connect(mapStateToProps,)(SaveButton);
