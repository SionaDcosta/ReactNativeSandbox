import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {Feather} from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle}/>
      <TextInput
        style={styles.inputStyle}
        placeholder='Search'
        autoCapitalize='none'
        autoCorrect={false}
        value={term}
        // onChangeText={newTerm => onTermChange(newTerm)}
        // onEndEditing={()=> onTermSubmit()}

        //below I did not put any paranthesis which means I'm just passing reference to that function
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor:'#CECECE',
        height:50,
        borderRadius: 15,
        marginHorizontal: 15,
        flexDirection:'row',
        marginTop: 10,
        marginBottom:10
    },
    inputStyle:{
        // borderColor:'black',
        // borderWidth:1,
        flex:1,
        fontSize:18
    },
    iconStyle:{
        fontSize:35,
        alignSelf: 'center',
        marginHorizontal:15,// after setting up & spacing searchbar properly remove the border
    }
})

export default SearchBar;