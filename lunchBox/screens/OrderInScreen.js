import { View, Text } from 'react-native'
import React from 'react'
import { useCount } from '../context/CountContext' // Import the useCount hook

const OrderInScreen = () => {
    const { vegCount, nonVegCount } = useCount()

    return (
        <View>
            <Text>OrderInScreen</Text>
            <Text>Total Veg Count: {vegCount}</Text>
            <Text>Total Non-Veg Count: {nonVegCount}</Text>
        </View>
    )
}

export default OrderInScreen
