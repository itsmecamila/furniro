import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgemcAX6VXliwkL9bjFtMVCYuIo_I-tbA",
  authDomain: "furniro-317d0.firebaseapp.com",
  projectId: "furniro-317d0",
  storageBucket: "furniro-317d0.appspot.com",
  messagingSenderId: "965850766992",
  appId: "1:965850766992:web:81f240292b1e5150818215"
};

export const app = initializeApp(firebaseConfig);
export const projectAuth = getAuth(app);