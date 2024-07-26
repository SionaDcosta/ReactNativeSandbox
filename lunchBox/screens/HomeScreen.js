import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native'
import React, { useState } from 'react'
import { useCount } from '../context/CountContext' // Import the useCount hook
import { LinearGradient } from 'expo-linear-gradient' // Import LinearGradient from Expo
import { MaterialIcons } from '@expo/vector-icons' // Import MaterialIcons from Expo

const HomeScreen = () => {
    const { vegCount, setVegCount, nonVegCount, setNonVegCount } = useCount()
    const [activeCounter, setActiveCounter] = useState(null) // Track which counter is active

    const handleAddVeg = () => {
        if (activeCounter === null) {
            // Check if no counter is active
            setVegCount(vegCount + 1)
            setActiveCounter('veg') // Set active counter to Veg
        }
    }

    const handleAddNonVeg = () => {
        if (activeCounter === null) {
            // Check if no counter is active
            setNonVegCount(nonVegCount + 1)
            setActiveCounter('nonVeg') // Set active counter to Non-Veg
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>HomeScreen</Text>

            <View style={styles.buttonContainer}>
                <TouchableWithoutFeedback onPress={handleAddVeg}>
                    <View
                        style={[
                            styles.button,
                            activeCounter === 'nonVeg' && styles.buttonDisabled,
                            activeCounter === 'veg' && styles.buttonActive,
                        ]}
                    >
                        <LinearGradient
                            colors={['#f7b733', '#fc4a1a']} // Gradient colors
                            style={styles.gradient}
                        >
                            <View style={styles.buttonContent}>
                                <Text style={styles.buttonText}>Add Veg</Text>
                                {activeCounter === 'veg' && (
                                    <MaterialIcons
                                        name="check"
                                        size={24}
                                        color="#fff"
                                        style={styles.checkIcon}
                                    />
                                )}
                            </View>
                        </LinearGradient>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={handleAddNonVeg}>
                    <View
                        style={[
                            styles.button,
                            activeCounter === 'veg' && styles.buttonDisabled,
                            activeCounter === 'nonVeg' && styles.buttonActive,
                        ]}
                    >
                        <LinearGradient
                            colors={['#f7b733', '#fc4a1a']} // Gradient colors
                            style={styles.gradient}
                        >
                            <View style={styles.buttonContent}>
                                <Text style={styles.buttonText}>
                                    Add Non-Veg
                                </Text>
                                {activeCounter === 'nonVeg' && (
                                    <MaterialIcons
                                        name="check"
                                        size={24}
                                        color="#fff"
                                        style={styles.checkIcon}
                                    />
                                )}
                            </View>
                        </LinearGradient>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 80,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Space buttons evenly
        width: '100%',
        maxWidth: 400, // Limit button container width
        height: 150,
    },
    button: {
        borderRadius: 8,
        marginHorizontal: 8, // Space between buttons
        width: '45%', // Adjust button width to fit side by side
        alignItems: 'center', // Center items horizontally
        justifyContent: 'center', // Center items vertically
        elevation: 5, // Shadow for Android
        shadowColor: '#000', // Shadow color for iOS
        shadowOffset: { width: 0, height: 4 }, // Shadow offset
        shadowOpacity: 0.1, // Shadow opacity
        shadowRadius: 8, // Shadow radius
    },
    gradient: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonDisabled: {
        backgroundColor: '#b0bec5', // Gray color for disabled state
        elevation: 0,
        shadowOpacity: 0,
    },
    buttonActive: {
        opacity: 0.5, // Reduce opacity to indicate the button is active
    },
    checkIcon: {
        marginLeft: 10, // Space between text and checkmark
    },
})

export default HomeScreen
