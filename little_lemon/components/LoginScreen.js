import { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Alert, KeyboardAvoidingView, Platform} from 'react-native';

export default function LoginScreen(){
    const [email,onChangeEmail]=useState('');
    const [password,onChangePassword]=useState('');
    return(
        <KeyboardAvoidingView 
        style={styles.container}
   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView keyboardDismissMode='on-drag'>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            <Text style={styles.regularText}>Login to continue</Text>
            <TextInput
                style={styles.inputBox}
                value={email}
                onChangeText={onChangeEmail}
                placeholder={email}
                keyboardType={'email-address'}
                onFocus={()=>{Alert.alert("Email is focussed")}}
                onBlur={()=>{Alert.alert("Email is blurred")}}
            />
            <TextInput
                style={styles.inputBox}
                value={password}
                onChangeText={onChangePassword}
                placeholder={password}
                keyboardType={'default'}
                secureTextEntry={true}
            />
        </ScrollView>
        </KeyboardAvoidingView>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerText: {
      padding: 40,
      fontSize: 30,
      color: '#EDEFEE',
      textAlign: 'center',
    },
    regularText: {
      fontSize: 24,
      padding: 20,
      marginVertical: 8,
      color: '#EDEFEE',
      textAlign: 'center',
    },
    inputBox: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      fontSize: 16,
      borderColor: '#EDEFEE',
      backgroundColor: '#EDEFEE',
    },
  });