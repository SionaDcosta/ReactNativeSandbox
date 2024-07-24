import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity
            style={tailwind`relative mr-2`}
            testID="category-card"
        >
            <Image
                source={{ uri: imgUrl }}
                style={tailwind`h-20 w-40 rounded`}
                testID="category-card-image"
            />
            <Text
                style={[
                    tailwind`absolute bottom-1 right-1 text-white font-bold p-1`,
                    { backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 5 },
                ]}
                testID="category-card-title"
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CategoryCard
