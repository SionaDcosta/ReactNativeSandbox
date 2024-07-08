import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity style={tailwind`relative mr-2`} testID="category-card" >
        <Image
            source={{uri:imgUrl}}
            style={tailwind`h-20 w-20 rounded`}
            testID="category-card-image"
        />
        <Text 
            style={tailwind`absolute bottom-1 left-1 text-white font-bold`}
          testID="category-card-title"
        >{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard