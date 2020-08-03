const InitalProjectState = []
export const ProjectReducer = (state = InitalProjectState, action) => {
    switch (action.type) {
        case "GET_PROJECT":
            return action.payload
        default:
            return state
    }
}

const initialMeshState = {
    selectedMesh: {},
    meshes: []
}
export const meshReducer = (state = initialMeshState, action) => {
    switch (action.type) {
        case "LOAD-MESH": {
            state = action.payload;
            return state;
        }
        case 'ADD_MESH': {
            let meshNumber = state.meshes.length + 1;
            let mesh = { ...action.payload, id: "Mesh " + meshNumber }
            return { selectedMesh: mesh, meshes: [...state.meshes, mesh] }
        }
        case 'DELETE_MESH': {
            return {
                selectedMesh: {},
                meshes: state.meshes.filter(mesh => mesh.id !== action.payload)
            }
        }
        case 'UPDATE_MESH': {
            let mesh = state.meshes.filter(({ id }) => id !== action.payload.id)
            state = { ...state, meshes: [...mesh, action.payload.object], selectedMesh: action.payload.object }
            return state
        }
        case 'SELECT_OBJECT': {
            let mesh = state.meshes.find(({ id }) => id === action.payload.id)
            return { ...state, selectedMesh: mesh }
        }
        case 'CANCEL-SELECT_OBJECT': {
            return { ...state, selectedMesh: {} }
        }
        default: {
            return state
        }
    }
}

const initialLightState = {
    selectedLight: {},
    lights: [
        {
            id: "Light 1",
            type: "Point-Light",
            position: [5, 5, 5],
            color: 0xffffff,
            intensity: 1
        }
    ]
}
export const lightReducer = (state = initialLightState, action) => {
    switch (action.type) {
        case "LOAD-LIGHT": {
            state = action.payload;
            return state;
        }
        case 'ADD_LIGHT': {
            let lightNumber = state.lights.length + 1;
            let light = { ...action.payload, id: "Light " + lightNumber }
            return { selectedLight: light, lights: [...state.lights, light] }
        }
        case 'DELETE_LIGHT': {
            return {
                selectedLight: {},
                lights: state.lights.filter(light => light.id !== action.payload)
            }
        }
        case 'UPDATE_LIGHT': {
            let light = state.lights.filter(({ id }) => id !== action.payload.id)
            state = { ...state, lights: [...light, action.payload.object], selectedLight: action.payload.object }
            return state
        }
        case 'SELECT_LIGHT': {
            let light = state.lights.find(({ id }) => id === action.payload.id)
            return { ...state, selectedLight: light }
        }
        case 'CANCEL-SELECT_LIGHT': {
            return { ...state, selectedLight: {} }
        }
        default: {
            return state
        }
    }
}

// case CREATE_PROJECT_ERROR:
//     return state
// case CREATE_PROJECT:
// return [...state, action.payload]
// const initalAuthState = {
//     user: null,
//     error: null
// }
// export const AuthReducer = (state = initalAuthState, action) => {
//     switch (action.type) {
//         case USER_SIGN_UP:
//             return { error: null, user: action.payload }
//         case USER_SIGN_UP_ERROR:
//             return { user: null, error: action.payload }
//         case USER_SIGN_IN:
//             return { error: null, user: action.payload }
//         case USER_SIGN_IN_ERROR:
//             return { user: null, error: action.payload }
//         case USER_SIGN_OUT:
//             return initalAuthState
//         default:
//             return state
//     }
// }
