import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAoOPQgvdjh_j0cweB54YW0nSA81uRKfng",
  authDomain: "cineaste-2134b.firebaseapp.com",
  projectId: "cineaste-2134b",
  storageBucket: "cineaste-2134b.appspot.com",
  messagingSenderId: "596821049980",
  appId: "1:596821049980:web:5a0c35d94b3fe29899fff9"
})

export const auth = app.auth()
export default app
