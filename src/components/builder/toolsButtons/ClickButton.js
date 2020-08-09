import React from "react";
import { makeStyles, IconButton, Divider } from "@material-ui/core";
import { NearMeOutlined } from "@material-ui/icons"
import { connect } from "react-redux";

import { cancelSelectMesh, cancelSelectLight } from "../../../redux/actions.js";

const useStyle = makeStyles((theme) => ({
    button: {
        color: "white",
        padding: "10%",
        marginTop: "12%",
        marginBottom: "10%"
    },
}));

const ClickButton = ({cancelSelectMesh, cancelSelectLigth}) => {
    const classes = useStyle();
    return (
        <React.Fragment>
            <IconButton className={classes.button} 
                onClick={() => {cancelSelectMesh(); cancelSelectLigth()}}
            >
                <NearMeOutlined fontSize="large" />
            </IconButton>
            <Divider />
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
})
const mapDispatchToProps = dispatch => ({
    cancelSelectMesh: () => dispatch(cancelSelectMesh()),
    cancelSelectLigth: () => dispatch(cancelSelectLight()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ClickButton)
