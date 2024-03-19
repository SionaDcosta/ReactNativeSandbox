// CityListScreen.js
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const CityListScreen = ({ route }) => {
  const { data } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.map((city, index) => (
        <View key={index} style={styles.city}>
          <Text style={styles.text}>{`Name: ${city.name}`}</Text>
          <Text style={styles.text}>{`Population: ${city.population}`}</Text>
          <Text style={styles.text}>{`Area (km²): ${city.area_km2}`}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  city: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: 300,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default CityListScreen;
