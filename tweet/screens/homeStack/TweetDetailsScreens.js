import { useRoute, useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

import TweetContent from "../../components/TweetContent";

const TweetDetailsScreen = () => {
  const navigation = useNavigation();
  const { params: { tweet },} = useRoute();
  
  //So that header name is same as userName
  useLayoutEffect(()=> {
    navigation.setOptions({
      headerTitle: tweet.author.name,
    })
  })

  return (
    <View testID="TweetDetailsScreen" style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <TweetContent tweet={tweet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TweetDetailsScreen;