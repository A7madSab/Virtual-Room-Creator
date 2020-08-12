import store from "./store.js"
import firebase from "../config/index"
import { createScene, getSceneByProjectId } from "../api/index.js";
import { v4 as uuid } from "uuid"

export const getProject = ({ email }) => async dispatch => {
    try {
        const userProjectsCollection = await firebase.firestore().collection(email).get()
        const userProjects = userProjectsCollection.docs.map(project => project.data())
        dispatch({ type: "GET_ALL_PROJECTS", payload: userProjects })
    } catch (err) {
        console.log("error fetch project", err)
    }
}

const defaultScene = {
    shareCode: "",
    sceneId: "",
    backgroubColor: "#212121",
    gridHelper: {
        visible: false,
        size: "10",
        divid: "30"
    },
    planeHelper: {
        visible: false,
        width: "10",
        hight: "10",
        depth: "1",
        color: "#fafafa"
    },
    skybox: {
        visible: false,
        selectedSkybox: "",
        gallary: []
    },
}

export const openProject = ({ email }, projectid) => async dispatch => {
    try {
        const userProjectsCollection = await firebase.firestore().collection(email).get()
        const userProjects = userProjectsCollection.docs.map(project => project.data())
        const currentProject = userProjects.filter(project => project.projectid === projectid)[0]

        dispatch({ type: "GET_ALL_PROJECTS", payload: userProjects });
        dispatch({ type: "OPEN_PROJECT", payload: currentProject });

        console.log(currentProject.projectid)
        const scene = await getSceneByProjectId(currentProject.projectid);
        if(scene.state.sceneReducer) {
            dispatch({ type: "LOAD-SCENE", payload: scene.state.sceneReducer});
            dispatch({ type: "LOAD-MESH",  payload: scene.state.meshReducer});
            dispatch({ type: "LOAD-LIGHT", payload: scene.state.lightReducer});
        }
        else {
            dispatch({ 
                type: "LOAD-SCENE", 
                payload: {...defaultScene, shareCode: scene.projectId, sceneId: scene.id}
            });
            dispatch({ type: "LOAD-MESH",  payload: {selectedMesh: {}, meshes: []} });
            dispatch({ type: "LOAD-LIGHT", payload: {selectedLight: {},lights: []} });
        }

    } catch (err) {
        console.log("error fetch project", err)
    }
}

export const createProject = ({ email, ...project }) => async dispatch => {
    try {
        let projectId = uuid();
        await firebase.firestore().collection(email).add({ projectid: projectId, ...project, createdAt: new Date() })
        await createScene(projectId);
        getProject(email);
    } catch (err) {
        console.log("error creating project", err)
    }
}

export const deleteProject = ({ projectId, email }) => async dispatch => {
    try {
        // delete Project here 
        getProject(email)
    } catch (err) {
        console.log("error creating project", err)
    }
}

export const updateScene = (newScene) => {
    return ({
        type: "LOAD-SCENE",
        payload: newScene
    })
}


export const defaultGeometry = {
    id: "",
    type: "Box-Geometry",
    visible: true,
    locked: false,
    position: [0, 0, 0],
    dimensions: [2.0, 2.0, 2.0],
    rotation: [0, 0, 0],
    material: "Normal",
    scale: 0.3,
    color: 0xff3300,
    castShadow: false,
    receiveShadow: false,
}
export const defaultPoly = {
    id: "",
    type: "Poly",
    scale: 0.3,
    visible: true,
    position: [0, 0, 0],
    rotation: [0, 0, 0],
}
export const defaultText = {
    id: "",
    type: "Text",
    text: "Insert Text",
    scale: 0.3,
    visible: true,
    size: 12,
    material: "Normal",
    height: 5,
    position: [0, 0, 0],
    rotation: [0, 0, 0],
}

