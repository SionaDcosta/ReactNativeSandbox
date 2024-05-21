import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

const Profile = ({navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#241332" }}>
      <ImageBackground
        source={require("../../assets/photo.png")}
        style={{
          height: 0.45 * h,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent:"flex-end",
            // justifyContent: "space-between",
            paddingEnd: 20,
            marginTop: 60,
            alignItems: "center",
          }}
        >
          {/* <Image source={require("../../assets/icons-back-light.png")} /> */}
          <Image source={require("../../assets/filter.png")} />
        </View>
        <LinearGradient
          colors={["rgba(36,19,50,1)", "transparent"]}
          style={{
            transform: [{ rotate: "180deg" }], //By inverting it, the gradient now transitions from the bottom to the top.
            position: "absolute", //This positions the gradient absolutely within its parent container. This means it can be precisely placed using the left, right, bottom, and top properties.
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1, //LinearGradient is placed above any other elements with a lower zIndex or default stacking order within the same stacking context.
            height: 0.16 * h,
          }}
        >
          <Text
            style={{
              transform: [{ rotate: "-180deg" }], //180-degree rotation is applied. The negative sign indicates a counter-clockwise rotation. Text will appear upside down
              color: "#FFF",
              fontSize: 35,
              marginVertical: 30,
              alignSelf: "center",
              fontFamily: "Montserrat_700Bold",
            }}
          >
            Ida Niska
          </Text>
        </LinearGradient>
      </ImageBackground>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "Montserrat_700Bold",
              color: "#FFF",
            }}
          >
            125
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat_600SemiBold",
              color: "#918998",
            }}
          >
            FOLLOWERS
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "Montserrat_700Bold",
              color: "#FFF",
            }}
          >
            150
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat_600SemiBold",
              color: "#918998",
            }}
          >
            FOLLOWING
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "Montserrat_700Bold",
              color: "#FFF",
            }}
          >
            321
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat_600SemiBold",
              color: "#918998",
            }}
          >
            LIKES
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#352641",
          marginTop: 30,
          marginHorizontal: 10,
          borderRadius: 60,
          paddingHorizontal: 5,
          paddingVertical: 5,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            paddingLeft: 60,
            fontFamily: "Montserrat_600SemiBold",
            color: "#918998",
          }}
        >
          POPULAR
        </Text>
        <View
          style={{
            backgroundColor: "#8A56AC",
            paddingHorizontal: 50,
            paddingVertical: 10,
            borderRadius: 60,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat_600SemiBold",
              color: "#FFF",
            }}
          >
            RECENT
          </Text>
        </View>
      </View>
      <View
        style={{
            backgroundColor: "#d4b6d6",
            borderRadius: 40,
            marginHorizontal: 10,
            paddingVertical: 20,
            marginTop: 20,
            
        }}
      >
        <View
            style={{
                flexDirection:"row",
                alignSelf:"center", //flex-end
                alignItems:"center",
                // justifyContent:"space-between"
            }}
        >
          <Image source={require("../../assets/avatar.png")} />
          <View
            style={{
                paddingRight:20,
                paddingLeft:20,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfileDetail")}
            >
              <Text
                style={{
                    fontSize:18,
                    fontFamily:"Montserrat_700Bold",
                    // color:"#FFF"
                }}
              >Ida Niska</Text>
            </TouchableOpacity>
            <Text
                style={{
                    fontSize: 16,
                    fontFamily: "Montserrat_400Regular",
                    color: "#918998",
                }}
            >1 hour ago</Text>
          </View>
          <Image source={require("../../assets/icons-chevron light.png")} />
        </View>
        <Text
            style={{
                fontSize:17,
                fontFamily:"Montserrat_400Regular",
                // color:"#918998",
                marginVertical:20,
                paddingHorizontal:30,
                textAlign: "center"

            }}
        >
          Believe in yourself, take on your challenges, dig deep within yourself
          to conquer fears. Never let anyone bring you down. You got to keep
          going.
        </Text>
        {/* <View
            style={{
                alignItems:"center",
                flexDirection:"row",
                justifyContent:"center",
                marginVertical:5
                
            }}
        >
          <Text
            style={{
                fontSize: 16,
                fontFamily: "Montserrat_400Regular",
                // color: "#fff",
                paddingHorizontal: 10,
              }}
          >256</Text>
          <Image source={require("../../assets/icons-comment-dark.png")} />
          <Text
            style={{
                fontSize: 16,
                fontFamily: "Montserrat_400Regular",
                // color: "#fff",
                paddingLeft: 30,
                paddingRight: 10,
              }}
          >516</Text>
          <Image source={require("../../assets/icons-like-dark.png")} />
        </View> */}
      </View>


      
      <View
        style={{
            backgroundColor: "#d4b6d6",
            borderRadius: 40,
            marginHorizontal: 10,
            paddingVertical: 20,
            marginTop: 20,
            
        }}
      >
        <View
            style={{
                flexDirection:"row",
                alignSelf:"center", //flex-end
                alignItems:"center",
                // justifyContent:"space-between"
            }}
        >
          <Image source={require("../../assets/avatar.png")} />
          <View
            style={{
                paddingRight:20,
                paddingLeft:20,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfileDetail")}
            >
              <Text
                style={{
                    fontSize:18,
                    fontFamily:"Montserrat_700Bold",
                    // color:"#FFF"
                }}
              >Ida Niska</Text>
            </TouchableOpacity>
            <Text
                style={{
                    fontSize: 16,
                    fontFamily: "Montserrat_400Regular",
                    color: "#918998",
                }}
            >1 hour ago</Text>
          </View>
          <Image source={require("../../assets/icons-chevron light.png")} />
        </View>
        <Text
            style={{
                fontSize:17,
                fontFamily:"Montserrat_400Regular",
                // color:"#918998",
                marginVertical:20,
                paddingHorizontal:30,
                textAlign: "center"

            }}
        >
          Believe in yourself, take on your challenges, dig deep within yourself
          to conquer fears. Never let anyone bring you down. You got to keep
          going.
        </Text>
        
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
