
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD8GM7Uhgu953-1Kuk8bWirSIrZ3YV2Pfo",
    authDomain: "event-planner-7514c.firebaseapp.com",
    projectId: "event-planner-7514c",
    storageBucket: "event-planner-7514c.appspot.com",
    messagingSenderId: "493811473479",
    appId: "1:493811473479:web:3e473e45182a3cbdf3a562",
    measurementId: "G-D0W72T4FD7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth};
