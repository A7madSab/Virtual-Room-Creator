import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import logger from 'redux-logger'
import thunk from "redux-thunk"
import { firestoreReducer } from "redux-firestore"
import { getFirestore, reduxFirestore } from "redux-firestore"
import { getFirebase, reactReduxFirebase } from "react-redux-firebase"

import { ProjectReducer, meshReducer, lightReducer, sceneReducer } from "./reducers";

// AuthReducer,
import config from "../config"

const store = createStore(
    combineReducers({
        // auth: AuthReducer,
        projects: ProjectReducer,
        sceneReducer: sceneReducer,
        meshReducer: meshReducer,
        lightReducer: lightReducer,
        firestore: firestoreReducer
    }),
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase }), logger),
        reduxFirestore(config),
        reactReduxFirebase(config)
    )
)

export default store
