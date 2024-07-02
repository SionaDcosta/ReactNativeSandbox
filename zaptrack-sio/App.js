import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LandingScreen from './src/components/LandingScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { auth } from './src/components/formHandling/firebase';

import adduser from './src/crud/adduser';
import getrole from './src/crud/getrole';

export default function App() {
  useEffect(() => {
    // Check if Firebase auth is initialized
    // if (auth) {
    //   console.log("Firebase initialized successfully");
    // } else {
    //   console.error("Firebase initialization failed");
    // }
    adduser("user456","admin");

    const fetchUserRole = async () => {
      const role = await getrole("user123");
      console.log("User role is:",role);
    };
    fetchUserRole();
  }, []);
  
  return (
    <SafeAreaView>
      <View>
        <Text>Firestore</Text>
      </View>
      <LandingScreen/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
