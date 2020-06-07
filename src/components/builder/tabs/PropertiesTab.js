import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Divider} from '@material-ui/core';

import Visible from '../main-properties/VisibleToggle.js';
import Locked from '../main-properties/LockToggle.js';
import Position from '../main-properties/PositionField.js';
import Dimension from '../main-properties/DimensionField.js';
import NameField from "../main-properties/NameField.js";
import TypeField from '../main-properties/TypeField.js';

import MaterialType from '../material-properties/MaterialType.js';
import MaterialFill from '../material-properties/MaterialFill.js';

const useStyles = makeStyles((theme) => ({
    paper: {
        height: '99%',
        marginTop: '1%',
        backgroundColor: '#424242',
        color: '#fafafa',
        padding: '4%',

    },
}));

export default function PropertiesTab(props) {
    const { value, index } = props;
    const classes = useStyles();
    return (
        <Paper hidden={value !== index} className={classes.paper} square>
            <Visible />
            <Locked />
            <NameField />
            <Position />
            <TypeField />
            <Dimension />
            <Divider />
            <MaterialType />
            <MaterialFill />
        </Paper>
    );
}

PropertiesTab.propTypes = {
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};