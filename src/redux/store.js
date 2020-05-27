import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import logger from 'redux-logger'
import thunk from "redux-thunk"
import { firestoreReducer } from "redux-firestore"
import { getFirestore, reduxFirestore } from "redux-firestore"
import { getFirebase, reactReduxFirebase } from "react-redux-firebase"

import { ProjectReducer } from "./reducers"
// AuthReducer,
import config from "../config"

const store = createStore(
    combineReducers({
        // auth: AuthReducer,
        projects: ProjectReducer,
        firestore: firestoreReducer
    }),
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase }), logger),
        reduxFirestore(config),
        reactReduxFirebase(config)
    )
)

export default store
