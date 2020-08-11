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


export const createScene = async (shareCode) => {
    var requestHeader = new Headers();
    requestHeader.append("Content-Type", "application/json");
    var raw = JSON.stringify({ "projectId": shareCode, "state": {} });
    var requestOptions = {
        method: 'POST',
        headers: requestHeader,
        body: raw,
        redirect: 'follow'
    };
    try {
        let res = await fetch("https://us-central1-vrc-rest-api-e9b42.cloudfunctions.net/createScene", requestOptions);
        let sceneDate = await res.json();
        return {
            shareCode: sceneDate.projectId,
            sceneId: sceneDate.id
        };
    }
    catch (error) {
        console.log('error', error)
    }
}

export const getSceneByProjectId = async (projectId) => {
    var requestHeader = new Headers();
    requestHeader.append("Content-Type", "application/json");
    var raw = JSON.stringify({ "projectId": projectId });
    var requestOptions = {
        method: 'POST',
        headers: requestHeader,
        body: raw,
        redirect: 'follow'
    };
    try {
        let result = await fetch("https://us-central1-vrc-rest-api-e9b42.cloudfunctions.net/getScene", requestOptions);
        let data = await result.json();

        if(data.message	=== "Forbidden_Worng projectId") {
            const response = await createScene(projectId);
            return {
                id: response.sceneId,
                projectId: response.shareCode,
                state: {}
            }
        }
        else {
            return data[0];
        }
        
    }
    catch(error) {
        console.log(error);
    }
}

export const updateScene = async (sceneId, sceneReducer, meshReducer, lightReducer) => {
    var requestHeader = new Headers();
    requestHeader.append("Content-Type", "application/json");
    var raw = JSON.stringify({ 
        "sceneId": sceneId, 
        "state": {
            "sceneReducer": sceneReducer, 
            "meshReducer": meshReducer, 
            "lightReducer": lightReducer
        }
    });
    var requestOptions = {
        method: 'POST',
        headers: requestHeader,
        body: raw,
        redirect: 'follow'
    };
    try {
        let res = await fetch("https://us-central1-vrc-rest-api-e9b42.cloudfunctions.net/updateScene", requestOptions)
        let data = await res.json();
        return(data);
    }
    catch(error) {
        console.log(error);
    }
}