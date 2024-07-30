import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useCount } from '../context/CountContext' // Import the useCount hook
import { LinearGradient } from 'expo-linear-gradient' // Import LinearGradient from Expo
import { MaterialIcons } from '@expo/vector-icons' // Import MaterialIcons from Expo

const OrderInScreen = () => {
    const { vegCount, nonVegCount } = useCount()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Total Count</Text>

            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <LinearGradient
                        colors={['#f7b733', '#b37c0c']}
                        style={styles.gradient}
                    >
                        <View style={styles.buttonContent}>
                            <Text style={styles.buttonText}>
                                Veg: {vegCount}
                            </Text>
                        </View>
                    </LinearGradient>
                </View>
                <View style={styles.button}>
                    <LinearGradient
                        colors={['#f7b733', '#b37c0c']}
                        style={styles.gradient}
                    >
                        <View style={styles.buttonContent}>
                            <Text style={styles.buttonText}>
                                Non-Veg: {nonVegCount}
                            </Text>
                        </View>
                    </LinearGradient>
                </View>
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
        marginBottom: 40,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Space buttons evenly
        width: '100%',
        maxWidth: 400, // Limit button container width
        height: 100,
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
        height: 100,
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
})

export default OrderInScreen
