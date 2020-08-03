const apiKey = "AIzaSyC3kUkF_ylvmXIPZP1mdgHDHlv8KXtEqHY"

const _getURL = (keywords, category) => {
    const Baseurl = "https://poly.googleapis.com/v1/assets?"
    let url = Baseurl + "key=" + apiKey

    if (category) {
        url += `&category=${category}`
    }
    url += "&pageSize=15"
    url += "&maxComplexity=MEDIUM"
    url += "&format=OBJ"
    url += "&curated=true"

    if (keywords) { url += `&keywords=${keywords}` }

    return url
}

export const getSearchResult = async (keywords, category) => {
    const url = _getURL(keywords, category)
    const res = await fetch(url)
    const data = await res.json()
    return data.assets
}

export const getModelURL = object => ({
    url: object.formats.find(format => format.formatType === "OBJ").root.url,
    murl: object.formats.find(format => format.formatType === "OBJ").resources[0].url
})

export const signIn = ({ firstName, lastName, email, password }) => {
    fetch("https://us-central1-vrc-rest-api-e9b42.cloudfunctions.net/signup", {
        body: {
            username: firstName + " " + lastName,
            password,
            email,
        }
    })
}