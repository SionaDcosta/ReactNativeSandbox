import React from 'react';
import {   StyleSheet,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import FooterNavigation from './navigation/FooterNavigation';
import Header from './components/Header';
import { StatusBar } from 'expo-status-bar';


const App = () => {
  return (
    
    
    <NavigationContainer>
      <StatusBar/>
    <Header title="Traveller" style={styles.title}/>
      {/* <ListNavigation/> */}
      <FooterNavigation />
    </NavigationContainer>
    
  );
};
 
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    headerStyle: {
      backgroundColor: 'blue', 
    },
    headerTintColor: 'white', 
    headerTitleStyle: {
      fontWeight: 'bold', 
    },
  }
});