import React from "react"
import { Router, Switch, Route } from "react-router-dom"

import NavBar from "../components/Navbar"
import SignIn from "../screens/SignIn"
import SignUp from "../screens/SignUp"
import landingPage from "../screens/LandingPage"
import Dashboard from "../screens/Dashboard"
import CreateProject from "../screens/CreateProject"
import ProjectDetail from "../screens/ProjectDetail"
import NotFound from "../screens/NotFound"
import Profile from "../screens/Profile"
import PrivateRoute from "../components/PrivateRoute"

import history from "../utils/history"

const Navigation = () => {
    return (
        <Router history={history}>
            <NavBar />
            <Switch>
                <Route exact path="/" component={landingPage} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/signIn" component={SignIn} />
                <PrivateRoute path="/createProject" component={CreateProject} />
                <PrivateRoute path="/dashboard" render={() => <Dashboard />} />
                <PrivateRoute path="/project/:id" component={ProjectDetail} />
                <PrivateRoute path="/profile" component={Profile} />
                <Route component={NotFound} />
            </Switch>
        </Router >
    )
}

export default Navigation