import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_ID,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyD3_SJk0xqEokciRJguWZ3z1I03wpj69ZI",
  authDomain: "clone-abb21.firebaseapp.com",
  projectId: "clone-abb21",
  storageBucket: "clone-abb21.appspot.com",
  messagingSenderId: "1078535063208",
  appId: "1:1078535063208:web:1d0fa18e88fd2b1fbca49d",
  measurementId: "G-BJ0JP8R4YK"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
