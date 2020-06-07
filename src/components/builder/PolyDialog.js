import React from "react";
import PropTypes from 'prop-types';
import { makeStyles, IconButton, Toolbar, AppBar, Dialog, Typography, Grid, Button } from "@material-ui/core";
import { CloseOutlined } from "@material-ui/icons"
import Slide from '@material-ui/core/Slide';

import PolyCard from "./PolyCard.js";

const useStyle = makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#2196f3',
        position: 'sticky'
    },
    close: {
        width: '10%',
    },
    title: {
        width: '95%',
        paddingLeft: '1%',
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function PolyDialog(props) {
    const classes = useStyle();
    return (
        <Dialog fullScreen open={props.open} onClose={props.close} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={props.close}>
                        <CloseOutlined />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Poly
                    </Typography>
                    <Button autoFocus color="inherit" >
                        Open
                    </Button>
                </Toolbar>
            </AppBar>
            <Grid container >
                <PolyCard />
                <PolyCard />
                <PolyCard />
                <PolyCard />
                <PolyCard />
                <PolyCard />
                <PolyCard />
                <PolyCard />
                <PolyCard />
                <PolyCard />
                <PolyCard />
                <PolyCard />
            </Grid>
        </Dialog>
    );
}

PolyDialog.propTypes = {
    open: PropTypes.any.isRequired,
    close: PropTypes.func.isRequired
}
