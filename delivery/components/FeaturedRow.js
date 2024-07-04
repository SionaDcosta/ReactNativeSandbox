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
        *[type == "featured" && _id == $id]{
                restaurants[] {
                    _id,
                    name,
                    rating,
                    genre,
                    address,
                    short_description,
                    dishes[] {
                        _id,
                        name,
                        price,
                    },
                    type->{
                        name
                    }
                }
            }
            `,
            { id } //id: id
    ) .then(data => {
      setRestaurants(data[0]?.restaurants || []);
    })
  },[id]);
console.log(restaurants);
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
        <RestaurantCard
            id={123}
            imgUrl="https://links.papareact.com/gn7"
            title="Yo! sush"
            rating={4.5}
            genre="Japanese"
            address="123 Main St"
            short_description="this is a test"
            dishes={[]}
            long={20}
            lat={0}
        />
        
      </ScrollView>
    </View>
  )
}

export default FeaturedRow