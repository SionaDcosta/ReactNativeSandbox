import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from './screens/tabScreens/Feed';
import Settings from './screens/tabScreens/Settings';
import Notifications from './screens/tabScreens/Notifications';
import { Ionicons } from '@expo/vector-icons';
import TweetDetailsScreen from './screens/homeStack/TweetDetailsScreens';


const HomeStack = createNativeStackNavigator();
function HomeStackGroup(){
    return(
        <HomeStack.Navigator>
            {/* <HomeStack.Screen
                name="TabGroup"
                component={TabGroup}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name="TweetDetailsScreen"
                component={TweetDetailsScreen}
                options={{ headerShown: false }}
            /> */}
            <HomeStack.Screen name="Feed" component={Feed}/>
            <HomeStack.Screen name="TweetDetailsScreen" component={TweetDetailsScreen}
            // options={{presentation: "modal" }}
            //navigationOptions={{presentaion : 'modal'}}
            options={{tabBarVisible: false}}
            />
        </HomeStack.Navigator>
    )
}

const Tab = createBottomTabNavigator();
function TabGroup(){
    return(
        <Tab.Navigator
            screenOptions={({route,navigation})=>({
                tabBarIcon:({color,focused, size}) =>{
                    let iconName;
                    if (route.name === "HomeStackGroup"){
                        iconName= focused?"home" : "home-outline";
                    }else if (route.name === "Settings"){
                        iconName= focused?"settings" : "settings-outline";
                    }else if (route.name === "Notifications"){
                        iconName= focused?"notifications-circle" : "notifications-circle-outline";}
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: "#1DA1F2",
                tabBarInactiveTintColor: "grey"
            })}
        >
            <Tab.Screen name="HomeStackGroup" component={HomeStackGroup}
            options={{headerShown: false, tabBarLabel: "@siona"}}
            />
            <Tab.Screen name="Settings" component={Settings}/>
            <Tab.Screen name="Notifications" component={Notifications}/>
        </Tab.Navigator>
    );
}

const Drawer = createDrawerNavigator();
function DrawerGroup(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = "Payments" component={Payments}/>

           
        </Drawer.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <TabGroup/>
        </NavigationContainer>
    )
}