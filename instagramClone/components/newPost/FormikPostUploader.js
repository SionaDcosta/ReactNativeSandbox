import { View, Text, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup';
import {Formik} from 'formik';
import { Button, Divider } from 'react-native-elements'

const placeholderImg = require('../../assets/defaultPlaceholder_NewPost.png');

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200,'Caption has reached the character limit')
})
const FormikPostUploader = () => {

    const [thumbnailUrl, setThumbnailUrl] = useState(placeholderImg);
  return (
   <Formik
   initialValues = {{caption:'', imageUrl:''}}
        onSubmit={(values) => console.log(values) }
        validationSchema={uploadPostSchema}
        validateOnMount={true} //because the share button was enabled when page loaded, 
    >
       {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) =>(
        <>
        <View style={{margin: 20, justifyContent:'space-between', flexDirection:'row'}}>
            <Image source={thumbnailUrl? {uri:thumbnailUrl}: placeholderImg}  //made it dynamic and before source was:source={thumbnailUrl? thumbnailUrl: placeholderImg (i added {uri:} to render img properly)
            style={{width:100, height:100}}/>
        <View style={{flex:1, marginLeft:12 }}>
        <TextInput
            style={{fontSize:20}}
            placeholder='Write a caption...' //placeholderTextColor='gray'
            multiline={true} 
            onChangeText={handleChange('caption')}
            onBlur={handleBlur('caption')}
            value={values.caption}
        />
        </View>
        </View>
        <Divider width={0.2} orientation='vertical'/>
        <TextInput
        onChange={e => setThumbnailUrl(e.nativeEvent.text)} //e=event
            style={{fontSize:18}}
            placeholder='Enter Image URL' 
            onChangeText={handleChange('imageUrl')}
            onBlur={handleBlur('imageUrl')}
            value={values.imageUrl}
        />
        {errors.imageUrl && (
            <Text style={{fontSize: 10, color:'red'}}>{errors.imageUrl}</Text>
        )}

        <Button onPress={handleSubmit} title='Share' disabled={!isValid}/>
    </>
       )
        
       } 
   </Formik>
  )
}

export default FormikPostUploader;