import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRU7MreVinZu5AddJwhl3SVsjq0u7pTT0",
  authDomain: "themepark-business-app.firebaseapp.com",
  projectId: "themepark-business-app",
  storageBucket: "themepark-business-app.appspot.com",
  messagingSenderId: "116941068736",
  appId: "1:116941068736:web:d8c6e6ef99e7fd2aab5025",
  measurementId: "G-2YC9LHLH9C"
};

const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireStore, auth, storage };