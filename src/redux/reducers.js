const InitalProjectState = { projects: [], selectedProject: {} }
export const ProjectReducer = (state = InitalProjectState, action) => {
    switch (action.type) {
        case "GET_ALL_PROJECTS":
            return { ...InitalProjectState, projects: action.payload }
        case "OPEN_PROJECT":
            return { projects: [...state.projects], selectedProject: action.payload }
        default:
            return state
    }
}

const initialSceneState = {
    shareCode: "",
    sceneId: "",
    backgroubColor: "",
    gridHelper: {
        visible: false,
        size: 0,
        divid: 0
    },
    planeHelper: {
        visible: false,
        width: 0,
        height: 0,
        color: ""
    },
    skybox: {
        selectedSkybox: "",
        gallary: []
    },
    sky: false,
    stars: false,
    sound: ""
}

export const sceneReducer = (state = initialSceneState, action) => {
    switch (action.type) {
        case "LOAD-SCENE": {
            state = action.payload;
            return state;
        }
        case "ADD_SKYBOX":
            return {
                ...state, skybox: {
                    selectedSkybox: action.image,
                    gallary: [...state.skybox.gallary, action.image]
                }
            }
        case "SELECT_SKYBOX":
            return {
                ...state, skybox: {
                    selectedSkybox: action.image,
                    gallary: [...state.skybox.gallary]
                }
            }
        case 'DELETE_SKYBOX':
            const skybox = {
                selectedSkybox: state.skybox.selectedSkybox,
                gallary: state.skybox.gallary.filter(image => image !== action.image)
            }
            if (skybox.selectedSkybox === action.image) skybox.selectedSkybox = ""
            return { ...state, skybox: skybox }
        default: {
            return state;
        }
    }
}

const initialMeshState = {
    selectedMesh: {},
    meshes: [],
    lastMashId: 0,
}
export const meshReducer = (state = initialMeshState, action) => {
    switch (action.type) {
        case "LOAD-MESH": {
            state = action.payload;
            return state;
        }
        case 'ADD_MESH': {
            let meshNumber = state.lastMashId ? state.lastMashId + 1 : 1;
            let mesh = { ...action.payload, id: action.payload.type + " " + meshNumber }
            return { selectedMesh: mesh, meshes: [...state.meshes, mesh], lastMashId: meshNumber }
        }
        case 'COPY_MESH': {
            let meshNumber = state.lastMashId ? state.lastMashId + 1 : 1;
            let mesh = { 
                ...state.selectedMesh, 
                id: state.selectedMesh.type + " " + meshNumber,
                position: [
                    state.selectedMesh.position[0] + 1,
                    state.selectedMesh.position[1] + 1,
                    state.selectedMesh.position[2] + 1,
                ]
            }
            return { selectedMesh: mesh, meshes: [...state.meshes, mesh], lastMashId: meshNumber }
        }
        case 'DELETE_MESH': {
            return {
                ...state,
                selectedMesh: {},
                meshes: state.meshes.filter(mesh => mesh.id !== action.payload),
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
        case 'SELECT_MESH_TYPE': {
            return { ...state, selectedMesh: { type: "Text" } }
        }
        default: {
            return state
        }
    }
}

const initialLightState = {
    selectedLight: {},
    lights: [],
    lastLightId: 0
}
export const lightReducer = (state = initialLightState, action) => {
    switch (action.type) {
        case "LOAD-LIGHT": {
            state = action.payload;
            return state;
        }
        case 'ADD_LIGHT': {
            let lightNumber = state.lastLightId ? state.lastLightId + 1 : 1;
            let light = { ...action.payload, id: "Light " + lightNumber }
            return { selectedLight: light, lights: [...state.lights, light], lastLightId: lightNumber}
        }
        case 'DELETE_LIGHT': {
            return {
                ...state,
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
