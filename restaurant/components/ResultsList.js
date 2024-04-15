import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ResultsDetail from './ResultsDetail';


const ResultsList = ( {title, results} ) => {
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
            return <ResultsDetail result={item}/>
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
export default ResultsList