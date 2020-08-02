import firebase from "../config/index"
import { v4 as uuid } from "uuid"

export const GET_PROJECT = "GET_PROJECT"

export const getProject = ({ email }) => async dispatch => {
    try {
        const userProjectsCollection = await firebase.firestore().collection(email).get()
        const userProjects = userProjectsCollection.docs.map(project => project.data())
        dispatch({ type: GET_PROJECT, payload: userProjects })
    } catch (err) {
        console.log("error fetch project", err)
    }
}

export const createProject = ({ email, ...project }) => async dispatch => {
    try {
        await firebase.firestore().collection(email).add({ projectid: uuid(), ...project, createdAt: new Date() })
        getProject(email)
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



export const defaultGeometry = {
    id: "",
    type: "Box-Geometry",
    visible: true,
    locked: false,
    position: [0, 0, 0],
    dimensions: [2.0, 2.0, 2.0],
    material: "Normal",
    scale: 1,
    color: 0xff3300,
    castShadow: false,
    receiveShadow: false,
}
export const defaultPoly = {
    id: "",
    type: "Poly",
    scale: 1,
    visible: true,
    position: [0, 0, 0],
}
export const defaultText = {
    id: "",
    type: "Text",
    scale: 1,
    visible: true,
    size: 40,
    height: 5,
    position: [0, 0, 0],
}

export const addMesh = (type, payload) => {
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
            payload: defaultPoly
        }
    else if (type === "Text")
        return {
            type: "ADD_MESH",
            payload: defaultText
        }
}
export const deleteMesh = (meshId) => ({
    type: "DELETE_MESH",
    payload: meshId
})
export const updateMesh = (meshId, updatedObject) => ({
    type: "UPDATE_MESH",
    payload: { id: meshId, object: updatedObject }
})
export const selectMesh = (objectId, objectType) => ({
    type: "SELECT_OBJECT",
    payload: { id: objectId, type: objectType }
})
export const cancelSelectMesh = () => ({
    type: "CANCEL-SELECT_OBJECT",
    payload: {}
})


















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
//         console.log("data", data)
//         dispatch({ type: USER_SIGN_OUT })
//     } catch (err) {
//         console.log("err", err)
//     }
// }