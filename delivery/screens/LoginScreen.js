import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Text } from 'react-native'
import axios from 'axios'
import { Formik } from 'formik'
import * as Yup from 'yup'

const LoginScreen = ({ navigation }) => {
    const loginValidationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string().required('Password is required'),
    })

    const handleLogin = async (values) => {
        try {
            const response = await axios.post(
                'http://192.168.107.94:5000/login', // replace with your local IP address
                values
            )
            console.log('Response:', response) // Log the entire response object
            if (response && response.data) {
                console.log(response.data)
                navigation.navigate('Home')
            } else {
                console.error('No data in response:', response)
            }
        } catch (error) {
            console.error('Error:', error) // Log the entire error object
            if (error.response && error.response.data) {
                console.error('Error response data:', error.response.data)
            } else {
                console.error('Error without response data:', error)
            }
        }
    }

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={loginValidationSchema}
                onSubmit={handleLogin}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                }) => (
                    <>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />
                        {errors.email && touched.email && (
                            <Text style={styles.errorText}>{errors.email}</Text>
                        )}
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry
                        />
                        {errors.password && touched.password && (
                            <Text style={styles.errorText}>
                                {errors.password}
                            </Text>
                        )}
                        <Button title="Login" onPress={handleSubmit} />
                        <Text
                            onPress={() => navigation.navigate('Register')}
                            style={styles.link}
                        >
                            Don't have an account? Register
                        </Text>
                    </>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    errorText: {
        fontSize: 12,
        color: 'red',
    },
    link: {
        color: 'blue',
        marginTop: 12,
    },
})

export default LoginScreen
