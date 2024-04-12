import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BoxScreenEx = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  )
}
 
//another way(complex) is to create another parent view around the 2nd child and then style that 2nd parent view
// style: height:100, justifyContent:'flex-end'
{/* <View>
    <View style={styles.viewTwoStyle} />
</View> */}
const styles = StyleSheet.create({
    parentStyle:{
        borderWidth:3,
        borderColor:'black',
        height:200,
        //height:100, this is for opt2
        flexDirection:'row',
        justifyContent:'space-between',
    },
    viewOneStyle:{
        height: 50,
        width: 50,
        backgroundColor:'blue'
    },
    viewTwoStyle:{
        height: 50,
        width: 50,
        backgroundColor:'blue',
        //marginTop:50
        //alignSelf:"flex-end" //opt2: do this and cut down the height
        top: 50,
    },
    viewThreeStyle:{
        height: 50,
        width: 50,
        backgroundColor:'blue'
    }

})
export default BoxScreenEx