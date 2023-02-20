import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxhRaRQvlcvJMWnYNGP21HQYF5BBi6NFU",
  authDomain: "queuing-system-management.firebaseapp.com",
  projectId: "queuing-system-management",
  storageBucket: "queuing-system-management.appspot.com",
  messagingSenderId: "327014395803",
  appId: "1:327014395803:web:505575b17f39b92ff8fb3e",
  measurementId: "G-MZ8RJ2H67V",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export {auth};
