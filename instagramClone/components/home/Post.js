import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {Divider} from 'react-native-elements';

const postFooterIcons =[
    {
        name:'Like',
        imageUrl:require('../../assets/footerIcons8-like.png'),
        likedImageUrl:require('../../assets/footerIcons8-liked.png')
    },
    {
        name:'Comment',
        imageUrl:require('../../assets/footerIcons8-comment.png'),
    },
    {
        name:'Share',
        imageUrl:require('../../assets/footerIcons8-share.png'),
    },
    {
        name:'Save',
        imageUrl:require('../../assets/footerIcons8-save.png'),
        savedImageUrl:require('../../assets/footerIcons8-saved.png')
    },
];
const Post = ({post}) => {
  return (
    <View style={{marginBottom:13}}>
        <Divider width={1} orientation='vertical'/>
        <PostHeader post={post}/>
        <PostImage post={post}/>
        <View style={{marginHorizontal:15, marginTop:10 }}>
            <PostFooter/>
            <Likes post={post}/>
            <Caption post={post}/>
            <CommentsSection post={post}/>
            <Comments post={post}/>
        </View>
        
    </View>
  )
}

const PostHeader=({post})=>(
    <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:5,
        alignItems:'center'
    }}>
        <View style={{flexDirection: 'row', alignItems:'center'}}>
            <Image source={{uri: post.profile_picture }} style={styles.story}/>
            <Text style={{marginLeft:5, fontWeight:'700'}}>{post.user}</Text>
        </View>
        <Text style={{fontWeight:'900'}}>...</Text>
    </View>
)

const PostImage = ({post}) => ( //implicit return
<View style={{width:'100%', height: 450}}>
<Image source={{uri: post.imageUrl}} style={{height:'100%', resizeMode:'cover'}}/>
</View>
    
)

const PostFooter=() =>(
    <View style={{ flexDirection:'row'}}>
        <View style={styles.leftFooterIconsContainer}>
        <Icon imgStyle={styles.footerIcon} imageUrl={postFooterIcons[0].imageUrl}/>
        <Icon imgStyle={styles.footerIcon} imageUrl={postFooterIcons[1].imageUrl}/>
        <Icon imgStyle={[styles.footerIcon,]} imageUrl={postFooterIcons[2].imageUrl}/> 
        {/* styles.shareIcon */}
        </View>
        </View>
    
)

const Icon = ({imgStyle,imageUrl}) =>(
    <TouchableOpacity>
        <Image style={imgStyle} source={imageUrl}/>
    </TouchableOpacity>
)

const Likes = ({post})=>(
    <View style={{flexDirection:'row', marginTop: 4}}>
        <Text style={{fontWeight:'600'}}>
            {post.likes.toLocaleString('en')} likes
        </Text>
    </View>
)

const Caption =({post})=>(
    <View style={{marginTop: 5}}>
        <Text>
        <Text style={{fontWeight:'600'}}>{post.user}</Text>
        <Text> {post.caption}</Text>
    </Text>
    </View>
)


//post.comments.length gives you a 0 which is an integer, but the content inside in <Text> i.e text. Incase i had returned True/False the the text would be rendered. so now what to do? see below
const CommentsSection=({post}) =>(
    <View style={{marginTop:5 }}>
    {!!post.comments.length && (
        <Text style={{color:'grey'}}>
        View 
        {post.comments.length>1 ? ' all' : ''} {post.comments.length}{' '}
        {post.comments.length > 1 ? 'comments': 'comment'}
    </Text>
    )}
    </View>
)

const Comments = ({post}) => (
    <>
        {post.comments.map((comment,index)=>(
            <View key = {index} style={{flexDirection:'row',marginTop: 5}}>
            <Text>
                <Text style = {{fontWeight: '600'}}>{comment.user}</Text>
               {" "} {comment.comment}
            </Text>
        </View>
        ))}
    </>
)
const styles = StyleSheet.create({
    story:{
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: '#ff8501',
    },
    footerIcon:{
        width: 33,
        height: 33,
    },
    leftFooterIconsContainer:{
        flexDirection:'row',
        width:'32%',
        justifyContent:'space-between'
    },
    // shareIcon:{
    //     transform:[{rotate: '320deg'}],
    //     marginTop: -3,
    // }
})
export default Post;