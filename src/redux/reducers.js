import { GET_PROJECT } from "./actions"
// import { USER_SIGN_UP, USER_SIGN_UP_ERROR, USER_SIGN_IN, USER_SIGN_IN_ERROR, USER_SIGN_OUT } from "./actions"

const InitalProjectState = []
export const ProjectReducer = (state = InitalProjectState, action) => {
    switch (action.type) {
        case GET_PROJECT:
            return action.payload
        default:
            return state
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
