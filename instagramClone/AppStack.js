import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import NewPostScreen from './screens/NewPostScreen'
import PostsApi from './screens/PostsApi'
import SearchScreen from './screens/SearchScreen'
import ShopScreen from './screens/ShopScreen'
import ProfileScreen from './screens/ProfileScreen'

const Stack = createStackNavigator()

const AppStack = () => (
    <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
        <Stack.Screen name="PostsApi" component={PostsApi} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="ShopScreen" component={ShopScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
)

export default AppStack
