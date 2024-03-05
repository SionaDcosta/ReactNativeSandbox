import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hey, Sio!</Text>
      </View>
      <MyImg />
      <MyScrollView />
    </View>
  );
}

const MyImg = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: 'https://miro.medium.com/v2/resize:fit:1024/1*xDi2csEAWxu95IEkaNdFUQ.png' }}
        style={styles.image}
      />
    </View>
  );
};

const MyScrollView = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.listItem}>Rally Interactive</Text>
      <Text style={styles.listItem}>Awesomed</Text>
      <Text style={styles.listItem}>Awesome Motive</Text>
      <Text style={styles.listItem}>Genrod</Text>
      <Text style={styles.listItem}>DM Homes</Text>
      <Text style={styles.listItem}>Long Story Short</Text>
      <Text style={styles.listItem}>Interword</Text>
      <Text style={styles.listItem}>Shape</Text>
      <Text style={styles.listItem}>Sliders</Text>
      <Text style={styles.listItem}>Appetite Creative</Text>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    flex: 1, // Make the top section occupy half of the screen's height
    justifyContent: 'center', // Center content vertically within the top section
    alignItems: 'center', // Center content horizontally within the top section
    
    
  },
  imageContainer: {
    alignItems: 'center', // Maintain image centering
    marginTop:-120,
  },
  image: {
    width: 200,
    height: 200,
    
  },
  scrollView: {
    flex: 1, // Make the scroll view occupy the remaining half of the screen's height
    width: '100%',
    marginTop: 20,
    
  },
  listItem: {
    
    fontSize: 16,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
