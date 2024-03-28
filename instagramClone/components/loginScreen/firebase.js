// firebase.js

import { initializeApp } from '@firebase/app';
import { initializeAuth, getReactNativePersistence } from '@firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyDWUsHaMWen7ueGvxZRtqtDPsjyOXSVp8I",
    authDomain: "rn-instgaramclone.firebaseapp.com",
    projectId: "rn-instgaramclone",
    storageBucket: "rn-instgaramclone.appspot.com",
    messagingSenderId: "474479315321",
    appId: "1:474479315321:web:ffe10bc3d6c188422b87a8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
