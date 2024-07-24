import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tailwind from 'twrnc'
import {
    AdjustmentsVerticalIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    UserIcon,
} from 'react-native-heroicons/outline'
import Categories from '../components/categories'
import FeaturedRow from '../components/FeaturedRow'
import client from '../sanity'

const HomeScreen = () => {
    const navigation = useNavigation()
    const [featuredCategories, setFeaturedCategories] = useState([])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    useEffect(() => {
        client
            .fetch(
                `
            *[_type == "featured"]{
                _id,
                name,
                short_description
            }
            `
            )
            .then((data) => {
                setFeaturedCategories(data)
            })
    }, [])
    // console.log(featuredCategories);
    return (
        <SafeAreaView style={tailwind`bg-white pt-5`}>
            {/* Header */}
            <View style={tailwind`flex-row pb-3 items-center mx-4 space-x-2`}>
                <Image
                    source={{ uri: 'https://links.papareact.com/wru' }}
                    style={tailwind`h-7 w-7 bg-gray-300 p-4 rounded-full`}
                />
                <View style={tailwind`flex-1`}>
                    <Text style={tailwind`font-bold text-gray-400 text-xs`}>
                        Deliver Now!
                    </Text>
                    <Text style={tailwind`font-bold text-xl`}>
                        Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ProfileScreen')}
                >
                    <UserIcon size={35} color="#00CCBB" />
                </TouchableOpacity>
            </View>

            {/* Search */}
            <View style={tailwind`flex-row items-center space-x-2 pb-2 mx-4`}>
                <View
                    style={tailwind`flex-row flex-1 space-x-2 bg-gray-200 p-3`}
                >
                    <MagnifyingGlassIcon size={20} color="gray" />
                    <TextInput
                        placeholder="Restaurants and cuisines"
                        placeholderTextColor="gray"
                        keyboardType="default"
                    />
                </View>
                <AdjustmentsVerticalIcon color="#00CCBB" />
            </View>

            {/* Body */}
            <ScrollView
                style={tailwind`bg-gray-100`}
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
            >
                {/* Categories */}
                <Categories />

                {/* Featured */}
                {featuredCategories?.map((category) => (
                    <FeaturedRow
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        description={category.short_description}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    item: {
        marginRight: 8, // Adjust as needed
    },
})
