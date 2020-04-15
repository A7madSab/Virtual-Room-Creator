import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import theme from "./theme"
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux'
import store from "./redux/store"

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>,
  document.getElementById("root")
)