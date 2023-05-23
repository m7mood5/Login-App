// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAY5aPggQGcxqup1QUQkQ_jWBeAlHSJP_k",
    authDomain: "react-native-loginapp-6bf1e.firebaseapp.com",
    projectId: "react-native-loginapp-6bf1e",
    storageBucket: "react-native-loginapp-6bf1e.appspot.com",
    messagingSenderId: "727197135253",
    appId: "1:727197135253:web:6f81d5b317447257db469c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);