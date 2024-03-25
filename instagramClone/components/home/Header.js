import { View, Text , Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
        <Image 
        style={styles.logo} 
        source={require('../../assets/igLogo.png')}
        />
        </TouchableOpacity>

        <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={()=> navigation.push('NewPostScreen')}>
            <Image style={styles.icon} source={require('../../assets/icons8-plus.png')}/>
            
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={styles.icon} source={require('../../assets/icons8-like.png')}/>
            
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.unreadBadge}>
                    <Text style={styles.unreadBadgeText}>15</Text>
                </View>
            <Image style={styles.icon} source={require('../../assets/icons8-messenger.png')}/>
            
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    logo:{
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },
    iconsContainer:{
        flexDirection:'row',
    },
    icon:{
        width:30,
        height:30,
        marginLeft:10,
        resizeMode:'contain',
    },
    unreadBadge:{
        backgroundColor:'red',
        position: 'absolute',
        left: 28,
        width:25,
        height:18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
    },
    unreadBadgeText:{
        fontWeight: '600',
    }
})