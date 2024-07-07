import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {useSelector} from 'react-redux' 
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'
import tailwind from 'twrnc'
import currencyFormatter from 'currency-formatter'

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  return (
    <View style={tailwind`absolute bottom-5 w-full z-50`}>
      <TouchableOpacity style={tailwind`mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1` }>
        <Text style={tailwind`text-white font-extrabold text-lg bg-[#01A296] py-1 px-2`}>{items.length}</Text>
        <Text style={tailwind`flex-1 text-lg text-white font-extrabold text-center`}> View Basket </Text>
        <Text style={tailwind`text-lg text-white font-extrabold`}>
          {currencyFormatter.format(basketTotal, { code: 'INR' })}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon