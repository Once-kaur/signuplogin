
import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjIS0Mn5hF9fIKuZiXdTjje7lGiCA8GB0",
  authDomain: "chatapp-a7ad8.firebaseapp.com",
  projectId: "chatapp-a7ad8",
  storageBucket: "chatapp-a7ad8.appspot.com",
  messagingSenderId: "199621214254",
  appId: "1:199621214254:web:3df54fca5e37e7fec75fbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
export const storage = getStorage(app);


export {auth}