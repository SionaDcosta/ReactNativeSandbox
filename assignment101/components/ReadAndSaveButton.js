import React from 'react';
import { Button, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';

const ReadAndSaveButton = () => {
  const handleReadAndSave = async () => {
    try {
      const fileContent = require('../data.json');
      const filePath = FileSystem.documentDirectory + 'data.json';
      await FileSystem.writeAsStringAsync(filePath, JSON.stringify(fileContent));
      Alert.alert('Success', 'File content saved in local storage.');
    } catch (error) {
      Alert.alert('Error', 'Failed to read and save file content: ' + error.message);
    }
  };

  return <Button title="Read and Save File Content" onPress={handleReadAndSave} />;
};

export default ReadAndSaveButton;
