import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/home/Header';
import Stories from '../components/Stories';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container} >
      <Header/>
      <Stories/>
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'black',
    }
})