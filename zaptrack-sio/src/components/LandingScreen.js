import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.overlappingButtonsContainer}>
        <FAB
          style={[styles.fab, styles.leftButton]}
          small
        //   icon="plus"
          onPress={() => console.log('Pressed left button')}
        />
        <FAB
          style={[styles.fab, styles.middleButton]}
        //   icon="plus"
          onPress={() => console.log('Pressed middle button')}
        />
        <FAB
          style={[styles.fab, styles.rightButton]}
          small
        //   icon="plus"
          onPress={() => console.log('Pressed right button')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:180
      },
      overlappingButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      fab: {
        width: 140,
        height: 140,
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
      },
      leftButton: {
        marginRight: -40, // Adjust this value to control the overlap
        zIndex: 1,
      },
      middleButton: {
        zIndex: 2,
      },
      rightButton: {
        marginLeft: -40, // Adjust this value to control the overlap
        zIndex: 1,
      },
    });

export default LandingScreen;
