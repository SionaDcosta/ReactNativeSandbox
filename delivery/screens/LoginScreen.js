import React from 'react'
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import axios from 'axios'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { setAuthenticated, saveAuthState } from '../features/authSlice'
import { LinearGradient } from 'expo-linear-gradient'
import colors from '../utils/colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native'
import * as Burnt from 'burnt'

const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    const loginValidationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string().required('Password is required'),
    })

    const handleLogin = async (values) => {
        try {
            const response = await axios.post(
                'http://10.0.2.2:5000/login',
                values
            )
            if (response && response.data) {
                const { username } = response.data
                dispatch(setAuthenticated({ isAuthenticated: true, username }))
                dispatch(saveAuthState({ isAuthenticated: true, username }))
                navigation.navigate('App')
            }
        } catch (error) {
            if (error.response) {
                const { status, data } = error.response
                if (status === 400) {
                    Burnt.toast({
                        title: 'Login Failed',
                        preset: 'error',
                        message:
                            data.message ||
                            'Invalid credentials. Please check your email and password.',
                    })
                } else {
                    Burnt.toast({
                        title: 'Error',
                        preset: 'error',
                        message:
                            data.message ||
                            'An unexpected error occurred. Please try again.',
                    })
                }
            } else if (error.request) {
                Burnt.toast({
                    title: 'Network Error',
                    preset: 'error',
                    message:
                        'No response received from server. Please check your network connection.',
                })
            } else {
                Burnt.toast({
                    title: 'Error',
                    preset: 'error',
                    message: 'An error occurred while setting up the request.',
                })
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={['rgba(0, 204, 187,0.7)', 'transparent']}
                style={styles.linearGradient}
                start={{ x: 0.5, y: 1 }}
                end={{ x: 0.5, y: 0 }}
            >
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <LottieView
                        source={require('../assets/AnimationLogin.json')}
                        autoPlay
                        loop
                        style={styles.animation}
                    />
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
                            isValid,
                            dirty,
                        }) => (
                            <>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Email"
                                        placeholderTextColor={colors.lightText}
                                        keyboardType="email-address"
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                    />
                                    {errors.email && touched.email && (
                                        <Text style={styles.errorText}>
                                            {errors.email}
                                        </Text>
                                    )}
                                </View>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Password"
                                        placeholderTextColor={colors.lightText}
                                        secureTextEntry
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                    />
                                    {errors.password && touched.password && (
                                        <Text style={styles.errorText}>
                                            {errors.password}
                                        </Text>
                                    )}
                                </View>
                                <TouchableOpacity
                                    onPress={handleSubmit}
                                    style={styles.button}
                                    disabled={!isValid || !dirty}
                                >
                                    <Text
                                        style={[
                                            styles.buttonText,
                                            {
                                                color:
                                                    isValid && dirty
                                                        ? colors.white
                                                        : '#ffffff80',
                                            },
                                        ]}
                                    >
                                        Login
                                    </Text>
                                </TouchableOpacity>
                                <View style={styles.footer}>
                                    <Text style={styles.footerText}>
                                        Don't have an account?
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() =>
                                            navigation.navigate('Register')
                                        }
                                        style={styles.registerButton}
                                    >
                                        <Text style={styles.buttonText}>
                                            Register
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}
                    </Formik>
                </ScrollView>
            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linearGradient: {
        flex: 1,
        paddingHorizontal: 20,
    },
    animation: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 11,
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 14,
        color: colors.black,
        borderRadius: 10,
        backgroundColor: colors.white,
    },
    button: {
        width: '100%',
        paddingVertical: 9,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.main,
        borderRadius: 10,
        marginVertical: 20,
    },
    buttonText: {
        color: colors.white,
        fontSize: 22,
    },
    errorText: {
        fontSize: 12,
        color: 'red',
    },
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30,
    },
    footerText: {
        fontSize: 14,
        color: colors.black,
        opacity: 0.4,
        marginHorizontal: 18,
        marginBottom: 18,
    },
    registerButton: {
        width: '60%',
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.main,
        borderRadius: 10,
    },
})

export default LoginScreen
