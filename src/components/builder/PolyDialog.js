import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getSearchResult } from "../../api";
import { makeStyles, IconButton, Toolbar, AppBar, Dialog, Typography, Grid, Select, Input, MenuItem } from "@material-ui/core";
import { CloseOutlined } from "@material-ui/icons"
import Slide from '@material-ui/core/Slide';

import PolyCard from "./PolyCard.js";

const useStyle = makeStyles({
    appBar: {
        backgroundColor: '#2196f3',
        position: 'sticky'
    },
    close: {
        width: '10%',
    },
    title: {
        paddingLeft: '1%',
    },
    search: {
        margin: "15px"
    },
    select: {
        paddingLeft: "15px",
        width: "250px",
        margin: "15px"
    },
    notFound: {
        alignItems: "center",
        alignContent: "center",
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        width:"100%",
        height:"80vh%"
    }
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function PolyDialog(props) {
    const classes = useStyle();
    const [searchQuery, setSearchQuery] = useState("")
    const [searchCategory, setSearchCategory] = useState("")
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        (async () => setSearchResults(await getSearchResult(searchQuery, searchCategory)))()
    }, [searchQuery, searchCategory])

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
                    <Input
                        fullWidth
                        value={searchQuery}
                        placeholder="Search"
                        className={classes.search}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                    <Select placeholder="Select Category" className={classes.select} value={searchCategory} onChange={e => setSearchCategory(e.target.value)}>
                        <MenuItem disabled selected value="">Select Category</MenuItem>
                        <MenuItem value="architecture">Architecture</MenuItem>
                        <MenuItem value="animals">Animals</MenuItem>
                        <MenuItem value="art">Art</MenuItem>
                        <MenuItem value="food">Food</MenuItem>
                        <MenuItem value="nature">Nature</MenuItem>
                        <MenuItem value="objects">Objects</MenuItem>
                        <MenuItem value="people">People</MenuItem>
                        <MenuItem value="scenes">Scenes</MenuItem>
                        <MenuItem value="technology">Technology</MenuItem>
                        <MenuItem value="transport">Transport</MenuItem>
                    </Select>

                </Toolbar>
            </AppBar>
            <Grid container>
                {searchResults
                    ? searchResults.map((model, key) => <PolyCard key={key} close={props.close} model={model} />)
                    : <Typography variant="h3" className={classes.notFound}> No Objects Found</Typography>
                }
            </Grid>
        </Dialog>
    );
}

PolyDialog.propTypes = {
    open: PropTypes.any.isRequired,
    close: PropTypes.func.isRequired
}
