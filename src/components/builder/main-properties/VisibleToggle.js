import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import { VisibilityOffOutlined, VisibilityOutlined } from "@material-ui/icons";

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
        backgroundColor: '#424242',
        width: '50%',
    },
    
}));

export default function Visible(props) {
    const classes = useStyles();
    const [visible, setVisible] = React.useState('visible');

    const handelVisible = (event, newVisible) => {
        if (newVisible !== null) {
            setVisible(newVisible);
        }
    };
    return (
        <ToggleButtonGroup
            value={visible}
            exclusive
            onChange={handelVisible}
            className={classes.toggel}
        >
            <CustomToggle value="visible">
                <VisibilityOutlined fontSize="small" />
            </CustomToggle>
            <CustomToggle value="unVisible">
                <VisibilityOffOutlined fontSize="small" />
            </CustomToggle>
        </ToggleButtonGroup>
    );
}
