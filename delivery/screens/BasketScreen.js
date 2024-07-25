import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import {
    removeFromBasket,
    selectBasketItems,
    selectBasketTotal,
} from '../features/basketSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
import tailwind from 'twrnc'
import { XCircleIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import currencyFormatter from 'currency-formatter'

const BasketScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItems)
    const basketTotal = useSelector(selectBasketTotal)
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            ;(results[item.id] = results[item.id] || []).push(item)
            return results
        }, {})
        setGroupedItemsInBasket(groupedItems)
    }, [items])
    // console.log(groupedItemsInBasket);
    return (
        <SafeAreaView style={tailwind`flex-1 bg-white`}>
            <View style={tailwind`flex-1 bg-gray-100`}>
                <View
                    style={tailwind`p-5 border-b border-[#00CCBB] bg-white shadow-xl`}
                >
                    <View>
                        <Text style={tailwind`text-lg font-bold text-center`}>
                            Order Summary
                        </Text>
                        <Text style={tailwind`text-center text-gray-400`}>
                            {restaurant.title}
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={navigation.goBack}
                        style={tailwind`rounded-full bg-gray-100 absolute top-3 right-5`}
                    >
                        <XCircleIcon color="#00CCBB" size={40} />
                    </TouchableOpacity>
                </View>
                <View
                    style={tailwind`flex-row items-center px-4 py-3 bg-white my-5`}
                >
                    <Image
                        source={{
                            uri: 'https://links.papareact.com/wru',
                        }}
                        style={tailwind`h-7 w-7 bg-gray-300 p-4 rounded-full`}
                    />
                    <Text style={tailwind`flex-1`}>
                        {' '}
                        Deliver in 45 - 50mins
                    </Text>
                    <TouchableOpacity>
                        <Text style={tailwind`text-[#00CCBB]`}>Change</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    {Object.entries(groupedItemsInBasket).map(
                        ([key, items]) => (
                            <View
                                key={key}
                                style={[
                                    {
                                        borderBottomWidth: 1,
                                        borderColor: '#ededed',
                                    },
                                    tailwind`flex-row items-center bg-white py-2 px-5`,
                                ]}
                            >
                                <Text>{items.length}x</Text>
                                <Image
                                    source={{
                                        uri: urlFor(items[0]?.image).url(),
                                    }}
                                    style={tailwind`h-12 w-12 rounded-full ml-3`}
                                />
                                <Text style={tailwind`flex-1 ml-3`}>
                                    {items[0]?.name}
                                </Text>
                                <Text style={tailwind`text-gray-600 ml-3`}>
                                    {currencyFormatter.format(items[0]?.price, {
                                        code: 'INR',
                                    })}
                                </Text>
                                <TouchableOpacity>
                                    <Text
                                        style={tailwind`text-[#00CCBB] text-xs ml-3`}
                                        onPress={() =>
                                            dispatch(
                                                removeFromBasket({ id: key })
                                            )
                                        }
                                    >
                                        Discard
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )
                    )}
                </ScrollView>
                <View style={tailwind`p-5 bg-white mt-5`}>
                    <View style={tailwind`flex-row justify-between`}>
                        <Text style={tailwind`text-gray-400`}>Subtotal</Text>
                        <Text style={tailwind`text-gray-400`}>
                            {currencyFormatter.format(basketTotal, {
                                code: 'INR',
                            })}
                        </Text>
                    </View>
                    <View style={tailwind`flex-row justify-between`}>
                        <Text style={tailwind`text-gray-400`}>
                            Delivery Fee
                        </Text>
                        <Text style={tailwind`text-gray-400`}>
                            {currencyFormatter.format(49.5, { code: 'INR' })}
                        </Text>
                    </View>
                    <View style={tailwind`flex-row justify-between`}>
                        <Text>Order Total</Text>
                        <Text style={tailwind`font-extrabold`}>
                            {currencyFormatter.format(basketTotal + 49.5, {
                                code: 'INR',
                            })}
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('PreparingOrderScreen')
                        }
                        style={tailwind`rounded-lg bg-[#00CCBB] p-4 mt-2`}
                    >
                        <Text
                            style={tailwind`text-center text-white text-lg font-bold`}
                        >
                            Place Order
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default BasketScreen
