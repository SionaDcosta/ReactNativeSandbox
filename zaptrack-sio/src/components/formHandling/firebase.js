// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB70UeLd4g14UqLkt33uZycztJeopc2pYY",
  authDomain: "zaptrack01.firebaseapp.com",
  projectId: "zaptrack01",
  storageBucket: "zaptrack01.appspot.com",
  messagingSenderId: "946722803934",
  appId: "1:946722803934:web:5c722f51a555d1f2fc724f"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const db = getFirestore(app);

export { auth, db };