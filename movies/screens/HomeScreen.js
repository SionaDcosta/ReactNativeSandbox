import { View, Text, Platform, SafeAreaView, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import TrendingMovies from '../components/trendingMovies'

const ios = Platform.OS == 'ios'
const HomeScreen = () => {
    const [trending, setTrending] = useState([1,2,3])
  return (
    <View className='flex-1 bg-neutral-800'>
        <SafeAreaView>
            <StatusBar/>
            <View className='flex-row justify-between items-center mx-4'>
                <Bars3CenterLeftIcon size={30} strokeWidth={2} color='white'/>
                <Text className='text-white text-3xl font-bold'>Movies</Text>
                <TouchableOpacity>
                    <MagnifyingGlassIcon size={30} strokeWidth={2} color='white'/>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:10}}
        >
            {/* <TrendingMovies/> */}
            <Text>1</Text>
            <Text>1</Text>
        </ScrollView>
      
    </View>
  )
}

export default HomeScreen