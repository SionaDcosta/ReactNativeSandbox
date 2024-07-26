import React from 'react'
import {
    ImageBackground,
    Dimensions,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'
import tailwind from 'twrnc'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthenticated, saveAuthState } from '../features/authSlice'

const w = Dimensions.get('window').width
const h = Dimensions.get('window').height

const ProfileScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const username = useSelector((state) => state.auth.username)

    const handleSignOut = () => {
        dispatch(setAuthenticated(false))
        dispatch(saveAuthState(false))
        // navigation.reset({
        //     index: 0,
        //     routes: [{ name: 'Auth' }],
        // })
        // navigation.navigate('App')
        console.log('Navigation reset to Auth stack')
    }

    return (
        <ScrollView style={{ backgroundColor: '#FFF' }}>
            <ImageBackground
                source={require('../assets/unsplash.jpg')}
                style={{ height: 0.6 * h }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 20,
                        alignItems: 'center',
                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={tailwind`absolute top-14 left-5 p-2 bg-gray-100 rounded-full `}
                    >
                        <ArrowLeftIcon size={20} color="#00CCBB" />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <View
                style={{
                    backgroundColor: '#FFF',
                    marginTop: -46,
                    borderRadius: 50,
                    flex: 1,
                    alignItems: 'flex-start',
                    paddingLeft: 20,
                }}
            >
                <Text
                    style={{
                        color: '#000',
                        fontSize: 24,
                        fontWeight: 'bold',
                        marginTop: 30,
                    }}
                >
                    {console.log(username)}
                    Hola {username},
                </Text>
                <Text
                    style={{
                        color: '#000',
                        fontSize: 18,
                        marginTop: 30,
                    }}
                >
                    Orders
                </Text>
                <Text
                    style={{
                        color: '#000',
                        fontSize: 18,
                        marginTop: 30,
                    }}
                >
                    Addresses
                </Text>
                <Text
                    style={{
                        color: '#000',
                        fontSize: 18,
                        marginTop: 30,
                    }}
                >
                    Help Center
                </Text>
                <Text
                    style={{
                        color: '#000',
                        fontSize: 18,
                        marginTop: 30,
                    }}
                >
                    Settings
                </Text>
                <TouchableOpacity onPress={handleSignOut}>
                    <Text
                        style={{
                            color: '#000',
                            fontSize: 18,
                            marginTop: 30,
                        }}
                        a
                    >
                        Signout
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})
