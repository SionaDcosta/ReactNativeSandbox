import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

export const bottomTabsIcons = [
    {
        name:'Home',
        active: require('../../assets/hf_icons8-homeFilled.png'),
        inactive:require('../../assets/hf_icons8-home.png')
    },
    {
        name:'Search',
        active: require('../../assets/hf_icons8-searchFilled.png'),
        inactive:require('../../assets/hf_icons8-search.png')
    },
    {
        name:'Posts',
        active: require('../../assets/hf_icons8-apiFilled.png'),
        inactive:require('../../assets/hf_icons8-api.png')
    },
    {
        name:'Shop',
        active: require('../../assets/hf_icons8-shopFilled.png'),
        inactive:require('../../assets/hf_icons8-shop.png')
    },
    {
        name:'Profile',
        active: require('../../assets/hf_icons8_profileFilled.png'),
        inactive:require('../../assets/hf_icons8_profile.png')
    },
]


const BottomTabs = ({icons, userInfo}) => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState('Home')
    const Icon = ({icon}) => (
        <TouchableOpacity onPress={() => handleTabPress(icon.name)}>
            <Image source={activeTab === icon.name? icon.active: icon.inactive} 
            style={[styles.icon, 
                    icon.name === 'Profile'? styles.profilePic(): null,
                    activeTab === 'Profile' && icon.name === activeTab? 
                    styles.profilePic(activeTab)
                    :null,]}/>
        </TouchableOpacity>)


const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    if (tabName === 'Posts') {
      navigation.navigate('PostsApi', { activeTab: tabName }); 
    } else {
      // Handle navigation for other tabs if needed
      // For demonstration purposes, let's navigate to different screens based on tab names
      switch (tabName) {
        case 'Home':
          navigation.navigate('HomeScreen');
          break;
        case 'Search':
          navigation.navigate('SearchScreen', { activeTab: tabName });
          break;
        case 'Shop':
          navigation.navigate('ShopScreen', { activeTab: tabName });
          break;
        case 'Profile':
          navigation.navigate('ProfileScreen', { activeTab: tabName, userInfo: userInfo });
          break;
        default:
          break;
      }
    }
  };
  
// const handleTabPress = (tabName) => {
//     setActiveTab(tabName);
//     if (tabName === 'Reels') {
//       navigation.navigate('AddPost'); 
//     }
//   };
    
  return (
    <View style={styles.wrapper}>
        <Divider width={1} orientation='vertical'/>
        <View style={styles.container}>
      {icons.map((icon,index)=>(
        <Icon key={index} icon={icon}/>
      ))}
    </View>
    </View>
  )
}


const styles = StyleSheet.create({
    wrapper:{
        position:'absolute',
        width: '100%',
        bottom:'0%',//3%
        zIndex: 999,
        backgroundColor:'#000'
    },
    container:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        height:50,
        paddingTop: 10
    },
    icon:{
        width:30,
        height: 30
    },
    profilePic:(activeTab = '')=>({
        borderRadius:50,
        borderWidth:activeTab === 'Profile'? 2: 0,
        borderColor: '#fff'
    })
})
export default BottomTabs;