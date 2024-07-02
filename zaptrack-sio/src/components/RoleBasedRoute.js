import React,{useEffect,useState} from 'react'
import { View,ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

const RoleBasedRoute = ({role, children}) => {
    const [userRole, setUserRole] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchUserRole =async () =>{
            const userInfo =await AsyncStorage.getItem('userInfo');
            if (userInfo) {
                const { role } = JSON.parse(userInfo);
                setUserRole(role);
              } else {
                navigation.navigate('LoginScreen');
              }
        };
        fetchUserRole();
    }, []);


    if (userRole === null) {
        return <View><ActivityIndicator size="large" /></View>;
      }
    
      return userRole === role ? children : navigation.navigate('HomeScreen');
};

export default RoleBasedRoute