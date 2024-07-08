import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import tailwind from 'twrnc';
import { XMarkIcon } from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress'
import MapView, {Marker} from 'react-native-maps';

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (
    <View style={tailwind`bg-[#00CCBB] flex-1`}>
      <SafeAreaView style={tailwind`z-50`}>
        <View style={tailwind`flex-row justify-between items-center p-5`}>
          <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
            <XMarkIcon color='white' size={30}/>
          </TouchableOpacity>
          <Text style={tailwind`font-light text-white  font-bold text-lg`}>Order Help?</Text>
        </View>
        <View style={tailwind`bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md`}>
          <View style={tailwind`flex-row justify-between`}>
            <View>
              <Text style={tailwind`text-lg text-gray-400`}>Estimated Arrival</Text>
              <Text style={tailwind`text-4xl font-bold`}>45-50mins</Text>
            </View>
            <Image 
              source={{
                uri:"https://links.papareact.com/fls"
              }}
              style={tailwind`h-20 w-20`}
            />
          </View>
          <Progress.Bar size={30} color='#00CCBB' indeterminate={true}/>
          <Text style={tailwind`mt-3`}>
            You order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude:restaurant.lat,
          longitude:restaurant.long,
          latitudeDelta:0.005, //zoom scale
          longitudeDelta:0.005,
        }}
        style={tailwind`flex-1 -mt-10 z-0`}
        mapType='mutedStandard'
      >
        <Marker
          coordinate={{
            latitude:restaurant.lat,
            longitude:restaurant.long,
          }}
          title={restaurant.title}
          // description={}
          identifier='origin'
          pinColor='#00CCBB'
        />
      </MapView>
      <SafeAreaView style={tailwind`bg-white flex-row items-center h-28`}>
        <Image
          source={{
            uri: "https://links.papareact.com/wru"
          }}
          style={tailwind`h-12 w-12 bg-gray-300 p-4 rounded-full ml-5`}
        />
        <View style={tailwind`flex-1`}>
          <Text style={tailwind`text-lg ml-5`}>Stalin D</Text>
          <Text style={tailwind`text-gray-400 ml-5`}>Delivery Partner</Text>
        </View>
        <Text style={tailwind`text-[#00CCBB] text-lg mr-5 font-bold`}>Call</Text>
      </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen