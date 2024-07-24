import React from 'react'
import {
    ImageBackground,
    Dimensions,
    Image,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import {
    ArrowLeftIcon,
    ArrowRightStartOnRectangleIcon,
} from 'react-native-heroicons/outline'
import tailwind from 'twrnc'

const w = Dimensions.get('window').width
const h = Dimensions.get('window').height
const ProfileScreen = ({ navigation }) => {
    return (
        <ScrollView
            style={{
                backgroundColor: '#FFF',
            }}
        >
            <ImageBackground
                source={require('../assets/unsplash.jpg')}
                style={{
                    height: 0.6 * h,
                }}
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
                        onPress={navigation.goBack}
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
                        fontSize: 18,
                        fontFamily: 'Montserrat_600SemiBold',
                        marginTop: 30,
                    }}
                >
                    Orders
                </Text>
                <Text
                    style={{
                        color: '#000',
                        fontSize: 18,
                        fontFamily: 'Montserrat_600SemiBold',
                        marginTop: 30,
                    }}
                >
                    Addresses
                </Text>
                <Text
                    style={{
                        color: '#000',
                        fontSize: 18,
                        fontFamily: 'Montserrat_600SemiBold',
                        marginTop: 30,
                    }}
                >
                    Help Center
                </Text>
                <Text
                    style={{
                        color: '#000',
                        fontSize: 18,
                        fontFamily: 'Montserrat_600SemiBold',
                        marginTop: 30,
                    }}
                >
                    Settings
                </Text>
            </View>
        </ScrollView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})
