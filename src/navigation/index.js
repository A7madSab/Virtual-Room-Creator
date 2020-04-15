import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import NavBar from "../components/Navbar"

import SignIn from "../screens/SignIn"
import SignUp from "../screens/SignUp"
import landingPage from "../screens/landingPage"
import Dashboard from "../screens/Dashboard"
import CreateProject from "../screens/CreateProject"
import ProjectDetail from "../screens/ProjectDetail"

const Navigation = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/signIn" component={SignIn} />
                <Route exact path="/signUp" component={SignUp} />
                <Route exact path="/create-Project" component={CreateProject} />
                <Route exact path="/landingPage" component={landingPage} />
                <Route exact path="/:id" component={ProjectDetail} />
            </Switch>
        </BrowserRouter >
    )
}

export default Navigation
