import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { connect } from "react-redux";

import PropertiesTab from '../tabs/PropertiesTab';
import ComponentsTab from '../tabs/ComponentsTab';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%'
    },
    tabs: {
        backgroundColor: '#424242',
        color: '#fafafa',
        indicator: '#fff'
    },
    tab: {
        minWidth: '50%',
    },
    indicator: {
        backgroundColor: '#fff'
    }
}));

const TabsSection = ({ meshes, lights }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handlePropertiesContent(type) {
        if(meshes.selectedMesh.type == null && lights.selectedLight.type == null)
            return "Scene";
        else if (meshes.selectedMesh.type != null ) {
            return "Mesh";
        }
        else if (lights.selectedLight.type != null ) {
            return "Light"
        }
            
    }

    let propertiesContent = handlePropertiesContent();

    return (
        <div className={classes.root}>
            <Paper square>
                <Tabs
                    value={value}
                    onChange={(event, newValue) => setValue(newValue)}
                    classes={{ indicator: classes.indicator }}
                    className={classes.tabs}
                >
                    <Tab label="Properties" className={classes.tab} />
                    <Tab label="Component"  className={classes.tab} />
                </Tabs>
            </Paper>
            <PropertiesTab value={value} index={0} contentType={propertiesContent}/>
            <ComponentsTab value={value} index={1} />
        </div>
    );
}

const mapStateToProps = state => ({
    meshes: state.meshReducer,
    lights: state.lightReducer
})
export default connect(mapStateToProps, )(TabsSection)