export const addMesh = (type, payload) => {
    store.dispatch(cancelSelectLight())
    if (type === "Box-Geometry")
        return {
            type: "ADD_MESH",
            payload: { ...defaultGeometry, type: "Box-Geometry" }
        }
    else if (type === "Dodecahedron-Geometry")
        return {
            type: "ADD_MESH",
            payload: { ...defaultGeometry, type: "Dodecahedron-Geometry" }
        }
    else if (type === "Cone-Geometry")
        return {
            type: "ADD_MESH",
            payload: { ...defaultGeometry, type: "Cone-Geometry" }
        }
    else if (type === "Cylinder-Geometry")
        return {
            type: "ADD_MESH",
            payload: { ...defaultGeometry, type: "Cylinder-Geometry" }
        }
    else if (type === "Poly")
        return {
            type: "ADD_MESH",
            payload: { type: "poly", ...defaultPoly, ...payload }
        }
    else if (type === "Text")
        return {
            type: "ADD_MESH",
            payload: { ...defaultText, text: payload }
        }
}
export const copyMesh = () => {
    return ({
        type: "COPY_MESH",
        payload: {}
    });
}
export const deleteMesh = (meshId) => {
    return ({
        type: "DELETE_MESH",
        payload: meshId
    })
}
export const updateMesh = (meshId, updatedObject) => {
    return ({
        type: "UPDATE_MESH",
        payload: { id: meshId, object: updatedObject }
    })
}
export const selectMesh = (objectId, objectType) => {
    store.dispatch(cancelSelectLight())
    return ({
        type: "SELECT_OBJECT",
        payload: { id: objectId, type: objectType }
    })
}
export const selectMeshType = type => ({
    type: "SELECT_MESH_TYPE",
    payload: { type }
})
export const cancelSelectMesh = () => {
    return ({
        type: "CANCEL-SELECT_OBJECT",
        payload: {}
    })
}

export const defaultLight = {
    id: "",
    type: " Point-Light",
    position: [5, 5, 5],
    color: 0xffffff,
    intensity: 1
}

export const addLight = (type, payload) => {
    store.dispatch(cancelSelectMesh())
    if (type === "Point-Light")
        return {
            type: "ADD_LIGHT",
            payload: { ...defaultLight, type: "Point-Light" }
        }
    else if (type === "Directional-Light")
        return {
            type: "ADD_LIGHT",
            payload: { ...defaultLight, type: "Directional-Light" }
        }
    else if (type === "Spot-Light")
        return {
            type: "ADD_LIGHT",
            payload: { ...defaultLight, type: "Spot-Light" }
        }
    else if (type === "Ambient-Light")
        return {
            type: "ADD_LIGHT",
            payload: { ...defaultLight, type: "Ambient-Light" }
        }

}
export const deleteLight = (lightId) => {
    return ({
        type: "DELETE_LIGHT",
        payload: lightId
    })
}
export const updateLight = (lightId, updatedObject) => {
    return ({
        type: "UPDATE_LIGHT",
        payload: { id: lightId, object: updatedObject }
    })
}
export const selectLight = (objectId, objectType) => {
    store.dispatch(cancelSelectMesh())
    return ({
        type: "SELECT_LIGHT",
        payload: { id: objectId, type: objectType }
    })
}
export const cancelSelectLight = () => {
    return ({
        type: "CANCEL-SELECT_LIGHT",
        payload: {}
    })
}










// export const CREATE_PROJECT = "CREATE_PROJECT"
// export const CREATE_PROJECT_ERROR = "CREATE_PROJECT_ERROR"
// dispatch({ type: CREATE_PROJECT, payload: project })
// export const USER_SIGN_UP = "USER_SIGN_UP"
// export const USER_SIGN_UP_ERROR = "USER_SIGN_UP_ERROR"
// export const signUp = signUpUser => async dispatch => {
//     try {
//         await firebase.auth().createUserWithEmailAndPassword(signUpUser.email, signUpUser.password)
//         const { user } = await firebase.auth().signInWithEmailAndPassword(signUpUser.email, signUpUser.password)
//         const signedUpInUser = { id: user.uid, email: user.email, refreshToken: user.refreshToken }
//         dispatch({ type: USER_SIGN_UP, payload: signedUpInUser })
//     } catch (err) {
//         dispatch({ type: USER_SIGN_UP_ERROR, payload: err.message })
//     }
// }
// export const USER_SIGN_IN = "USER_SIGN_IN"
// export const USER_SIGN_IN_ERROR = "USER_SIGN_IN_ERROR"
// export const signIn = signInUser => async dispatch => {
//     try {
//         const { user } = await firebase.auth().signInWithEmailAndPassword(signInUser.email, signInUser.password)
//         const signedInUser = { id: user.uid, email: user.email, refreshToken: user.refreshToken }
//         dispatch({ type: USER_SIGN_IN, payload: signedInUser })
//     } catch (err) {
//         dispatch({ type: USER_SIGN_IN_ERROR, payload: err.message })
//     }
// }
// export const USER_SIGN_OUT = "USER_SIGN_OUT"
// export const signOut = () => async dispatch => {
//     try {
//         const data = await firebase.auth().signOut()
//         dispatch({ type: USER_SIGN_OUT })
//     } catch (err) {
//     }
// }