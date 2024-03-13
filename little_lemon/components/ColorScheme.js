import * as React from 'react';
import { ScrollView, Text, useColorScheme, StyleSheet } from 'react-native';

export default function ColorScheme() {
    const colorScheme = useColorScheme();
  return (

    <ScrollView indicatorStyle={"white"} style={{ flex: 1 }}>
      <Text
        style={[styles.container,
            colorScheme === 'light'?
        {backgroundColor:'#fff'}:
        {backgroundColor: '#333333'}]}>
        Welcome to Little Lemon
      </Text>
      <Text
        style={{
          fontSize: 38,
          padding: 20,
          marginVertical: 8,
          color: '#EDEFEE',
          textAlign: 'center',
        }}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        padding: 40,
    fontSize: 50,
    color: '#EDEFEE',
    textAlign: 'center',
    }
});