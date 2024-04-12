import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
//alignItems,flexDirection,justifyContent: all of these will be applied to parent to make some changes to the children inside it like how they are displayed
//flex,alignSelf: these are some properties are gonna be applied to child directly
//By default position : "relative", if we give absolute:- the ele will be ignored by siblings. It still obeys some flex box rules set by parent

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child1</Text>
      <Text style={styles.textTwoStyle}>Child2</Text>
      <Text style={styles.textThreeStyle}>Child3</Text>
    </View>
  )
}

// const styles = StyleSheet.create({
//     // viewStyle:{
//     //     borderWidth:5,
//     //     borderColor: 'black',
//     //     //alignItems:'center', //applied on parent and aligns items HORIZONTALLY, default:"stretch"
//     //     flexDirection:'row', //applied on parent,by def: 'column'. flexDirection affcets how alignItems behaves.
//     //     height: 100, // with align items removed, height will stretch out in the view, just like alignItems property
//     //     alignItems:'center' //now apply alignItems, after using height it will work fine
//     // },
//     viewStyle:{
//         borderWidth:5,
//         borderColor: 'black',
//         height: 200,
//         // justifyContent:'space-around', //now if you add flex direction shown below, see results on screen
//         // flexDirection:'row' i removed these two to try flex on children, flex was column by def
//         //flexDirection:'row' when i added this to parent view then the child took up space horizontally
//         //flexDirection:'row'
//         alignItems:'flex-end' //just to chcek position on child 3
//     },
// //     textStyle:{
// //         borderWidth:5,
// //         borderColor:'red',
// //                         // marginVertical: 10,
// //                         // marginHorizontal:10,
// //         // margin:10, here while learning about FlexBox I removed margin
// // }
// textOneStyle:{
//     borderWidth:5,
//     borderColor:'red',
//     flex:1,
// },
// textTwoStyle:{
//     borderWidth:5,
//     borderColor:'red',
//     flex:1, // basically used to distribute or take up space
// },
// textThreeStyle:{
//     borderWidth:5,
//     borderColor:'red',
//     flex:1,
//     // alignSelf:'flex-start' removed alignSelf to check position
//     position:'absolute',
//     fontSize:25,//just to see child3
// }
// });

// //By default alignItems: 'stretch'and this will be applied to any one child, but you can modify any one child by adding alignSelf


const styles = StyleSheet.create({
    viewStyle:{
        borderWidth:5,
        borderColor: 'black',
        height: 200,
    },
    textOneStyle:{
            borderWidth:5,
            borderColor:'red',
            
        },
        textTwoStyle:{
            borderWidth:5,
            borderColor:'red',
            fontSize:25,
            // for childEle to fill up parent:
            // position:'absolute',
            // top:0,
            // right:0,
            // left:0,
            // bottom:0,
            // intstead of doing these above 5 things, reactnative has a shortcut
            ...StyleSheet.absoluteFillObject //hardcoded obj that has all those 5 properties, and ... means to copy paste those 5 properties into textTwoStyle obj
        },
        textThreeStyle:{
            borderWidth:5,
            borderColor:'red',
            
            
        }
})
export default BoxScreen