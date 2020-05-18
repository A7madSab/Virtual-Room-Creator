import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import theme from "./theme"
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux'
import store from "./redux/store"
import auth_config from "./utils/auth_config.json"

import { Auth0Provider } from "./utils/react-auth0-spa";
import history from "./utils/history";

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Auth0Provider
        domain={auth_config.domain}
        client_id={auth_config.clientId}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
        
      >
        <App />
      </Auth0Provider>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
)