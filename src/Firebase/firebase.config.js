// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0vvWjjnCLaFPVJFn83dXPMC_88bYCAwc",
    authDomain: "toy-marketplace-authentication.firebaseapp.com",
    projectId: "toy-marketplace-authentication",
    storageBucket: "toy-marketplace-authentication.appspot.com",
    messagingSenderId: "380880908268",
    appId: "1:380880908268:web:01327ed37876d2b6c91ac9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;