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

const Profile = () => {
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
            justifyContent: "space-between",
            paddingEnd: 20,
            marginTop: 60,
            alignItems: "center",
          }}
        >
          <Image source={require("../../assets/icons-back-light.png")} />
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
        <View style={{alignItems: "center",}}>
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
        <View style={{alignItems: "center",}}>
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
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
