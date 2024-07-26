import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import tailwind from 'twrnc'
import currencyFormatter from 'currency-formatter'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline'
import { useDispatch, useSelector } from 'react-redux'
import {
    addToBasket,
    removeFromBasket,
    clearBasket,
    selectRestaurantId,
    selectBasketItemsWithId,
} from '../features/basketSlice'
// import { selectBasketItemsWithId } from '../selector/selectors'

const DishRow = ({ id, name, description, price, image, restaurantId }) => {
    const [isPressed, setIsPressed] = useState(false)
    const items = useSelector((state) => selectBasketItemsWithId(state, id))
    const currentRestaurantId = useSelector(selectRestaurantId)
    const dispatch = useDispatch()

    const addItemToBasket = () => {
        if (currentRestaurantId && currentRestaurantId !== restaurantId) {
            Alert.alert(
                'Replace Items in Cart?',
                'Your cart contains items from a different restaurant. Do you want to replace them with items from this restaurant?',
                [
                    { text: 'Cancel', style: 'cancel' },
                    {
                        text: 'Yes',
                        onPress: () => {
                            dispatch(clearBasket())
                            dispatch(
                                addToBasket({
                                    id,
                                    name,
                                    description,
                                    price,
                                    image,
                                    restaurantId,
                                })
                            )
                        },
                    },
                ]
            )
        } else {
            dispatch(
                addToBasket({
                    id,
                    name,
                    description,
                    price,
                    image,
                    restaurantId,
                })
            )
        }
    }

    const removeItemFromBasket = () => {
        if (!items.length > 0) return
        dispatch(removeFromBasket({ id }))
    }

    return (
        <>
            <TouchableOpacity
                onPress={() => setIsPressed(!isPressed)}
                style={tailwind`bg-white border p-4 border-gray-200 ${
                    isPressed ? 'border-b-0' : ''
                }`}
            >
                <View style={tailwind`flex-row`}>
                    <View style={tailwind`flex-1 pr-2`}>
                        <Text style={tailwind`text-lg mb-1`}>{name}</Text>
                        <Text style={tailwind`text-gray-400`}>
                            {description}
                        </Text>
                        <Text style={tailwind`text-gray-400 mt-2`}>
                            {currencyFormatter.format(price, { code: 'INR' })}
                        </Text>
                    </View>
                    <View>
                        <Image
                            style={[
                                tailwind`h-20 w-20 bg-gray-300 p-4`,
                                { borderWidth: 1, borderColor: '#F3F3F4' },
                            ]}
                            source={{ uri: urlFor(image).url() }}
                        />
                    </View>
                </View>
            </TouchableOpacity>
            {isPressed && (
                <View style={tailwind`bg-white px-4`}>
                    <View
                        style={[
                            tailwind`flex-row items-center pb-3`,
                            { marginHorizontal: -8 },
                        ]}
                    >
                        <TouchableOpacity
                            disabled={!items.length}
                            onPress={removeItemFromBasket}
                        >
                            <MinusCircleIcon
                                color={items.length > 0 ? '#00CCBB' : '#bfbfbf'}
                                size={40}
                            />
                        </TouchableOpacity>
                        <Text>{items.length}</Text>
                        <TouchableOpacity onPress={addItemToBasket}>
                            <PlusCircleIcon color="#00CCBB" size={40} />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </>
    )
}

export default DishRow
