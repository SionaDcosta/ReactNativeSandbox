import { View, Text } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'

const MenuCard = ({ item }) => {
    return (
        <View
            style={{
                borderRadius: 40,
                backgroundColor: '#007063',
                height: 400,
                width: 390,
                elevation: 5, // Add elevation for Android
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 10,
            }}
        >
            <View style={tailwind`px-5 mt-6 items-center`}>
                {Object.keys(item).map((day, index) => (
                    <View key={index} style={tailwind`mb-4`}>
                        <Text
                            style={tailwind`text-4xl text-center text-white font-semibold mb-4`}
                        >
                            {day}
                        </Text>
                        <View
                            style={[
                                tailwind`items-center rounded-xl p-1 w-80`,
                                { backgroundColor: 'rgba(255,255,255,0.2)' },
                            ]}
                        >
                            {item[day].split(', ').map((menuItem, i) => (
                                <Text
                                    key={i}
                                    style={tailwind`text-base font-semibold text-2xl text-white py-1 `}
                                >
                                    {menuItem}
                                </Text>
                            ))}
                        </View>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default MenuCard
