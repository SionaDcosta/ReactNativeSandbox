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
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../utils/colors'
import LottieView from 'lottie-react-native'

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
        try {
            const response = await axios.post(
                'http://10.0.2.2:5000/register',
                values
            )
            console.log(response.data)
            navigation.navigate('Login')
        } catch (error) {
            console.error(error.response.data)
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
                        source={require('../assets/AnimationRegister.json')}
                        autoPlay
                        loop
                        style={styles.animation}
                    />
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
                            isValid,
                            dirty,
                        }) => (
                            <>
                                <View style={styles.inputContainer}>
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
                                </View>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Email"
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
                                </View>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Confirm Password"
                                        onChangeText={handleChange(
                                            'confirmPassword'
                                        )}
                                        onBlur={handleBlur('confirmPassword')}
                                        value={values.confirmPassword}
                                        secureTextEntry
                                    />
                                    {errors.confirmPassword &&
                                        touched.confirmPassword && (
                                            <Text style={styles.errorText}>
                                                {errors.confirmPassword}
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
                                                        : '#ffffff80', // Lighter shade for disabled state
                                            },
                                        ]}
                                    >
                                        Register
                                    </Text>
                                </TouchableOpacity>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginVertical: 20,
                                    }}
                                >
                                    <LinearGradient
                                        start={{ x: 1, y: 0 }}
                                        end={{ x: 0.5, y: 1 }}
                                        colors={[
                                            '#00000090',
                                            '#00000090',
                                            '#ffffff00',
                                        ]}
                                        style={{
                                            flex: 1,
                                            paddingVertical: 1.4,
                                            borderRadius: 100,
                                        }}
                                    ></LinearGradient>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            color: colors.black,
                                            opacity: 0.4,
                                            marginHorizontal: 18,
                                        }}
                                    >
                                        Or continue with
                                    </Text>
                                    <LinearGradient
                                        start={{ x: 0, y: 0 }}
                                        colors={[
                                            '#00000090',
                                            '#00000090',
                                            '#ffffff00',
                                        ]}
                                        style={{
                                            flex: 1,
                                            paddingVertical: 1.4,
                                            borderRadius: 100,
                                        }}
                                    ></LinearGradient>
                                </View>
                                <View
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <TouchableOpacity
                                        onPress={() =>
                                            navigation.navigate('Login')
                                        }
                                        style={{
                                            width: '60%',
                                            paddingVertical: 8,
                                            paddingHorizontal: 20,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: colors.main,
                                            borderRadius: 10,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: colors.white,
                                                fontSize: 22,
                                            }}
                                        >
                                            Login
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
    backButton: {
        backgroundColor: colors.white,
        width: 40,
        aspectRatio: 1 / 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        elevation: 4,
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 100,
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
    headerText: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 38,
        color: colors.black,
        letterSpacing: 2,
        fontWeight: '500',
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
    link: {
        color: 'blue',
        textAlign: 'center',
        marginTop: 12,
    },
})

export default RegisterScreen
