import {StyleSheet} from 'react-native'
import constants from 'expo-constants'

export default StyleSheet.create({
container :{
    backgroundColor : '#D3D3D3',
    flex: 1,
    alignItems :'center',
    paddingTop: 20,    

    },
texto :{
    margin:30,
    fontSize:32,
    color : '#0f20a4',
    fontWeight:'700'
    },
input :{
    backgroundColor : 'white',
    borderBottomWidth :2,
    borderRadius :18,
    padding :8,
    width :300,
    marginBottom: 15,
    textAlign :'center',
    
},
registerButton :{
    marginTop : 20,
    paddingTop :5,
    textAlign:'center',
    height:50,width:400,
    fontSize:25, 
    color:"white", 
    backgroundColor: '#fb1f1f'
}
})