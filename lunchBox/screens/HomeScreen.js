import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { useCount } from '../context/CountContext'
import { LinearGradient } from 'expo-linear-gradient'
import LottieView from 'lottie-react-native'

const HomeScreen = () => {
    const { vegCount, setVegCount, nonVegCount, setNonVegCount } = useCount()
    const [activeCounter, setActiveCounter] = useState(null)

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
            <Text style={styles.title}>Add your count here...</Text>

            <View style={styles.buttonContainer}>
                <TouchableWithoutFeedback onPress={handleAddVeg}>
                    <View
                        style={[
                            styles.button,
                            activeCounter === 'nonVeg' && styles.buttonDisabled, //if LHS is true, && will return RHS. if LHS is false, && will short-circuit and return false without evaluating the RHS.
                            activeCounter === 'veg' && styles.buttonActive,
                        ]}
                    >
                        <LinearGradient
                            colors={['#f7b733', '#b37c0c']}
                            style={styles.gradient}
                        >
                            <View style={styles.buttonContent}>
                                {activeCounter === 'veg' ? (
                                    <LottieView
                                        source={require('../assets/AnimationTick.json')}
                                        autoPlay
                                        loop={false}
                                        style={styles.lottieAnimation}
                                    />
                                ) : (
                                    <Text style={styles.buttonText}>
                                        Add Veg
                                    </Text>
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
                            colors={['#f7b733', '#b37c0c']}
                            style={styles.gradient}
                        >
                            <View style={styles.buttonContent}>
                                {activeCounter === 'nonVeg' ? (
                                    <LottieView
                                        source={require('../assets/AnimationTick.json')}
                                        autoPlay
                                        loop={false}
                                        style={styles.lottieAnimation}
                                    />
                                ) : (
                                    <Text style={styles.buttonText}>
                                        Add Non-Veg
                                    </Text>
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
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: 400,
        height: 150,
    },
    button: {
        borderRadius: 8,
        marginHorizontal: 8,
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
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
        backgroundColor: '#b0bec5',
        elevation: 0,
        shadowOpacity: 0,
    },
    buttonActive: {
        opacity: 0.5,
    },
    lottieAnimation: {
        width: 100,
        height: 100,
    },
})

export default HomeScreen
