import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import BottomTabs, {bottomTabsIcons} from '../components/home/BottomTabs';

const ProfileScreen = ({ route }) => {
    const { userInfo } = route.params;
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          {userInfo ? (
            <>
              <Text style={styles.userName}>{userInfo.username}</Text>
              {console.log(userInfo.username)}
              <Text style={styles.email}>{userInfo.email}</Text>
            </>
          ) : (
            <Text style={styles.userName}>No user information available</Text>
          )}
        </View>
        <BottomTabs icons={bottomTabsIcons} userInfo={userInfo} />

      </SafeAreaView>
    );
  };
  



// const ProfileScreen = ({ userInfo }) => {
//     // Assuming the user's information is passed as a prop named 'userInfo'
//     // const { userInfo } = route.params;

//     // Function to handle opening the GitHub account link
//     // const handleGitHubLinkPress = () => {
//     //     Linking.openURL(userInfo.githubLink);
//     // };
//     // const user= userInfo.email;
//     return (
//         <SafeAreaView style={styles.safe} >
//         <View style={styles.container}>
//             {/* {console.log("17",userInfo)} */}
//             {/* {console.log("Here:", user)} */}
//             {/* Profile Picture */}
//             {/* <Image
//                 source={{ uri: userInfo.profilePicture }}
//                 style={styles.profilePicture}
//             /> */}

//                 {userInfo ? ( // Check if userInfo is defined
//                     <Text style={styles.userName}>{userInfo.email}</Text> // Display email if userInfo is defined
//                 ) : (
//                     <Text style={styles.userName}>No user information available</Text> // Handle case where userInfo is undefined
//                 )}
//             {/* User Name */}
//             {/* <Text style={styles.userName}>{userInfo && userInfo.email}</Text>
//             <Text style={styles.userName}>pink</Text> */}

//             {/* GitHub Account Link */}
//             {/* <TouchableOpacity onPress={handleGitHubLinkPress}>
//                 <Text style={styles.githubLink}>{userInfo.githubLink}</Text>
//             </TouchableOpacity> */}
//         </View>
//         </SafeAreaView>
//     );
// };

const styles = StyleSheet.create({
    safe:{
      
        flex:1,
        backgroundColor: 'black',
    
  },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profilePicture: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    githubLink: {
        fontSize: 18,
        color: 'blue',
        textDecorationLine: 'underline',
    },
});

export default ProfileScreen;

