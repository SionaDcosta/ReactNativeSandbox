import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FormikPostUploader from './FormikPostUploader'




const AddNewPost = () => {
  return (
    <View style={styles.container}>
        <Header/>
       <FormikPostUploader/>
    </View>
  )
}

const Header = () => (
    <View style={styles.headerContainer}>
        <TouchableOpacity>
        <Image source={require('../../assets/AddNewPost_icons8-back.png')}
        style={{ width:30, height: 30}}/>
        </TouchableOpacity>
      <Text style={styles.headerText}>New Post</Text>
      <Text></Text>
    </View>
)
const styles=StyleSheet.create({
    container:{
        marginHorizontal:10,
    },
    headerContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    headerText:{
        fontWeight:'700',
        fontSize:20,
        marginRight: 23,
    }
})

export default AddNewPost;