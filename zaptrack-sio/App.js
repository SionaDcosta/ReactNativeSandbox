import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { auth } from './src/components/formHandling/firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ls from './src/screens/Ls';
import AdminStack from './src/navigation/AdminStack';
import MentorStack from './src/navigation/MentorStack';
import InternStack from './src/navigation/InternStack';
import RoleBasedRoute from './src/components/RoleBasedRoute';
import Hscreen from './src/screens/Hscreen';
import LandingScreen from './src/components/LandingScreen';

const Stack = createStackNavigator();



// import LandingScreen from './src/components/LandingScreen';
// import adduser from './src/crud/adduser';
// import getrole from './src/crud/getrole';

export default function App() {
  // useEffect(() => {
    // Check if Firebase auth is initialized
    // if (auth) {
    //   console.log("Firebase initialized successfully");
    // } else {
    //   console.error("Firebase initialization failed");
    // }
  //   adduser("user456","admin");

  //   const fetchUserRole = async () => {
  //     const role = await getrole("user123");
  //     console.log("User role is:",role);
  //   };
  //   fetchUserRole();
  // }, []);
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='LoginScreen' component={Ls}/>
        <Stack.Screen name='HomeScreen' component={Hscreen}/>
        <Stack.Screen name='LandingScreen' component={LandingScreen} />
        <Stack.Screen name='AdminDashboard'>
          {() => (
            <RoleBasedRoute role="Admin">
              <AdminStack/>
            </RoleBasedRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name='MentorDashboard'>
          {() => (
            <RoleBasedRoute role="Mentor">
              <MentorStack/>
            </RoleBasedRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name='InternDashboard'>
          {() => (
            <RoleBasedRoute role="Intern">
              <InternStack/>
            </RoleBasedRoute>
          )}
        </Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>
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
