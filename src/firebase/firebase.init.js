// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAazyUywzK2fichBb10GpmG74PADlbCNE",
    authDomain: "car-doctor-b3b7a.firebaseapp.com",
    projectId: "car-doctor-b3b7a",
    storageBucket: "car-doctor-b3b7a.appspot.com",
    messagingSenderId: "471301787698",
    appId: "1:471301787698:web:0fc3e88a851ac0d21d2c2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;