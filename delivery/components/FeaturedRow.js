import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import tailwind from 'twrnc'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import client from '../sanity'

const FeaturedRow = ({id, title, description}) => {

  const [restaurants, setRestaurants] = useState([])
  useEffect(()=>{
    client.fetch(`
        *[_type == "featured" && _id == $id]{
        ...,
        restaurants[]-> {
        ...,
        dishes[]->,
        type->{
        name
        }
        }
        ,
        }[0]
            `,
            { id } //id: id
    ) .then((data) => {
      setRestaurants(data?.restaurants);
    })
  },[id]);
// console.log(restaurants);
  return (
    <View>
      <View style={tailwind`mt-4 flex-row items-center justify-between px-4`}>
        <Text style={tailwind`font-bold text-lg`}>{title}</Text>
        <ArrowRightIcon color={"#00CCBB"}/>
      </View>
      <Text style={tailwind`text-xs text-gray-500 px-4`}>{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal:15,
        }}
        showsHorizontalScrollIndicator={false}
        style={tailwind`pt-4`}
      >
        {/* Restaurant Card */}

        {restaurants?.map(restaurant => (
          <RestaurantCard
          key={restaurant._id}
          id={restaurant._id}
          imgUrl={restaurant.image}
          address={restaurant.address}
          title={restaurant.name}
          dishes={restaurant.dishes}
          rating={restaurant.rating}
          short_description={restaurant.short_description}
          genre={restaurant.genre}
          long={restaurant.long}
          lat={restaurant.lat}
      />
        ))}

        
        
      </ScrollView>
    </View>
  )
}

export default FeaturedRow