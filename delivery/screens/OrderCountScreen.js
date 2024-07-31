// OrderCountScreen.js
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { LinearGradient } from 'expo-linear-gradient'

const OrderCountScreen = () => {
    const { vegCount, nonVegCount } = useSelector((state) => state.count)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Total Count</Text>

            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <LinearGradient
                        colors={['#f7b733', '#b37c0c']}
                        style={styles.gradient}
                    >
                        <Text style={styles.buttonText}>Veg: {vegCount}</Text>
                    </LinearGradient>
                </View>
                <View style={styles.button}>
                    <LinearGradient
                        colors={['#f7b733', '#b37c0c']}
                        style={styles.gradient}
                    >
                        <Text style={styles.buttonText}>
                            Non-Veg: {nonVegCount}
                        </Text>
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
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export default OrderCountScreen
