import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import tailwind from 'twrnc'

export default function TrendingMovies({data}) {
  return (
    <View style={tailwind`mb-8`}>
      <Text style={tailwind` text-white text-xl mx-4 mb-5`}>Trending</Text>
      <Carousel
        data={data}
        renderItem={({item}) => <MovieCard item={item}/>}
        firstItem={1}
        inactiveSlideOpacity={0.60}
        sliderWidth={600}
        itemWidth={400}
        slideStyle={{display:'flex', alignItems:'center'}}
      />
    </View>
  )
}

const MovieCard =({item}) => {
    return (
        <TouchableWithoutFeedback>
            <Text style={tailwind`text-white `}>Movie</Text>
        </TouchableWithoutFeedback>
    )
}