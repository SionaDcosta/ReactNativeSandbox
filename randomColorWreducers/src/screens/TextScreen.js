import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'

const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');


  return (
    <View>
        <View>
        <Text>Enter Name:</Text>
      <TextInput 
      style={styles.input}
      autoCapitalize='none' //characters,none,sentences,words
      autoCorrect={false}
      value={name} //keeps the input field and the state variable in sync
      //Controlled vs. Uncontrolled Component: When you provide the value prop to the TextInput component, React treats it as a controlled component. 
    //   This means that React controls the state of the input field, and the input field's value is always controlled by React's state. 
    //   If you remove the value prop, the TextInput becomes an uncontrolled component, meaning its value is managed by the DOM itself.
    //onChangeText handles updating the state, while value ensures that the input field reflects the current state value. Together, they create a controlled component
      onChangeText={newValue => setName(newValue)}
      />
      <Text>My name is {name}</Text>
      {/* {true? <Text>That was true</Text>: null} */}
      </View>
      <View>
        <Text>Enter password:</Text>
        <TextInput 
      style={styles.input}
      autoCapitalize='none'
      autoCorrect={false}
      value={password} 
      onChangeText={newValue => setPassword(newValue)}
      />
      {/* Now we can place a ternary expr inside of our JSX to decide whether or not to show our error msg */}
      {password.length < 4 ? <Text>Password must be atleast 4 characters</Text>: null }
      </View>
      
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