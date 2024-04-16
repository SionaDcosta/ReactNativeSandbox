import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import React, { useContext } from 'react'
import BlogContext from '../context/BlogContext'

const IndexScreen = () => {

    // const value = useContext(BlogContext); // now this "value" var is going to be EXACTLY equal to the value that we passes from BlogContext
    // const blogPosts = useContext(BlogContext);

    //Now we no longer have an  array of obj/ array of data. So to destructure whatever we receive from blogContext
    const {data, addBlogPost} = useContext(BlogContext);
    
    return (
    <View>
      <Text>IndexScreen</Text>
      {/* <Text>{value}</Text> */}

        <Button title='Add Post' onPress={addBlogPost}/>
        {/* onPress={() => addBlogPost()}
        here we are calling the arrow func, which calls another func . Therefore we can shorten this up by just passing reference to that func that we want to be called*/}
      <FlatList
        data={data}
        keyExtractor={ blogPost => blogPost.title}
        renderItem={({item} ) => {
            return <Text>{item.title}</Text>

        }}
      />
    </View>
  )
}


const styles = StyleSheet.create({

})
export default IndexScreen