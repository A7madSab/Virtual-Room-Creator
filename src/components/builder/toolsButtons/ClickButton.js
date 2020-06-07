import React from "react";
import { makeStyles, IconButton, Divider } from "@material-ui/core";
import { NearMeOutlined } from "@material-ui/icons"

const useStyle = makeStyles((theme) => ({
    button: {
        color: "white",
        padding: "10%",
        marginTop: "12%",
        marginBottom: "10%"
    },
}));

function ClickButton() {
    const classes = useStyle();
    return (
        <React.Fragment>
            <IconButton className={classes.button}>
                <NearMeOutlined fontSize="large" />
            </IconButton>
            <Divider />
        </React.Fragment>
    );
}

export default ClickButton;
