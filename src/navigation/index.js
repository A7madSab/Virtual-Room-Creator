import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import NavBar from "../components/Navbar"
import SignIn from "../screens/SignIn"
import SignUp from "../screens/SignUp"
import landingPage from "../screens/landingPage"
import Dashboard from "../screens/Dashboard"
import CreateProject from "../screens/CreateProject"
import ProjectDetail from "../screens/ProjectDetail"
import NotFound from "../screens/NotFound"
import { connect } from "react-redux"

const Navigation = ({ user }) => {
    
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/signIn" component={SignIn} />
                <Route exact path="/signUp" component={SignUp} />
                <Route exact path="/create-Project" component={CreateProject} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/project/:id" component={ProjectDetail} />
                <Route exact path="/" component={landingPage} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter >
    )
}

const mapStateToProps = ({ auth }) => ({
    user: auth.user
})

export default connect(mapStateToProps)(Navigation)