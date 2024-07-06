import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'

const DishRow = ({
    id,name, description,price,image
}) => {
  return (
    <TouchableOpacity>
      <View>
        <Text style={tailwind`text-lg mb-1`}>{name}</Text>
        <Text style={tailwind`text-gray-400`}>{description}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default DishRow