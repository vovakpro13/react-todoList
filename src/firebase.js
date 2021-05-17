// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCjXFjfhncjzH9DRLVooOiGs862S--IpC0",
//     authDomain: "justtry-c0b9a.firebaseapp.com",
//     projectId: "justtry-c0b9a",
//     storageBucket: "justtry-c0b9a.appspot.com",
//     messagingSenderId: "250212666588",
//     appId: "1:250212666588:web:8b54eb7a129db938f0f819",
//     measurementId: "G-3LSQ1DG770"
// };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCjXFjfhncjzH9DRLVooOiGs862S--IpC0",
    authDomain: "justtry-c0b9a.firebaseapp.com",
    projectId: "justtry-c0b9a",
    storageBucket: "justtry-c0b9a.appspot.com",
    messagingSenderId: "250212666588",
    appId: "1:250212666588:web:8b54eb7a129db938f0f819",
    measurementId: "G-3LSQ1DG770"
})

const db = firebase.firestore();

export default db

