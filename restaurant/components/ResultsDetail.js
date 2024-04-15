import { View, Image, Text, StyleSheet } from 'react-native'
import React from 'react'

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
        <Image 
        source={{uri:result.image_url}}
        style={styles.image}
        />
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      marginLeft:15  
    },
    image:{
        height:220,
        width: 250,
        borderRadius: 5,
        marginBottom:5,
    },
    name:{
        fontWeight:'bold',
        
    }
})
export default ResultsDetail