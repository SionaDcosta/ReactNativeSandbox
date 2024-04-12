import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>BoxScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth:5,
        borderColor: 'black',
        
    },
    textStyle:{
        borderWidth:5,
        borderColor:'red',
        // marginVertical: 10,
        // marginHorizontal:10,
        margin:10,
}
});

export default BoxScreen