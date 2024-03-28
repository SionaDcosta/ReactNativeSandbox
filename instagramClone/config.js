// import { initializeApp } from 'firebase/app';

// // import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// // import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// const firebaseConfig = {
//     apiKey: "AIzaSyBD3gRw5YMVaTtvVE_Tmt_TcFHwGdD67vM",
//     authDomain: "rn-instagramclone-fff12.firebaseapp.com",
//     projectId: "rn-instagramclone-fff12",
//     storageBucket: "rn-instagramclone-fff12.appspot.com",
//     messagingSenderId: "445865690339",
//     appId: "1:445865690339:web:91960e8a45ac73bc6371d6"
//   };
//   const app = initializeApp(firebaseConfig); 
//   // Initialize Firebase Auth with AsyncStorage for persistence
//   // const auth = initializeAuth(app, 
//   // {   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
//   // }); 
//   // export { app, auth };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBD3gRw5YMVaTtvVE_Tmt_TcFHwGdD67vM",
  authDomain: "rn-instagramclone-fff12.firebaseapp.com",
  projectId: "rn-instagramclone-fff12",
  storageBucket: "rn-instagramclone-fff12.appspot.com",
  messagingSenderId: "445865690339",
  appId: "1:445865690339:web:91960e8a45ac73bc6371d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(getAuth(app), {
  persistence: getReactNativePersistence(AsyncStorage)
});

export default app;
export { auth };