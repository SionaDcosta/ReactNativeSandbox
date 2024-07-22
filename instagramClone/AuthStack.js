import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'

const Stack = createStackNavigator()

const AuthStack = () => (
    <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
)

export default AuthStack
