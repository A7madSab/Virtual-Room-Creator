import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import {LockOutlined, LockOpenOutlined, } from "@material-ui/icons";

const CustomToggle = withStyles({
    root: {
        borderColor: '#616161',
        borderRadius: 2,
        height: '35px',
        width: '50%',
        color: '#616161',
        '&$selected': {
            color: '#eeeeee',
        },
        '&:hover': {
            borderColor: 'white'
        }
    },
    selected: {}
})((props)=> <ToggleButton color="default" {...props} />)
const useStyles = makeStyles((theme) => ({
    toggel: {
        marginBottom: '4%',
        marginLeft: '2%',
        backgroundColor: '#424242',
        width: '48%',
    },
    
}));

export default function Locked(props) {
    const classes = useStyles();
    const [locked, setLocked] = React.useState('unLocked');

    const handleLocked = (event, newLocked) => {
        if (newLocked !== null) {
            setLocked(newLocked);
        }
    };
    return (
        <ToggleButtonGroup
            value={locked}
            exclusive
            onChange={handleLocked}
            className={classes.toggel}
        >
            <CustomToggle value="unLocked" >
                <LockOpenOutlined fontSize="small" />
            </CustomToggle>
            <CustomToggle value="Locked" >
                <LockOutlined fontSize="small" />
            </CustomToggle>
        </ToggleButtonGroup>
    );
}
