import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import RestaurantScreen from './screens/RestaurantScreen'
import { Provider } from 'react-redux'
import { store } from './store'
import BasketScreen from './screens/BasketScreen'
import PreparingOrderScreen from './screens/PreparingOrderScreen'
import DeliveryScreen from './screens/DeliveryScreen'
import ProfileScreen from './screens/ProfileScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import AppNavigator from './navigation/AppNavigator'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'

const Stack = createNativeStackNavigator()

const fetchFonts = () => {
    return Font.loadAsync({
        'Satisfy-Regular': require('./assets/fonts/Satisfy-Regular.ttf'),
    })
}

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false)

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontLoaded(true)}
                onError={console.warn}
            />
        )
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <AppNavigator />
            </NavigationContainer>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

{
    /* <Stack.Navigator>
                    <Stack.Screen name="Register" component={RegisterScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen
                        name="Restaurant"
                        component={RestaurantScreen}
                    />
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
                </Stack.Navigator> */
}
