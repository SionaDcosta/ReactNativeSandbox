import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import tailwind from 'twrnc';
import { ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon
 } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';

const RestaurantScreen = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();

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

  useEffect(()=>{
    dispatch(setRestaurant({
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
    }))
  },[])

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false,
    });
  },[])

  return (
    <>
      <BasketIcon/>
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
            <View style={tailwind`flex-row space-x-2 my-1`}>
              <View style={tailwind`flex-row items-center space-x-1`}>
                <StarIcon color='green' opacity={0.5} size={22}/>
                <Text style={tailwind`text-xs text-gray-500`}>
                      <Text style={tailwind`text-green-500`}>{rating}</Text>
                      . {short_description}
                  </Text>
              </View>

              <View style={tailwind`flex-row items-center space-x-1`}>
                <MapPinIcon color='gray' opacity={0.4} size={22}/>
                <Text style={tailwind`text-xs text-gray-500`}>Nearby . {address}</Text>
              </View>
            </View>
            <Text style={tailwind`text-gray-500 mt-2 pb-4`}>{short_description}</Text>
          </View>
          <TouchableOpacity style={tailwind`flex-row items-center space-x-2 p-4 border border-gray-300`}>
            <QuestionMarkCircleIcon color='gray' opacity={0.6} size={20}/>
            <Text style={tailwind`pl-2 flex-1 text-md font-bold` }>Have a food allergy?</Text>
            <ChevronRightIcon color='#00CCBB'/>
          </TouchableOpacity>
        </View>

        <View style={tailwind`pb-27`}>
          <Text style={tailwind`px-4 pt-6 mb-3 font-bold text-xl`}>Menu</Text>
          {/* DishRows */}
          {dishes.map((dish)=>(
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  )
}

export default RestaurantScreen