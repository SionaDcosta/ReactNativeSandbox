import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import tailwind from 'twrnc';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';

const RestaurantScreen = () => {

  const navigation = useNavigation();
  const {params:{
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
  },} = useRoute();

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false,
    });
  },[])

  return (
    <ScrollView>
      <View style={tailwind`relative`}>
        <Image
        source={{uri:urlFor(imgUrl).url(),
        }}
        style={tailwind`w-full h-56 bg-gray-300 p-4`}
        />
        <TouchableOpacity 
        onPress={navigation.goBack}
        style={tailwind`absolute top-14 left-5 p-2 bg-gray-100 rounded-full `}>
          <ArrowLeftIcon size={20} color="#00CCBB"/>
        </TouchableOpacity>
      </View>
      <View style={tailwind`bg-white`}>
        <View style={tailwind`px-4 pt-4`}>
          <Text style={tailwind`text-3xl font-bold`}>{title}</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default RestaurantScreen