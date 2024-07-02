// InternStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Hscreen from '../screens/Hscreen';

const Stack = createStackNavigator();

const InternStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={Hscreen}/>
      {/* Add more admin-specific screens here */}
    </Stack.Navigator>
  );
};

export default InternStack;
