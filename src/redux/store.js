import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import logger from 'redux-logger'
import thunk from "redux-thunk"
import { getFirestore, reduxFirestore } from "redux-firestore"
import { getFirebase, reactReduxFirebase } from "react-redux-firebase"

import { AuthReducer, ProjectReducer } from "./reducers"
import config from "../config"

const store = createStore(
    combineReducers({
        auth: AuthReducer,
        projects: ProjectReducer
    }),
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase }), logger),
        reduxFirestore(config),
        reactReduxFirebase(config)
    )
)

export default store
