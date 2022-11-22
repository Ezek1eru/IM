import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {

    apiKey: "AIzaSyADj7jzW2-pnEUllMY74oH8Y7qQyCrIvgg",
    authDomain: "instituto-misionero-ed37c.firebaseapp.com",
    projectId: "instituto-misionero-ed37c",
    storageBucket: "instituto-misionero-ed37c.appspot.com",
    messagingSenderId: "561204374309",
    appId: "1:561204374309:web:3e8810ff44dad1298a08cc"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);