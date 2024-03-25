import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
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
            <Image source={icon.active} style={styles.icon}/>
        </TouchableOpacity>
    )
  return (
    <View style={styles.container}>
      {icons.map((icon,index)=>(
        <Icon key={index} icon={icon}/>
      ))}
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },
    icon:{
        width:30,
        height: 30
    }
})
export default BottomTabs;