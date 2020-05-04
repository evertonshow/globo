import React from 'react'
import {Text,View,TextInput,Image,TouchableOpacity} from 'react-native'
import { useNavigation }from '@react-navigation/native'

import logoImg from '../../asserts/logo.png'

import styles from './style'

export default function Login(){
const navigation = useNavigation()

 function navigateToWelcome(){
     navigation.navigate('Welcome')
 }
 function navigateToRegister(){
     navigation.navigate('Register')
 }
    return(
        <View style={styles.container}>
        <View style={styles.header}>
            <Image source={logoImg}/>
        </View>
        
        <Text style={styles.welcome}>  Bem vindo!</Text>
        <TextInput style={styles.input} placeholder='Email '/>
        <TextInput style={styles.input} placeholder='Senha '/>

<TouchableOpacity onPress={navigateToWelcome} >
<Text style={styles.loginButton} >
    Logar </Text>
</TouchableOpacity>   

<Text style={styles.bold}>
    Não tem cadastro ?
</Text>

<TouchableOpacity onPress={ navigateToRegister }>
<Text style={styles.cadastro} >
  Faça seu cadastro 
</Text>
</TouchableOpacity> 
  
        </View>
    )
}