import * as React from 'react';
import { ScrollView, Text, Pressable } from 'react-native';

export default function WelcomeScreen({navigation}) {
  return (
    <ScrollView indicatorStyle={"white"} style={{ flex: 1, backgroundColor:'grey' }}>
      <Text
        style={{
          padding: 40,
          fontSize: 50,
          color: '#EDEFEE',
          textAlign: 'center',
        }}>
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
      <Pressable onPress={() => navigation.navigate('Menu')}>
        <Text style={{fontSize: 40, textAlign:'center'}}>View Menu</Text>
      </Pressable>
    </ScrollView>
  );
}