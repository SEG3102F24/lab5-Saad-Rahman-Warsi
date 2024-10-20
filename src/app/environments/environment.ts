// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getDatabase,ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCIz6PXUGCzsqgwFApyjsPGCCCHDhop_g0",
  authDomain: "lab5-seg3102-df152.firebaseapp.com",
  projectId: "lab5-seg3102-df152",
  storageBucket: "lab5-seg3102-df152.appspot.com",
  messagingSenderId: "57482078580",
  appId: "1:57482078580:web:f6f379f35e2baee7fca421",
  measurementId: "G-SMBWNVLE30"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dbstore=getFirestore(app)
export const db=getDatabase(app)
export const dbref = ref(db)
const analytics = getAnalytics(app);

