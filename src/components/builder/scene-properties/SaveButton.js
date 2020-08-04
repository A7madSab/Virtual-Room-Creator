import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { connect } from "react-redux";

const SaveButton = () => {
    return (
        <Button startIcon={<SaveIcon />} variant="contained" color="secondary" style={{marginTop: '2%', width: '100%'}}>
            Save Project
        </Button>
    );
}
const mapStateToProps = state => ({
});

export default connect(mapStateToProps,)(SaveButton)