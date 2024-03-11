import * as React from 'react';
import {View,Text} from 'react-native';

export default function LittleLemonHeader(){
  return(
    <View style={{ flex: 0.15, backgroundColor: '#a39a5b' }}>
      <Text style={{ padding: 40, fontSize: 30, color: 'white', textAlign: 'center' }}>
        Little Lemon
      </Text>
    </View>
  );
}