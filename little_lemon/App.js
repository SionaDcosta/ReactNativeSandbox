import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import MenuItems from './components/MenuItems';
import MenuItems_FlatList from './components/MenuItems_FlatList';
import MenuItems_SectionList from './components/MenuItems_SectionList';
import TextInputForm from './components/TextInputForm';
import LoginScreen from './components/LoginScreen';
import ViewMenu from './components/ViewMenu';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <LittleLemonHeader />
      {/* <MenuItems /> */}
      {/* <MenuItems_FlatList/> */}
      {/* <MenuItems_SectionList/> */}
      {/* <TextInputForm/> */}
      {/* <LoginScreen/> */}
      
      <ViewMenu/>
    </View>
    <View>
      <LittleLemonFooter/>
    </View>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#495E57',
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});

