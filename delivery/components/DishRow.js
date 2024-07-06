import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import tailwind from 'twrnc';
import currencyFormatter from 'currency-formatter';
import { urlFor } from '../sanity';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline';

const DishRow = ({
    id, name, description, price, image
}) => {
    const [isPressed, setIsPressed] = useState(false)



  return (
    <>
        <TouchableOpacity 
            onPress={()=> setIsPressed(!isPressed)}
            style={tailwind`bg-white border p-4 border-gray-200 ${isPressed ? 'border-b-0' : ''}`}>
            <View style={tailwind`flex-row`}>
                <View style={tailwind`flex-1 pr-2`}>
                    <Text style={tailwind`text-lg mb-1`}>{name}</Text>
                    <Text style={tailwind`text-gray-400`}>{description}</Text>
                    <Text style={tailwind`text-gray-400 mt-2`}>
                        {currencyFormatter.format(price, { code: 'INR' })}
                    </Text>
                </View>
                <View>
                    <Image
                        style={[tailwind`h-20 w-20 bg-gray-300 p-4`,{borderWidth:1, borderColor:"#F3F3F4"}]}
                        source={{uri:urlFor(image).url()}}
                    />
                </View>
        </View>
        </TouchableOpacity>
        {isPressed && (
            <View style={tailwind`bg-white px-4`}>
                <View style={[tailwind`flex-row items-center pb-3`, { marginHorizontal: -8 }]}>
                    <TouchableOpacity>
                        <MinusCircleIcon color="#00CCBB" size={40}/> 
                        {/* color={items.length > 0 ? "#00CCBB": "gray"} */}
                    </TouchableOpacity>
                    <Text>0</Text>
                    <TouchableOpacity>
                        <PlusCircleIcon color="#00CCBB" size={40}/> 
                        {/* color={items.length > 0 ? "#00CCBB": "gray"} */}
                    </TouchableOpacity>
                </View>
            </View>
        )}
    </>
  );
}

export default DishRow;
