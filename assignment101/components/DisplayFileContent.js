import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';

const DisplayFileContent = () => {
  const [fileContent, setFileContent] = useState(null);

  useEffect(() => {
    const fetchFileContent = async () => {
      try {
        const filePath = FileSystem.documentDirectory + 'data_copy.json'; // Adjust the file name if needed
        const content = await FileSystem.readAsStringAsync(filePath);
        setFileContent(content);
      } catch (error) {
        Alert.alert('Error', 'Failed to read file content from local storage: ' + error.message);
        console.error('Error fetching file content:', error);
      }
    };

    fetchFileContent();
  }, []);

  return (
    <View>
      <Text>{fileContent}</Text>
    </View>
  );
};

export default DisplayFileContent;
