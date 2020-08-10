import React from "react"
import { Router, Switch, Route } from "react-router-dom"

import ProjectDetail from "../screens/ProjectDetail"
import CreateProject from "../screens/CreateProject"
import Dashboard from "../screens/Dashboard"
import NotFound from "../screens/NotFound"
import Profile from "../screens/Profile"
import Builder from "../screens/Builder"
import Viewer from "../screens/Viewer"
import Landing from "../screens/Landing"

import NavBar from "../components/Navbar"
import PrivateRoute from "../components/PrivateRoute"

import history from "../utils/history"

import { useAuth0 } from "../utils/react-auth0-spa"

const Navigation = () => {
    const { loading } = useAuth0()

    if (loading) {
        return <div />
    }

    return (
        <Router history={history}>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Landing} />
                <PrivateRoute path="/createProject" component={CreateProject} />
                <PrivateRoute path="/project/:id" component={ProjectDetail} />
                <PrivateRoute path="/builder/:id" component={Builder} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/profile" component={Profile} />
                <Route path="/viewer/:id" component={Viewer} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Navigation