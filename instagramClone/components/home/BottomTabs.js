import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Divider } from 'react-native-elements'

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
        name:'Reels',
        active: require('../../assets/hf_icons8-reelsFilled.png'),
        inactive:require('../../assets/hf_icons8-reels.png')
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


const BottomTabs = ({icons}) => {
    const [activeTab, setActiveTab] = useState('Home')
    const Icon = ({icon}) => (
        <TouchableOpacity onPress={()=> setActiveTab(icon.name)}>
            <Image source={activeTab === icon.name? icon.active: icon.inactive} 
            style={[styles.icon, 
                    icon.name === 'Profile'? styles.profilePic(): null,
                    activeTab === 'Profile' && icon.name === activeTab? 
                    styles.profilePic(activeTab)
                    :null,]}/>
        </TouchableOpacity>)
    
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