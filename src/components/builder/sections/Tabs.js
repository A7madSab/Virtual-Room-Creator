import React, {useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { connect } from "react-redux";

import PropertiesTab from '../tabs/PropertiesTab';
import ComponentsTab from '../tabs/ComponentsTab';
import ActionButtonPopover from "../ActionButtonPopover.js"

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
    const PaperRef = useRef();
    
    let propertiesContent = handlePropertiesContent();
    function handlePropertiesContent(type) {
        if (meshes.selectedMesh.type == null && lights.selectedLight.type == null){
            return "Scene";
        }
        else if (meshes.selectedMesh.type === "Text") {
            return "Text";
        }
        else if (meshes.selectedMesh.type != null) {
            return "Mesh";
        }
        else if (lights.selectedLight.type != null) {
            return "Light"
        }
    }

    return (
        <div className={classes.root}>
            <Paper square >
                <Tabs
                    value={value}
                    onChange={(event, newValue) => setValue(newValue)}
                    classes={{ indicator: classes.indicator }}
                    className={classes.tabs}
                    ref={PaperRef}
                >
                    <Tab label="Properties" className={classes.tab} />
                    <Tab label="Component" className={classes.tab} />
                </Tabs>
            </Paper>
            <PropertiesTab value={value} index={0} contentType={propertiesContent} />
            <ComponentsTab value={value} index={1} />
            {
                propertiesContent === "Mesh"
                ? <ActionButtonPopover anchorPopover={PaperRef.current} />
                : null
            }
        </div>
    );
}

const mapStateToProps = state => ({
    meshes: state.meshReducer,
    lights: state.lightReducer
})
export default connect(mapStateToProps,)(TabsSection)