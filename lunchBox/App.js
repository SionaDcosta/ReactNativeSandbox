import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
    HomeIcon as HomeIconOutline,
    HeartIcon as HeartIconOutline,
    ShoppingBagIcon as ShoppingBagIconOutline,
} from 'react-native-heroicons/outline'
import {
    HomeIcon as HomeIconSolid,
    HeartIcon as HeartIconSolid,
    ShoppingBagIcon as ShoppingBagIconSolid,
} from 'react-native-heroicons/solid'
import HomeScreen from './screens/HomeScreen'
import MenuScreen from './screens/MenuScreen'
import OrderInScreen from './screens/OrderInScreen'
import tailwind from 'twrnc'
import { CountProvider } from './context/CountContext' // Import the CountProvider

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <CountProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        contentStyle: { backgroundColor: 'white' },
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="Main" component={HomeTabs} />
                </Stack.Navigator>
            </NavigationContainer>
        </CountProvider>
    )
}

function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) =>
                    menuIcons(route, focused),
                tabBarStyle: {
                    marginBottom: 20,
                    borderRadius: 50,
                    backgroundColor: '#d99f18',
                    height: 80,
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Menu" component={MenuScreen} />
            <Tab.Screen name="OrderIn" component={OrderInScreen} />
        </Tab.Navigator>
    )
}

const menuIcons = (route, focused) => {
    let icon
    if (route.name === 'Home') {
        icon = focused ? (
            <HomeIconSolid size={30} color="#b37d00" />
        ) : (
            <HomeIconOutline size={30} strokeWidth={2} color="white" />
        )
    } else if (route.name === 'Menu') {
        icon = focused ? (
            <HeartIconSolid size={30} color="#b37d00" />
        ) : (
            <HeartIconOutline size={30} strokeWidth={2} color="white" />
        )
    } else if (route.name === 'OrderIn') {
        icon = focused ? (
            <ShoppingBagIconSolid size={30} color="#b37d00" />
        ) : (
            <ShoppingBagIconOutline size={30} strokeWidth={2} color="white" />
        )
    }
    let buttonClass = focused ? 'bg-white' : ''
    return (
        <View
            style={tailwind`flex items-center rounded-full p-3 ${buttonClass}`}
        >
            {icon}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
