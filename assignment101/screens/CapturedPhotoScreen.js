// CapturedPhotoScreen.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const CapturedPhotoScreen = ({ route }) => {
  const { photoUri } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: photoUri }} style={styles.photo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
});

export default CapturedPhotoScreen;
