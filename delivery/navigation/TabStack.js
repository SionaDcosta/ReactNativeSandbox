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
import HomeTabScreen from '../screens/HomeTabScreen'
import DailyMenuScreen from '../screens/DailyMenuScreen'
import OrderCountScreen from '../screens/OrderCountScreen'
import tailwind from 'twrnc'
import AppStack from './AppStack' // Import the AppStack

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

export default function TabStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                contentStyle: { backgroundColor: 'white' },
                headerShown: false,
            }}
        >
            <Stack.Screen name="Main" component={HomeTabs} />
        </Stack.Navigator>
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
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    backgroundColor: '#19635d',
                    height: 80,
                },
            })}
        >
            <Tab.Screen name="HomeTabs" component={HomeTabScreen} />
            <Tab.Screen name="DailyMenu" component={DailyMenuScreen} />
            <Tab.Screen name="OrderCount" component={OrderCountScreen} />
            <Tab.Screen name="AppStack" component={AppStack} />
            {/* Add AppStack as the fourth tab */}
        </Tab.Navigator>
    )
}

const menuIcons = (route, focused) => {
    let icon
    if (route.name === 'HomeTabs') {
        icon = focused ? (
            <HomeIconSolid size={30} color="#22998f" />
        ) : (
            <HomeIconOutline size={30} strokeWidth={2} color="white" />
        )
    } else if (route.name === 'DailyMenu') {
        icon = focused ? (
            <HeartIconSolid size={30} color="#22998f" />
        ) : (
            <HeartIconOutline size={30} strokeWidth={2} color="white" />
        )
    } else if (route.name === 'OrderCount') {
        icon = focused ? (
            <ShoppingBagIconSolid size={30} color="#22998f" />
        ) : (
            <ShoppingBagIconOutline size={30} strokeWidth={2} color="white" />
        )
    } else if (route.name === 'AppStack') {
        icon = focused ? (
            <HeartIconSolid size={30} color="#22998f" />
        ) : (
            <HeartIconOutline size={30} strokeWidth={2} color="white" />
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
