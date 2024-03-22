import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/home/Header';
import Stories from '../components/Stories';
import Post from '../components/home/Post';
import { Posts } from '../data/posts';
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container} >
      <Header/>
      <Stories/>
      <ScrollView>
        {Posts.map((post,index) => (
          <Post post={post} key={index}/>
        ))}
      </ScrollView>
      
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