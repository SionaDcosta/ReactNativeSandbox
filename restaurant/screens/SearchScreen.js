import { View, Text } from 'react-native'
import React, {useState} from 'react'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
    const [term,setTerm] = useState('');
  return (
    <View>
        <SearchBar 
        term={term} 
        onTermChange={(newTerm)=> setTerm(newTerm)}
        onTermSubmit={ () => console.log('Term was submitted')}
        />
      <Text>SearchScreen</Text>
      <Text>{term}</Text>
    </View>
  )
}

export default SearchScreen;