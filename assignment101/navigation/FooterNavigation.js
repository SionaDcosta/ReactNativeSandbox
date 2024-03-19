import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';
import LocationScreen from '../screens/LocationScreen';
import ListScreen from '../screens/ListScreen';
import { Ionicons } from '@expo/vector-icons';

 
const Tab = createBottomTabNavigator();
 
const FooterNavigation = () => {
  return (

<Tab.Navigator
    screenOptions={({route})=> ({
        tabBarIcon: ({focused,color,size})=>{
            let iconName;
            
            if( route.name === 'Home'){
                iconName= focused? 'home':'home-outline';
            }else if( route.name === 'Camera'){
                iconName= focused? 'camera':'camera-outline';
            }else if( route.name === 'Location' ){
                iconName= focused? 'location':'location';
            }else if( route.name === 'List'){
                iconName= focused? 'list-circle':'list-circle-outline';
            }
            return <Ionicons name={iconName} size={size} color={color}/>
        }
    })}
    tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        tabBarLabelStyle: {
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
          },
      }}
>
<Tab.Screen name="Home" component={HomeScreen} />
<Tab.Screen name="Camera" component={CameraScreen} />
<Tab.Screen name="Location" component={LocationScreen} />
<Tab.Screen name="List" component={ListScreen} />
</Tab.Navigator>

  );
};
 
export default FooterNavigation;