import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import BottomTabs, { bottomTabsIcons } from '../components/home/BottomTabs';
import  AsyncStorage from '@react-native-async-storage/async-storage';
import { SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const ProfileScreen = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Retrieve userInfo from AsyncStorage when the component mounts
    const fetchUserInfo = async () => {
      try {
        const storedUserInfo = await AsyncStorage.getItem('userInfo');
        if (storedUserInfo) {
          setUserInfo(JSON.parse(storedUserInfo));
        }
      } catch (error) {
        console.error('Error retrieving user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  

  return (
    
    <>
    <View style={styles.container}>
      <View style={styles.container}>
        <StatusBar />

        <View style={{width: "100% "}}>
          <Image 
            source={require('../assets/profile_bgImg.jpg')}
            style={styles.cover}
          />
        </View>
        <View style={styles.profileContainer}>
          <Image 
            source={require('../assets/hf_icons8_profile.png')}
            style={styles.profile}
          />
          
        </View>
        <View style={styles.userNameContainer}>
        {userInfo ? (
          <Text style={styles.userName}>{userInfo.email.split('@')[0]}</Text>
        ) : (
          <Text style={styles.userName}>No user information available</Text>
        )}
      </View>

      <TouchableOpacity>
        <View style={styles.menuItem(0.2)}>
          <MaterialCommunityIcons
          name="github"
          size={24}
          />
          <Text style={styles.menuText}>Github</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.menuItem(0.2)}>
          <MaterialCommunityIcons
          name="locker"
          size={24}
          />
          <Text style={styles.menuText}>Settings</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.menuItem(0.2)}>
          <MaterialCommunityIcons
          name="logout"
          size={24}
          />
          <Text style={styles.menuText}>Logout</Text>
        </View>
      </TouchableOpacity>
      
      <View style={styles.menuItem(0.2)}></View> 
      {/* 0.2 */}
      </View>
      
    </View>
    <BottomTabs icons={bottomTabsIcons} />
    </>
  );
};

const styles = StyleSheet.create({
    safe:{
      
        flex:1,
        backgroundColor: 'black',
    
  },
  cover:{
    height: 290,
    width:"100%",
    resizeMode:"cover"
  },
  profileContainer:{
    flex:1,
    alignItems:"center"
  },
  profile:{
    height:155,
    width:155,
    borderRadius:999,
    borderColor:"#2b2c36",
    borderWidth: 2,
    resizeMode: 'cover',
    marginTop: -99,
  },

  userName: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      
    },

    userNameContainer: {
      marginTop: 60,
      alignItems: 'center',
    },
  menuItem: (borderTopWidth) => ({
    borderTopWidth: borderTopWidth,
    flexDirection:'row',
    paddingVertical: 25,
    paddingHorizontal: 30,
    borderColor: "black",
  }),
  menuText:{
    marginLeft:20,
    fontWeight:'600',
    fontSize: 14,
    lineHeight: 26,
  }
    
});

export default ProfileScreen;

