import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { Typography } from '@material-ui/core';

import ColorCollection from './ColorCollection';

const CustomToggel = withStyles({
    root: {
        borderColor: '#616161',
        borderRadius: 2,
        height: '35px',
        width: '50%',
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

export default function MaterialFill(props) {
    const classes = useStyles();
    const [fill, setFill] = React.useState('color');

    const handleMaterialFill = (event, newFill) => {
        if (newFill !== null) {
            setFill(newFill);
        }
    };
    return (
        <React.Fragment>
            <ToggleButtonGroup value={fill} exclusive onChange={handleMaterialFill}
                className={classes.toggel}
            >
                <CustomToggel value="color">
                    <Typography>Color</Typography>
                </CustomToggel>
                <CustomToggel value="texture">
                    <Typography>Texture</Typography>
                </CustomToggel>
            </ToggleButtonGroup>
            <ColorCollection />
        </React.Fragment>
    );
}
