import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector, useDispatch } from 'react-redux'
import { selectIsAuthenticated, loadAuthState } from '../features/authSlice'
import AppStack from './AppStack'
import AuthStack from './AuthStack'
import LandingScreen from '../screens/LandingScreen'
import TabStack from './TabStack'

const Stack = createNativeStackNavigator()

const SPLASH_MINIMUM_DURATION = 2000 // Minimum duration for splash screen in milliseconds

const AppNavigator = () => {
    const dispatch = useDispatch()
    const isAuthenticated = useSelector(selectIsAuthenticated)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const loadState = async () => {
            const authPromise = dispatch(loadAuthState())
            const timeoutPromise = new Promise((resolve) =>
                setTimeout(resolve, SPLASH_MINIMUM_DURATION)
            )

            await Promise.all([authPromise, timeoutPromise])
            setIsLoading(false)
        }
        loadState()
    }, [dispatch])

    if (isLoading) {
        return <LandingScreen /> // Show splash screen while loading
    }

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isAuthenticated ? (
                <Stack.Screen name="Tab" component={TabStack} />
            ) : (
                <Stack.Screen name="Auth" component={AuthStack} />
            )}
        </Stack.Navigator>
    )
}

export default AppNavigator
