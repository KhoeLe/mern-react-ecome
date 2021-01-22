import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFFmULB_FYG7xBFKs5MAmgCKzw0uQC6qU",
    authDomain: "emcommerce-62938.firebaseapp.com",
    databaseURL: "https://emcommerce-62938.firebaseio.com",
    projectId: "emcommerce-62938",
    storageBucket: "emcommerce-62938.appspot.com",
    messagingSenderId: "479940456780",
    appId: "1:479940456780:web:a0059e118d47f137fb1fe9",
    measurementId: "G-N6W5BRPRRW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
