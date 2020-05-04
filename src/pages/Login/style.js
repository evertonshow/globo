import {StyleSheet} from 'react-native'
import constants from 'expo-constants'

export default StyleSheet.create({
    container:{
        flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 30,
  },
 header :{
marginBottom :50,
},
welcome : {
    paddingBottom : 20,
    fontSize :30,
    fontWeight :'700'
},
input :{
    borderBottomWidth :2,
    borderColor : '#777',
    padding :8,
    width :'75%',
    marginBottom : 20,
    textAlign : 'center'
},
loginButton :{
    marginTop : 20,
    textAlign:'center',
    justifyContent:'center',
    borderRadius:20,
    width :140,height:40,
    fontSize:25, 
    color:"white", 
    backgroundColor: '#fb1f1f'
},
bold :{
    marginTop : 30,
    color :'#fb1f1f',
    fontSize :16,
},
cadastro :{
    marginTop : 40,
    borderRadius : 30,
    width :210,
    textAlign :'center',
    color : 'white',
    backgroundColor :'blue',
    height : 40,
    fontSize :20,
    paddingTop :5,
  
}
})




