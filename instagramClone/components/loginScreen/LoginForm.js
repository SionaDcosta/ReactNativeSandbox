// LoginForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';
import { useNavigation } from '@react-navigation/native';

import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from './firebase';// Import auth object
import  AsyncStorage  from '@react-native-async-storage/async-storage';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Initialize navigation

  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
    password: Yup.string().required().min(6, 'Your password must have at least 6 characters'),
  });

  const handleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password); // Use auth object
      console.log("🔥 Firebase Login Successfull", email)

      // Store userInfo in AsyncStorage
      await AsyncStorage.setItem('userInfo', JSON.stringify({ email }));
      navigation.navigate('HomeScreen');
// Set user information
// const userInfo = { email }; // You can add more user information here
// navigation.navigate('ProfileScreen', { userInfo }); 

      
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{email:'', password:''}}
        onSubmit={(values)=>{
          handleLogin(values.email, values.password)
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}>
        {({handleChange, handleBlur, handleSubmit, values, isValid})=>(
          <>
<View style={[
              styles.inputField,
              {
                borderColor:
                  values.email.length < 1 || Validator.validate(values.email)
                    ? '#ccc'
                    : 'red',
              }
            ]}>
<TextInput
                placeholderTextColor='#444'
                placeholder='Phone number, username or email'
                autoCapitalize='none'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoFocus={true}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
</View>
<View style={[
              styles.inputField,
              {
                borderColor:
                  values.password.length >= 6
                    ? '#ccc'
                    : 'red',
              }
            ]}>
<TextInput
                placeholderTextColor='#444'
                placeholder='Password'
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
                autoFocus={true}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
</View>
<View style={{ alignItems: 'flex-end', marginBottom: 30 }}>
<Text style={{ color: '#6BB0F5' }}>Forgot Password</Text>
</View>
<Pressable
              style={styles.button(isValid)}
              onPress={handleSubmit}
>
<Text style={styles.buttonText}>Log In</Text>
</Pressable>
<View style={styles.signupContainer}>
<Text>Don't have an account?</Text>
<TouchableOpacity onPress={() => navigation.push('SignupScreen')}>
<Text style={{ color: '#6BB0F5' }}>Sign Up</Text>
</TouchableOpacity>
</View>
</>
        )
      }
      </Formik>
      {/* <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <View style={styles.signupContainer}>
        <Text>Don't have an account?</Text>
        <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} />
      </View> */}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },

  wrapper: {
    marginTop: 80,
  },
  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    borderWidth: 1,
  },
  button: (isValid) => ({
    backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4,
  }),
  buttonText: {
    fontWeight: '600',
    fontSize: 18,
  },
  signupContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 50
  }
});

export default LoginForm;