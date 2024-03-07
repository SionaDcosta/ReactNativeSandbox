import { Text, View } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
export default function App() {
  return (
    <View style={{flex:1, justifyContent:"flex-start",padding:45}}>
      <LittleLemonHeader/>
    </View>
  );
}

