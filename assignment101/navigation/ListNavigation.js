import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PostList from '../components/PostList';


const Stack = createStackNavigator();

const ListNavigation = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="List" component={ListScreen} /> */}
      <Stack.Screen name="PostList" component={PostList} />
      {/* <Stack.Screen name="Data" component={DataScreen} /> */}
    </Stack.Navigator>
  );
};

export default ListNavigation;
