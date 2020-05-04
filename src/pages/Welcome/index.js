import React from 'react';
import { View, Image,Text,TextInput} from 'react-native';
//import { useNavigation }from '@react-navigation/native'
import {Octicons,Fontisto} from '@expo/vector-icons'
import logoImg from '../../asserts/logo.png'
import g1Img from '../../asserts/g1.png'
import geImg from '../../asserts/ge.png'
import gplayImg from '../../asserts/gplay.png'
import gshowImg from '../../asserts/gshow.png'
import passImg from '../../asserts/pass.png'
import fotoImg from '../../asserts/foto.png'
import ftImg from '../../asserts/ft.png'
import noticiaImg from '../../asserts/noticia.png'
import esporteImg from '../../asserts/esporte.png'
import redeImg from '../../asserts/rede.png'
import playImg from '../../asserts/play.png'
import faceImg from '../../asserts/face.png'

import styles from './style'

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg}/>
      </View>

  <View style={styles.busca}>
       <Octicons name='three-bars' style={styles.bars}/>
       <TextInput style={styles.input}> Buscar 
       <Fontisto name='mic' style={styles.mic}/>
       </TextInput>
  </View >
  <View style={styles.img}> 
     <Image source={g1Img} style={{marginLeft:15}} />
     <Image source={geImg} style={{marginHorizontal:15}} />
     <Image source={gplayImg} />
     <Image source={gshowImg} style={{marginHorizontal:15}}/>
     <Image source={passImg} />
  </View>

    <Text style={styles.option} >
    Notícias Esportes  entretenimento
    </Text>

  <View style={styles.nav} >
      <Text style={styles.barra} >
      </Text>
  </View>
  
  <View style={styles.fotos} >
    <Image source={fotoImg} style={{marginHorizontal:10}} />
    <Image source={ftImg} style={{marginTop :25}}/>
    <Image source={passImg} style={{marginHorizontal:10,marginTop :40}} />
  </View>

   <View style={styles.finalty} >
    <Image source={noticiaImg} style={ styles.lista1} />
    <Image source={esporteImg} style={styles.lista} />
    <Image source={redeImg} style={{marginLeft :20}} />
    <Image source={playImg} style={styles.lista} />
    <Image source={faceImg} style={styles.lista} />
   </View>      
  </View>
  );
}
