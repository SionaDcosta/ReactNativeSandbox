import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ResultsDetail from './ResultsDetail';

// import {withNavigation} from 'react-navigation'; this DID NOT WORK
import { useNavigation } from '@react-navigation/native'; // this works

//const ResultsList = ( {title, results, navigation} ) => {

const ResultsList = ( {title, results} ) => { //after importing useNavigation
    const navigation = useNavigation();
    
   //added this because without this before the items are rendered the title would just render and stay like that
    //with the below condition, we first check if all the sections are loaded and ONLY IF the entire sectio is loaded it is rendered on the screen
    if(!results.length){
        return null;
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {/* <Text> Results: {results.length}</Text> */}
      <FlatList
        horizontal//horizontal={true} When we're using JSX if there's a prop whose value you want to set to true, you can just write the prop alone
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
            return (
                <TouchableOpacity onPress={()=> navigation.navigate('ResultsShow',{id: item.id})}>
                    <ResultsDetail result={item}/>
                </TouchableOpacity>
            
        
        )
        }}

      />
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft: 15,
        marginBottom:5,
    },
    container:{
        marginBottom:10,
    }
})
export default ResultsList;
//withNavigation(ResultsList);