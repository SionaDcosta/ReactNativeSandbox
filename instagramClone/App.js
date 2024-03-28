import { View, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import NewPostScreen from "./screens/NewPostScreen";
import SignedInStack from "./navigation";
import 'react-native-gesture-handler';
import React, {useState, useEffect} from "react";
// import {initializeApp} from '@firebase/app'
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "@firebase/auth";
 
// const firebaseConfig = {
//   apiKey: "AIzaSyDWUsHaMWen7ueGvxZRtqtDPsjyOXSVp8I",
//   authDomain: "rn-instgaramclone.firebaseapp.com",
//   projectId: "rn-instgaramclone",
//   storageBucket: "rn-instgaramclone.appspot.com",
//   messagingSenderId: "474479315321",
//   appId: "1:474479315321:web:ffe10bc3d6c188422b87a8"
// };

// const app = initializeApp(firebaseConfig);
export default function App() {
  return <SignedInStack/>
}