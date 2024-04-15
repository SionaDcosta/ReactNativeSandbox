import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, {useState, useEffect} from 'react';
import { useRoute } from '@react-navigation/native';
import yelp from '../api/yelp';

// const ResultsShowScreen = ({navigation}) => {
    const ResultsShowScreen = ({route}) => {
    const [result, setResult] = useState();

//     const route = useRoute()
//   const id = route.params.id;

//OR

//const id = navigation.state.params.id; // ERROR  TypeError: Cannot read property 'params' of undefined

    //const id=navigation.getParam('id'); // ERROR  TypeError: navigation.getParam is not a function (it is undefined)

    console.log(id);
    // console.log(result); removed this because i was seeing undefined between the two logs.
    //initially, result is undefined, which is logged after the console.log(id) statement. Then, once the API call is complete and result state is updated, the new value of result is logged.

    
    // if (result) {
    //     console.log(result);
    // }
    
    const id = route.params.id;
    const getResult= async( id ) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(()=>{
        getResult(id);
    },[]);

    if(!result){
        return null;
    }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
            return <Image style={styles.image}
            source={{uri: item}}
            />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        height:200,
        width:300,
    }
})
export default ResultsShowScreen