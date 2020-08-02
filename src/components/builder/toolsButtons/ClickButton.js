import React from "react";
import { makeStyles, IconButton, Divider } from "@material-ui/core";
import { NearMeOutlined } from "@material-ui/icons"
import { connect } from "react-redux";

import { cancelSelectMesh } from "../../../redux/actions.js"
const useStyle = makeStyles((theme) => ({
    button: {
        color: "white",
        padding: "10%",
        marginTop: "12%",
        marginBottom: "10%"
    },
}));

const ClickButton = ({cancelSelectMesh}) => {
    const classes = useStyle();
    return (
        <React.Fragment>
            <IconButton className={classes.button} onClick={() => cancelSelectMesh()}>
                <NearMeOutlined fontSize="large" />
            </IconButton>
            <Divider />
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    meshes: state.meshReducer
})
const mapDispatchToProps = dispatch => ({
    cancelSelectMesh: () => dispatch(cancelSelectMesh())
})

export default connect(mapStateToProps, mapDispatchToProps)(ClickButton)
