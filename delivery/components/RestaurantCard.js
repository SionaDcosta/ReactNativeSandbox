import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import { MapPinIcon, StarIcon } from 'react-native-heroicons/outline'

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
  return (
    <TouchableOpacity style={tailwind`bg-white mr-3 shadow`}>
        <Image
            source={{
                uri:imgUrl,
            }}
            style={tailwind`h-36 w-64 rounded-sm`}
        />

        <View style={tailwind`px-3 pb-4`}>
            <Text style={tailwind`font-bold text-lg pt-2`}>{title}</Text>
            <View style={tailwind`flex-row items-center space-x-1`}>
                <StarIcon color='green' opacity={0.5} size={22}/>
                <Text style={tailwind`text-xs text-gray-500`}>
                    <Text style={tailwind`text-green-500`}>{rating}</Text>
                    . {genre}
                </Text>
            </View>

            <View style={tailwind`flex-row items-center space-x-1`}>
                <MapPinIcon color="gray" opacity={0.4} size={22}/>
                <Text style={tailwind`text-xs text-gray-500`}>Nearby . {address}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard