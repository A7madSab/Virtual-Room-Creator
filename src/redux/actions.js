export const CREATE_PROJECT = "CREATE_PROJECT"
export const CREATE_PROJECT_ERROR = "CREATE_PROJECT_ERROR"

export const createProject = project => {
    return async (dispatch, getState, { getFirestore, getFirebase }) => {
        const firestore = getFirestore()
        try {
            await firestore.collection("projects").add({
                ...project,
                autherFirstName: "Ahmad",
                autherLastName: "Sabry",
                autherId: 5642,
                createdAt: new Date()
            })
            dispatch({ type: CREATE_PROJECT, project })
        } catch (err) {
            dispatch({ type: CREATE_PROJECT_ERROR, err })
        }
    }
}
// firestore.collection("projects").add({
//     ...project,
//     autherFirstName: "Ahmad",
//     autherLastName: "Sabry",
//     autherId: 5642,
//     createdAt: new Date()
// }).then(() => {
//     dispatch({ type: CREATE_PROJECT, project })
// }).catch((err) => {
//     dispatch({ type: CREATE_PROJECT_ERROR, err })
// })