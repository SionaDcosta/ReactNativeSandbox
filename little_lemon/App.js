import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import MenuItems from './components/MenuItems';
import MenuItems_FlatList from './components/MenuItems_FlatList';
import MenuItems_SectionList from './components/MenuItems_SectionList';
import TextInputForm from './components/TextInputForm';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <LittleLemonHeader />
      {/* <MenuItems /> */}
      {/* <MenuItems_FlatList/> */}
      {/* <MenuItems_SectionList/> */}
      <TextInputForm/>
    </View>
    <View>
      <LittleLemonFooter/>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
});

