import React from 'react'
import { View,Text } from 'react-native'
import LoginForm from '../components/formHandling/LoginForm'

const Ls = ({navigation}) => {
  return (
    <View>
        <Text>LoginScreen</Text>
        <LoginForm/>
    </View>
  )
}

export default Ls