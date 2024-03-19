// import { View, Text } from 'react-native';
// import React from 'react';
// import PostList from '../components/PostList';
// import ReadAndSaveButton from '../components/ReadAndSaveButton';
// import DisplayFileContent from '../components/DisplayFileContent';
 
// export default function ListScreen() {
//   return <View>
//     <ReadAndSaveButton/>
//     <DisplayFileContent/>
//     <PostList/>
//     </View>
// }

import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import Header from '../components/Header';
import PostList from '../components/PostList';
 
const ListScreen = () => {
  const [jsonData, setJsonData] = useState(null);
 
  const handleReadData = () => {
    try {
      const data = require('../data.json');
     // console.log('Data:', data);
      setJsonData(data);
    } catch (error) {
      console.error('Error reading data.json file:', error.message);
    }
  };
 
  const handleDownload = async () => {
    try {
      const fileUri = FileSystem.documentDirectory + 'data.json';
   
      // await FileSystem.downloadAsync(
      //   '../data/data.json', // Replace with your file URL
      //   fileUri
      // );
      console.log('File downloaded to:', fileUri);
      
    } catch (error) {
      console.error('Error downloading file:', error.message);
    }
  };
 
 
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header title="List Data" />
      <Text style={[styles.text, styles.margin]}>Fetching API Data</Text>
      <PostList />
      <TouchableOpacity style={styles.button} onPress={handleReadData}>
        <Text style={styles.buttonText}>Read data.json file</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleDownload}>
        <Text style={styles.buttonText}>Download file</Text>
      </TouchableOpacity>
      <ScrollView>
        {jsonData && (
          <View style={styles.dataContainer}>
            <Text style={styles.dataText}>Data from data.json:</Text>
            <Text style={styles.dataText}>{JSON.stringify(jsonData, null, 2)}</Text>
          </View>
        )}
       </ScrollView>
     
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  margin: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 25,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dataContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
  },
  dataText: {
    fontSize: 16,
  },
});
 
export default ListScreen;