import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import LoginForm from '../components/loginScreen/LoginForm'
import SignupForm from '../components/signupScreen/SignupForm'


const instagramLogo= 'https://cdn.iconscout.com/icon/free/png-512/free-instagram-1868979-1583143.png?f=webp&w=512'
const SignupScreen = ({navigation}) => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={{uri: instagramLogo, height:100, width: 100}}/>
            <SignupForm navigation={navigation}/>
        </View>
        
    </View>
  )

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'#fcfffd',
        paddingTop: 50,
        paddingHorizontal: 12,
    },
    logoContainer:{
        alignItems:'center',
        marginTop: 60,
    }
})
export default SignupScreen;