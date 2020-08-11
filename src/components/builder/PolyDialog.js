import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { makeStyles, IconButton, Toolbar, AppBar, Dialog, Typography, Grid, MenuItem } from "@material-ui/core";
import Slide from '@material-ui/core/Slide';

import { CloseOutlined } from "@material-ui/icons"

import { getSearchResult } from "../../api";
import PolyCard from "./PolyCard.js";

const useStyle = makeStyles({
    appBar: {
        backgroundColor: '#9932CC',
        position: 'sticky'
    },
    close: {
        width: '10%',
    },
    title: {
        paddingLeft: '1%',
    },

    inputfield: {  
        width: '94%',
        height: '40px',
        color: '#eeeeee',
        marginLeft: '6%',
        '& label.Mui-focused': {
            color: 'white',
        },
        '& label': {
            color: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
                borderRadius: 2
            },
            '&:hover fieldset': {
                borderColor: 'white',
                borderWidth: '1px'
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
                borderWidth: '1px',
            },
        },
    },
    selectField: {  
        color: 'white',
        width: '50%',
        '& label.Mui-focused': {
            color: 'white',
        },
        '& label': {
            color: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#9932CC',
                borderRadius: 2,
                color: 'white',
            },
            '&:hover fieldset': {
                borderColor: '#9932CC',
                borderWidth: '1px',
                color: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#9932CC',
                borderWidth: '1px',
                color: 'white',
            },
        },
    },
    notFound: {
        alignItems: "center",
        alignContent: "center",
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        width: "100%",
        height: "80vh%"
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
                    <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        placeholder="Search"
                        className={classes.inputfield}
                        InputProps={{
                            className: classes.inputfield,
                        }}
                    />
                    <TextField select={true}  variant="outlined" value={searchCategory}
                        onChange={e => setSearchCategory(e.target.value)}
                        className={classes.selectField}
                        InputProps={{
                            className: classes.selectField,
                        }}
                    >
                        <MenuItem  value="">Select Category</MenuItem>
                        <MenuItem selected={true} value="architecture">Architecture</MenuItem>
                        <MenuItem value="animals">Animals</MenuItem>
                        <MenuItem value="art">Art</MenuItem>
                        <MenuItem value="food">Food</MenuItem>
                        <MenuItem value="nature">Nature</MenuItem>
                        <MenuItem value="objects">Objects</MenuItem>
                        <MenuItem value="people">People</MenuItem>
                        <MenuItem value="scenes">Scenes</MenuItem>
                        <MenuItem value="technology">Technology</MenuItem>
                        <MenuItem value="transport">Transport</MenuItem>
                    </TextField>

                </Toolbar>
            </AppBar>
            <Grid container >
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
