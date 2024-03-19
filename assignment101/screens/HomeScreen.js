import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require('../assets/bgImg.jpg')} // Local background image
        style={styles.background}
        resizeMode="cover"
      >
        {/* Scrolling Banner */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.banner}>
            {/* Zurich , Mount Rigi Kulm, Lake Lucerne, Rapperswil, Ticino*/}
          {/* <Image source={{ uri: 'https://www.travelandleisure.com/thmb/WCN9Giwyi4aywN3L1rgg5KOett0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-zurich-PLACESSWITZERLAND1023-ed230e232ec74442a8cd7710c84c8f85.jpg' }} style={styles.bannerImage} />
          <Image source={{ uri: 'https://www.travelandleisure.com/thmb/bV87CClaUelDvCpaCq5UOyvmfYQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-mount-rigi-kulm-PLACESSWITZERLAND1023-f8eb41864cf044079ba11c5bd20f8ad8.jpg' }} style={styles.bannerImage} />
          <Image source={{ uri: 'https://www.travelandleisure.com/thmb/e1L2UymgJQVpxzLzTZ_o6TGt_UI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-lucerne-PLACESSWITZERLAND1023-b40787768bd1443d8660a47fdfc3c029.jpg' }} style={styles.bannerImage} />
          <Image source={{ uri: 'https://www.travelandleisure.com/thmb/7NNwJ9wqM6vKV4a5oAv1hkhHdic=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-rapperswil-PLACESSWITZERLAND1023-2c6545759ecf4ee592f78cafd71de69b.jpg' }} style={styles.bannerImage} />
          <Image source={{ uri: 'https://www.travelandleisure.com/thmb/dCtG_YnchvvX2kVpJQ9KeASh0ms=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-ticino-PLACESSWITZERLAND1023-ef63ca17ca314ab9b76fd55258d165a9.jpg' }} style={styles.bannerImage} />
         */}
         
         <View style={styles.imageContainer}>
    <Image source={{ uri: 'https://www.travelandleisure.com/thmb/WCN9Giwyi4aywN3L1rgg5KOett0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-zurich-PLACESSWITZERLAND1023-ed230e232ec74442a8cd7710c84c8f85.jpg' }} style={styles.bannerImage} />
    <Text style={styles.imageText}>Zurich</Text>
  </View>
  <View style={styles.imageContainer}>
    <Image source={{ uri: 'https://www.travelandleisure.com/thmb/bV87CClaUelDvCpaCq5UOyvmfYQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-mount-rigi-kulm-PLACESSWITZERLAND1023-f8eb41864cf044079ba11c5bd20f8ad8.jpg' }} style={styles.bannerImage} />
    <Text style={styles.imageText}>Mount Rigi Kulm</Text>
  </View>
  <View style={styles.imageContainer}>
    <Image source={{ uri: 'https://www.travelandleisure.com/thmb/e1L2UymgJQVpxzLzTZ_o6TGt_UI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-lucerne-PLACESSWITZERLAND1023-b40787768bd1443d8660a47fdfc3c029.jpg' }} style={styles.bannerImage} />
    <Text style={styles.imageText}>Lake Lucerne</Text>
  </View>
  <View style={styles.imageContainer}>
    <Image source={{ uri: 'https://www.travelandleisure.com/thmb/7NNwJ9wqM6vKV4a5oAv1hkhHdic=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-rapperswil-PLACESSWITZERLAND1023-2c6545759ecf4ee592f78cafd71de69b.jpg' }} style={styles.bannerImage} />
    <Text style={styles.imageText}>Rapperswil</Text>
  </View>
  <View style={styles.imageContainer}>
    <Image source={{ uri: 'https://www.travelandleisure.com/thmb/dCtG_YnchvvX2kVpJQ9KeASh0ms=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-ticino-PLACESSWITZERLAND1023-ef63ca17ca314ab9b76fd55258d165a9.jpg' }} style={styles.bannerImage} />
    <Text style={styles.imageText}>Ticino</Text>
  </View>
         </ScrollView>
        
        {/* Other content */}
        <Text style={styles.text}>Welcome to Switzerland!</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 315,
  },
  
  bannerImage: {
    width: 350, 
    height: 200, 
    borderRadius: 10, 
    marginHorizontal: 20, 
  },
  imageText: {
    textAlign: 'center',
    marginTop: 7,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: 'black',
    // marginTop: 20,
    marginBottom:13,
  },
});

export default HomeScreen;
