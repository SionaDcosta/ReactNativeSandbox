import {
    StyleSheet,
    Text,
    View,
    Animated,
    Image,
    ActivityIndicator,
} from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Entypo from '@expo/vector-icons/Entypo'
import Icon from '@expo/vector-icons/MaterialIcons'
import { ScrollView } from 'react-native-gesture-handler'
import Profiles from '../components/Profiles'
import Messages from '../components/Messages'

const Chat = (props) => {
    const URL = 'https://api.github.com/users'
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    return (
        <View>
            <Text>Chat</Text>
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({})
