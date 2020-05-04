import React from 'react';
import {Dimensions, View,Text,TextInput,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
//import * as MailComposer from '@expo-mail-composer'


import styles from './style';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full heigh

export default function Register() {
const navigation = useNavigation()
//const message = 'Ola! venha aproveita o Globo|one e tudo que tem bom'

/* Function to Email
function sendMail() {
  MailComposer.ComposeAsync({
    subject :'O mundo de inovação chamado Globoone',
    recipients:['evertonfran@hotmail.com'],
    body :message,
  })
}
   //function to whatsapp
 function sendWhatsapp() {
  Linking.openURL(`whatsapp://send?phone=5511994964823text=${message}`)
}*/

 function navigateToRegister(){
  navigation.navigate('Login')
}

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Faça Seu Cadastro</Text>
      <View style={styles.form}>
        
    <TextInput style={styles.input} placeholder='* Nome *'/> 
    <TextInput style={styles.input} placeholder='* Sobrenome *'/> 
    <TextInput style={styles.input} placeholder='* Email *'/> 
    <TextInput style={styles.input} placeholder='* Senha *'/> 
    <TextInput style={styles.input} placeholder='* Confirme a Senha*'/> 
    <TextInput style={styles.input} placeholder='* Contato *'/>

    </View>
    <View>
    <TouchableOpacity onPress={navigateToRegister} >
<Text style={styles.registerButton} >
    Cadastrar </Text>
</TouchableOpacity>   
    </View>

    </View>
  );
}
