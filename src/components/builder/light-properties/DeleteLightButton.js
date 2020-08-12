import React from "react"
import Button from "@material-ui/core/Button"
import ClearIcon from '@material-ui/icons/Clear';

import { connect } from "react-redux";
import { deleteLight } from "../../../redux/actions.js";


const DeleteLightButton = ({ lightReducer, deleteLight }) => {
  
    return (
            <Button
                onClick={() => deleteLight(lightReducer.selectedLight.id)}
                startIcon={<ClearIcon />}
                variant="contained"
                color="secondary"
                style={{ marginTop: "2%", width: "100%" }}
            >
                Delete Light
        </Button>
    )
}

const mapStateToProps = state => ({
    lightReducer: state.lightReducer
});

const mapDispatchToProps = dispatch => ({
    deleteLight: (id ) => dispatch(deleteLight(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteLightButton);
