import React from "react"
import Navigation from "./navigation"
import { useAuth0 } from "./utils/react-auth0-spa"

const App = () => {
    // console.log(useAuth0().)
    const data = useAuth0()
    console.log(data)
    return (
        <Navigation />
    )
}

export default App