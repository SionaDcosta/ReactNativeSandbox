import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term,setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        //price=== '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        })
    
    }

    //console.log(results);

  return (
    // <View style={{borderColor:'red', borderWidth:5 }}>
    //to tell view not to expand beyond the screen , and tell it to make use of the visible space that is available on the screen, we can use FLEX
    //Whenever the content is going off screen, then when you add flex:1, it will be shown on visibl area on the screen
    //<View style={{ flex:1 }}> 
    //When you use <></>(not a container/wrapper just a placeholder) you do not have to add flex:1 property,by default all the content will be automatically rendered properly on screen and wont go off-screen
    <> 
        <SearchBar 
        term={term} 
        //onTermChange={(newTerm)=> setTerm(newTerm)}
        // onTermSubmit={ () => searchApi()} can shorten this to just pass the reference to the function we want to call. Do the same thing with setTerm as well
        onTermChange={setTerm}
        // onTermSubmit={searchApi} removed these references to have some flow in execution
        onTermSubmit={()=> searchApi(term)}

        />
      {errorMessage? <Text>{errorMessage}</Text>: null}
      {/* <Text>We have found {results.length} results</Text> */}
      <ScrollView>
      <ResultsList title="Cost Effective" results={filterResultsByPrice('$')}/>
      <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')}/>
      <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')}/> 
      </ScrollView>
      
      {/* Here we've displayed places with 1,2,3 dollar signs, there are also places with 4 dollar signs, but they will not be displayed since we did not mention. That's why the total will be different than what is actually displayed */}
    </>
    //</View>
  )
}

export default SearchScreen;