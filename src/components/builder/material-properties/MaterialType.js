import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Typography } from '@material-ui/core';

const CustomToggel = withStyles({
    root: {
        borderColor: '#616161',
        borderRadius: 2,
        height: '35px',
        width: '33.333%',
        textTransform: 'none',
        color: '#616161',
        '&$selected': {
            color: '#eeeeee'
        },
        '&:hover': {
            borderColor: 'white'
        }
    },
    selected: {},
})((props) => <ToggleButton color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
    toggel: {
        marginBottom: '3%',
        marginTop: '2%',
        borderColor: '#757575',
        backgroundColor: '#424242',
        width: '100%',
    },
}));

export default function MaterialType(props) {
    const classes = useStyles();
    const [type, setType] = React.useState('Normal');

    const handleMaterialType = (event, newType) => {
        if (newType !== null) {
            setType(newType);
        }
    };
    return (
        <ToggleButtonGroup value={type} exclusive onChange={handleMaterialType}
            className={classes.toggel}
        >
            <CustomToggel value="Normal">
                <Typography>Normal</Typography>
            </CustomToggel>
            <CustomToggel value="Phong">
                <Typography>Phong</Typography>
            </CustomToggel>
            <CustomToggel value="Basic">
                <Typography>Basic</Typography>
            </CustomToggel>
        </ToggleButtonGroup>
    );
}
