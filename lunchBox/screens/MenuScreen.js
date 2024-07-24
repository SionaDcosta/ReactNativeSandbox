import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions,
    ScrollView,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import tailwind from 'twrnc'
import {
    BellIcon,
    MapPinIcon,
    UserCircleIcon,
} from 'react-native-heroicons/outline'
import Carousel from 'react-native-reanimated-carousel'
import { categories, MenuItems } from '../constants/data'
import MenuCard from '../components/MenuCard'

// Utility function to get current week of the month
const getWeekOfMonth = (date) => {
    const startWeekDayIndex = 1 // Set the start of the week to Monday (0 for Sunday, 1 for Monday, etc.)
    const firstDate = new Date(date.getFullYear(), date.getMonth(), 1)
    const firstDay = firstDate.getDay()
    const firstDayOffset = (firstDay - startWeekDayIndex + 7) % 7
    const currentDate = date.getDate()
    return Math.ceil((currentDate + firstDayOffset) / 7)
}

const MenuScreen = () => {
    const [activeCategory, setActiveCategory] = useState(1)
    const [currentMenu, setCurrentMenu] = useState({})
    const width = Dimensions.get('window').width

    useEffect(() => {
        const today = new Date()
        const weekOfMonth = getWeekOfMonth(today)
        const dayOfWeek = today.toLocaleString('default', { weekday: 'long' }) // Get the current day name

        // Get the menu for the current week
        const currentWeekMenu = MenuItems.find(
            (menu) => menu.week === `Week ${weekOfMonth}`
        )
        if (currentWeekMenu) {
            // Get the menu for the current day
            setCurrentMenu(currentWeekMenu.menu)
        }
    }, [])

    return (
        <View style={tailwind`flex-1 relative bg-white`}>
            <StatusBar translucent backgroundColor="transparent" />
            <Image
                source={require('../assets/food-bg.jpg')}
                style={[
                    tailwind`w-full absolute -top-5 opacity-10`,
                    { height: 220 },
                ]}
            />
            <SafeAreaView style={tailwind`flex-1`}>
                <View style={tailwind`px-4 flex-row justify-between mt-6`}>
                    <UserCircleIcon size={30} color="brown" />
                    <View style={tailwind`flex-row items-center`}>
                        <MapPinIcon size={30} color="brown" />
                        <Text style={tailwind`text-base font-semibold ml-1`}>
                            Whitefield, Bengaluru
                        </Text>
                    </View>
                    <BellIcon size={30} color="brown" />
                </View>
                <View style={tailwind`px-5 mt-20`}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={categories}
                        keyExtractor={(item) => item.id.toString()}
                        style={tailwind`overflow-visible`}
                        renderItem={({ item }) => {
                            let isActive = item.id == activeCategory
                            return (
                                <TouchableOpacity
                                    style={[
                                        tailwind`p-4 px-5 rounded-full mr-2 shadow`,
                                        {
                                            backgroundColor: isActive
                                                ? 'rgba(217, 159, 24, 0.9)'
                                                : 'rgba(219, 219, 219, 0.9)',
                                        },
                                    ]}
                                    onPress={() => setActiveCategory(item.id)}
                                >
                                    <Text
                                        style={[
                                            tailwind`font-semibold`,
                                            {
                                                color: isActive
                                                    ? 'white'
                                                    : 'gray',
                                            },
                                        ]}
                                    >
                                        {item.title}
                                    </Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View
                        style={[tailwind`mt-16 py-2`, { overflow: 'visible' }]}
                    >
                        <Carousel
                            loop
                            width={width}
                            height={410}
                            data={Object.entries(currentMenu)} // Pass the current menu entries
                            mode="parallax"
                            parallaxScrollingScale={0.9}
                            parallaxScrollingOffset={20}
                            scrollAnimationDuration={1000}
                            renderItem={({ item }) => (
                                <MenuCard item={{ [item[0]]: item[1] }} /> // Pass each day's menu as an object
                            )}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default MenuScreen
