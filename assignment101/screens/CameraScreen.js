import React from 'react';
import { View, Text, Button } from 'react-native';
import { Link, Stack } from 'expo-router';
const CameraScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Camera Screen</Text>
      <Link href="/day11/camera" asChild>
        <Button title="Go to Camera" />
      </Link>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default CameraScreen;
