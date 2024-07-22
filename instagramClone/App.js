import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack' // Create AuthStack.js for auth screens
import AppStack from './AppStack' // Create AppStack.js for main app screens
import { auth } from './components/loginScreen/firebase' // Import your Firebase auth instance
import { onAuthStateChanged } from '@firebase/auth'
import 'react-native-gesture-handler'

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(null) // null indicates loading

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(user ? true : false)
        })

        return () => unsubscribe() // Clean up the subscription on unmount
    }, [])

    if (isAuthenticated === null) {
        return null // Render nothing or a loading spinner while checking authentication
    }

    return (
        <NavigationContainer>
            {isAuthenticated ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}
