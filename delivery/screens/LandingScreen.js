import React from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native'
import LottieView from 'lottie-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'

const { height, width } = Dimensions.get('window')

const LandingScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={['rgba(0, 204, 187,0.7)', 'transparent']}
                style={styles.linearGradient}
                start={{ x: 0.5, y: 1 }}
                end={{ x: 0.5, y: 0 }}
            >
                <Text style={styles.appName}>DeliverEase</Text>
                <LottieView
                    source={require('../assets/Animation2.json')}
                    autoPlay
                    loop
                    style={styles.animation}
                />
            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    linearGradient: {
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animation: {
        width: 350,
        height: 350,
    },
    appName: {
        fontSize: 60,
        fontFamily: 'Satisfy-Regular',
        color: '#000',
        marginTop: 20,
        // Add more styling as needed
    },
})

export default LandingScreen
