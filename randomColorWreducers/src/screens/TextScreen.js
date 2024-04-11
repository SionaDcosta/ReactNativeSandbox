import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const TextScreen = () => {
  return (
    <View>
      <TextInput 
      style={styles.input}
      autoCapitalize='none' //characters,none,sentences,words
      autoCorrect={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        margin: 15,
        borderColor:'black',
        borderWidth:1,
    }
});
export default TextScreen;