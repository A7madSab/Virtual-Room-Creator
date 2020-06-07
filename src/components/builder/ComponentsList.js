import React from 'react';
import { Grid } from '@material-ui/core';

import ComponentItem from "./ComponentItem.js";

export default function ComponentsList() {
    return (
        <Grid container>
            <ComponentItem component="mesh"/>
            <ComponentItem component="mesh"/>
            <ComponentItem component="poly"/>
            <ComponentItem component="poly"/>
            <ComponentItem component="poly"/>
            <ComponentItem component="text"/>
            <ComponentItem component="text"/>
            <ComponentItem component="light"/>
            <ComponentItem component="light"/>
        </Grid>
    );
}

