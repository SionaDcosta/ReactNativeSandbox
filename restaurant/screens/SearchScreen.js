import { View, Text } from 'react-native'
import React, {useState} from 'react'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term,setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState('');

    const searchApi= async() => {
        try{
            const response = await yelp.get('/search',{
                params:{
                    limit: 50, //search?limit=50
                    //term:term //rhs is the "state var:- term", we can folow ES2015 syntax because key and value are identical, we can shotern it down to "term"
                    term,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        }
        catch(err){
            setErrorMessage('Something went wrong.')
        }
    };

  return (
    <View>
        <SearchBar 
        term={term} 
        //onTermChange={(newTerm)=> setTerm(newTerm)}
        // onTermSubmit={ () => searchApi()} can shorten this to just pass the reference to the function we want to call. Do the same thing with setTerm as well
        onTermChange={setTerm}
        onTermSubmit={searchApi}
        />
      {errorMessage? <Text>{errorMessage}</Text>: null}
      <Text>We have found {results.length} results</Text>
    </View>
  )
}

export default SearchScreen;