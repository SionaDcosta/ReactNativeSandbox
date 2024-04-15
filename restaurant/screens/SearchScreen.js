import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';


const SearchScreen = () => {
    const [term,setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
  return (
    <View>
        <SearchBar 
        term={term} 
        //onTermChange={(newTerm)=> setTerm(newTerm)}
        // onTermSubmit={ () => searchApi()} can shorten this to just pass the reference to the function we want to call. Do the same thing with setTerm as well
        onTermChange={setTerm}
        // onTermSubmit={searchApi} removed these references to have some flow in execution
        onTermSubmit={()=> searchApi(term)}

        />
      {errorMessage? <Text>{errorMessage}</Text>: null}
      <Text>We have found {results.length} results</Text>
    </View>
  )
}

export default SearchScreen;