import React from 'react'
import { View, TextInput, Button, StyleSheet, Text } from 'react-native'
import axios from 'axios'
import { Formik } from 'formik'
import * as Yup from 'yup'

const RegisterScreen = ({ navigation }) => {
    const registerValidationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required'),
    })

    const handleRegister = async (values) => {
        console.log('Helloooo1')
        try {
            const response = await axios.post(
                'http://192.168.107.94:5000/register',
                values
            )
            console.log(response.data)
            navigation.navigate('Login')
        } catch (error) {
            console.log('Helloooo')
            console.error(error.response.data)
        }
    }

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={registerValidationSchema}
                onSubmit={handleRegister}
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
                            placeholder="Username"
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                            value={values.username}
                        />
                        {errors.username && touched.username && (
                            <Text style={styles.errorText}>
                                {errors.username}
                            </Text>
                        )}
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
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            value={values.confirmPassword}
                            secureTextEntry
                        />
                        {errors.confirmPassword && touched.confirmPassword && (
                            <Text style={styles.errorText}>
                                {errors.confirmPassword}
                            </Text>
                        )}
                        <Button title="Register" onPress={handleSubmit} />
                        <Text
                            onPress={() => navigation.navigate('Login')}
                            style={styles.link}
                        >
                            Already have an account? Login
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

export default RegisterScreen
