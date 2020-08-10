import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
    inputfield: {
        width: '100%',
        color: '#eeeeee',
        marginBottom: '2%',
        marginTop: '2%',
        marginLeft: '0px',
        '& label.Mui-focused': {
            color: 'white',
        },
        '& label': {
            color: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#616161',
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
}));

const ShareCodeField = ({projects}) => {
    const classes = useStyles(); 
    const [projectShareCode, setShareCode] = React.useState("Share Code");

    React.useEffect(() => {
        if(projects.selectedProject.projectid)
            setShareCode(projects.selectedProject.projectid);
        else
            setShareCode("Share Code");
    }, [projects.selectedProject]);

    return (
        <TextField
            variant="outlined"
            size="small"
            label="Share Code"
            className={classes.inputfield}
            placeholder="Share Code"
            value={projectShareCode}
            InputProps={{
                className: classes.inputfield,
            }}   
        />

    );
}
const mapStateToProps = state => ({
    projects: state.projects,
})
export default connect(mapStateToProps, )(ShareCodeField)