// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIz6PXUGCzsqgwFApyjsPGCCCHDhop_g0",
  authDomain: "lab5-seg3102-df152.firebaseapp.com",
  projectId: "lab5-seg3102-df152",
  storageBucket: "lab5-seg3102-df152.appspot.com",
  messagingSenderId: "57482078580",
  appId: "1:57482078580:web:f6f379f35e2baee7fca421",
  measurementId: "G-SMBWNVLE30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);