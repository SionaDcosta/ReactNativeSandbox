import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Linking } from 'react-native';
import BottomTabs, {bottomTabsIcons} from '../components/home/BottomTabs';
import { SafeAreaView } from 'react-native-safe-area-context';

const SearchScreen = ({route}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { activeTab } = route.params;

  const handleSearch = () => {
    // Open YouTube in the device's default browser
    Linking.openURL('https://www.youtube.com/results?search_query=' + encodeURIComponent(searchQuery));
  };

  return (
    <>
    <SafeAreaView style={styles.safe}>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button
        title="Search on YouTube"
        onPress={handleSearch}
      />
      
    </View>
    <BottomTabs icons={bottomTabsIcons} activeTab={activeTab} />
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
    safe:{
    
        flex:1,
        backgroundColor: 'black',
    
  },
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '85%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
});


export default SearchScreen;
