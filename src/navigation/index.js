import React from "react"
import { Router, Switch, Route } from "react-router-dom"

import ProjectDetail from "../screens/ProjectDetail"
import CreateProject from "../screens/CreateProject"
import landingPage from "../screens/LandingPage"
import Dashboard from "../screens/Dashboard"
import NotFound from "../screens/NotFound"
import Profile from "../screens/Profile"
import Builder from "../screens/Builder"
import Viewer from "../screens/Viewer"
// import SignIn from "../screens/SignIn"
// import SignUp from "../screens/SignUp"

import NavBar from "../components/Navbar"
import PrivateRoute from "../components/PrivateRoute"

import history from "../utils/history"

const Navigation = () => {
    return (
        <Router history={history}>
            <NavBar />

            <Switch>
                <Route exact path="/" component={landingPage} />
                <PrivateRoute path="/createProject" component={CreateProject} />
                <PrivateRoute path="/project/:id" component={ProjectDetail} />
                <PrivateRoute path="/builder/:id" component={Builder} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/profile" component={Profile} />
                <Route path="/viewer/:id" component={Viewer} />
                <Route component={NotFound} />
            </Switch>
        </Router >
    )
}

export default Navigation
// {/* <Route path="/signUp" component={SignUp} /> */}
// {/* <Route path="/signIn" component={signIn} /> */}