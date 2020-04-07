
import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from "./actions"
const InitalProjectState = [
    { id: 1, title: "Garage", content: "Dolor adipisicing tempor dolore ut cillum quis sunt ipsum." },
    { id: 2, title: "Hospital", content: "Cupidatat nulla culpa est incididunt aliquip non proident reprehenderit Lorem sint deserunt nostrud veniam." },
    { id: 3, title: "Space", content: "Anim duis adipisicing nisi ex enim." }
]

export const ProjectReducer = (state = InitalProjectState, action) => {
    switch (action.type) {
        case CREATE_PROJECT:
            return [...state, action.project]
        case CREATE_PROJECT_ERROR:
            console.log("CREATE_PROJECT_ERROR", action.err)
            return state
        default:
            return state
    }
}

export const AuthReducer = (state = {}, action) => {
    switch (action.type) {
        default:
            return state
    }
}
