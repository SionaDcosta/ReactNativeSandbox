import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import RestaurantScreen from '../screens/RestaurantScreen'
import BasketScreen from '../screens/BasketScreen'
import PreparingOrderScreen from '../screens/PreparingOrderScreen'
import DeliveryScreen from '../screens/DeliveryScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Stack = createNativeStackNavigator()

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen
                name="Basket"
                component={BasketScreen}
                options={{ presentation: 'modal', headerShown: false }}
            />
            <Stack.Screen
                name="PreparingOrderScreen"
                component={PreparingOrderScreen}
                options={{
                    presentation: 'fullScreenModal',
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Delivery"
                component={DeliveryScreen}
                options={{
                    presentation: 'fullScreenModal',
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    presentation: 'fullScreenModal',
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default AppStack
