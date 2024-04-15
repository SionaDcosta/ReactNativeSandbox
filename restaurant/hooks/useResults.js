import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'

import yelp from '../api/yelp';


const useResults = () => {
    const [results, setResults] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState('');

    const searchApi= async(searchTerm) => {
        console.log('Hi there'); //after adding the bad code, i added this
        // after running console.log() you'll get to know why it is bad code. it is calling the searchApi in loop agian and again
        //so i commented that badcode/ repetitive search. and now we'll be using useEffect()
        try{
            const response = await yelp.get('/search',{
                params:{
                    limit: 50, //search?limit=50
                    //term:term //rhs is the "state var:- term", we can folow ES2015 syntax because key and value are identical, we can shotern it down to "term"
                    //term, now im making changes to our api to have a flow of execution. so that blank scr will not aappear at start
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        }
        catch(err){
            setErrorMessage('Something went wrong.')
        }
    };


    //call searchApi when comp is 1st rendered. Bad code!
    //searchApi('pasta')
    useEffect(() => {
        searchApi('pasta');
    }, []);
    
  return [searchApi, results, errorMessage];
}

export default useResults