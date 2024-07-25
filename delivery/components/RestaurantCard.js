import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import { MapPinIcon, StarIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
}) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Restaurant', {
                    id,
                    imgUrl,
                    title,
                    rating,
                    genre,
                    address,
                    short_description,
                    dishes,
                    long,
                    lat,
                })
            }}
            style={tailwind`bg-white mr-3 shadow`}
        >
            <Image
                source={{
                    uri: urlFor(imgUrl).url(),
                }}
                style={tailwind`h-36 w-64 rounded-sm`}
            />

            <View style={tailwind`px-3 pb-4`}>
                <Text style={tailwind`font-bold text-lg pt-2`}>{title}</Text>
                <View style={tailwind`flex-row items-center`}>
                    <StarIcon color="green" opacity={0.5} size={22} />
                    <Text style={tailwind`text-xs text-gray-500`}>
                        <Text style={tailwind`text-green-500`}>{rating}</Text>.{' '}
                        {short_description}
                    </Text>
                </View>

                <View style={tailwind`flex-row items-center`}>
                    <MapPinIcon color="gray" opacity={0.4} size={22} />
                    <Text style={tailwind`text-xs text-gray-500`}>
                        Nearby . {address}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard
