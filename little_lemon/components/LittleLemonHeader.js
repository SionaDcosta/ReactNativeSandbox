import * as React from 'react';
import {View,Text} from 'react-native';

export default function LittleLemonHeader(){
  return(
    <View style={{ flex: 0.2, backgroundColor: '#F4CE14' }}>
      {/* numberOfLines={2} */}
      <Text style={{ padding: 40, fontSize: 30, color: 'black', textAlign: 'center' }} >
        {/* Welcome to  */}
        <Text style={{fontWeight:'bold'}}> Little Lemon </Text> {' '}
      </Text>
    </View>
  );
}