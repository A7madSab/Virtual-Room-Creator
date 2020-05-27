
export const signIn = ({ firstName, lastName, email, password }) => {
    fetch("https://us-central1-vrc-rest-api-e9b42.cloudfunctions.net/signup", {
        body: {
            username: firstName + " " + lastName,
            password,
            email,
        }
    })
}