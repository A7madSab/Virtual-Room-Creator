import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

import ComponentsList from "../ComponentsList.js";

const useStyles = makeStyles((theme) => ({
    paper: {
        height: '99%',
        marginTop: '1%',
        backgroundColor: '#424242',
        color: '#fafafa',
    },
}));

export default function ComponentsTab(props) {
    const { value, index } = props;
    const classes = useStyles();
    return (
        <Paper hidden={value !== index} className={classes.paper} square>
            <ComponentsList />
        </Paper>
    );
}

ComponentsTab.propTypes = {
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};