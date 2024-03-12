

// export default function LittleLemonHeader(){
//   return(
//     <View style={{ flex: 0.2, backgroundColor: '#F4CE14' }}>
//       {/* numberOfLines={2} */}
//       <Text style={{ padding: 40, fontSize: 30, color: 'black', textAlign: 'center' }} >
//         {/* Welcome to  */}
//         <Text style={{fontWeight:'bold'}}> Little Lemon </Text> {' '}
//       </Text>
//     </View>
//   );
// }

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.headerText}>
	  Welcome to
        <Text style={headerStyles.innerText}> Little Lemon</Text>
      </Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: '#F4CE14',
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  innerText: {
    fontWeight: 'bold',
  },
});
