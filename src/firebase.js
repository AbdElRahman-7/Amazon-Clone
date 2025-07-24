import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
};
*/
const firebaseConfig = {
  apiKey: "AIzaSyBMyewh4acGYDg2UVugxT60u9XUy0tuA4k",
  authDomain: "clone-af430.firebaseapp.com",
  projectId: "clone-af430",
  storageBucket: "clone-af430.firebasestorage.app",
  messagingSenderId: "374642059275",
  appId: "1:374642059275:web:ba7abc0ac2d9dbd2b2bf0e",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
