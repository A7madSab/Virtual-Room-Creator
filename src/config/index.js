import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDH6nFHJ6xI24V-I7OvrKT7VlDyOerQ3YY",
    authDomain: "builder-c08ba.firebaseapp.com",
    databaseURL: "https://builder-c08ba.firebaseio.com",
    projectId: "builder-c08ba",
    storageBucket: "builder-c08ba.appspot.com",
    messagingSenderId: "526136218579",
    appId: "1:526136218579:web:cbb91115df334349489526",
    measurementId: "G-QJ7GXKTWTL"
};


firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase