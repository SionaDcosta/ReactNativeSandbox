import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Discussion from '../screens/Discussion'
import Profile from '../screens/Profile'
import Chat from '../screens/Chat'
import Icon from '@expo/vector-icons/Ionicons'
import Icon2 from '@expo/vector-icons/Entypo'

const Tab = createBottomTabNavigator()
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#0894ff',
                tabBarInactiveTintColor: '#969696',
                tabBarStyle: {
                    height: 65,
                    justifyContent: 'center',
                    paddingVertical: 15,
                    // backgroundColor:'#FFF',
                    elevation: 2,
                },
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

const Stack = createStackNavigator()
const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="BottomTabNavigator"
                component={BottomTabNavigator}
            />
            <Stack.Screen name="Discussion" component={Discussion} />
        </Stack.Navigator>
    )
}

export default StackNavigator
const styles = StyleSheet.create({})
