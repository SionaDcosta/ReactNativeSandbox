import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity style={tailwind`relative mr-2`}>
        <Image
            source={{uri:imgUrl}}
            style={tailwind`h-20 w-20 rounded`}
        />
        <Text 
            style={tailwind`absolute bottom-1 left-1 text-white font-bold`}
        >{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard