import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container : {
    backgroundColor:'#fff',
    flex: 1,
  
    },
  header :{
    marginTop:20,
    marginBottom :15,
      
  },
  busca :{
   flexDirection:'row',
   justifyContent :'space-between'
  },
  bars:{
    fontSize :40,
    color :'grey',
    marginTop :2,
    marginLeft :15,
    marginRight:20 

  }, 
  input :{
     borderWidth :1.7,
     width :'75%',
     height :'100%',
     fontSize :30,
     color :'#bebebe',
     fontWeight :'700',
     borderRadius: 10,
     paddingLeft :80,    
     marginRight :20,
     borderColor :'#bebebe',
     
     
     
  },
  mic :{
      fontSize :30,
      color :'gray',  
  },
  img :{
    flexDirection :'row',
    paddingTop :25
  },
  option :{
    fontSize :20,
    paddingHorizontal :10,
    marginTop :5,
  },
  barra:{
    width :80,
    height :16,
    backgroundColor :'#A4A4A4',
    borderRadius :6
  },
  nav :{
    width : 320,
    height :18,
    borderWidth :1,
    borderColor :'#A4A4A4',
    borderRadius:10,
    marginLeft :10,
    marginTop :10
  },
  fotos :{
    flexDirection :'row',
    marginTop :30,
    paddingHorizontal :10,

  },
  finalty :{
    flexDirection :'row',
    width : '100%',
    height : 60,
    backgroundColor :'#FA1212',
    marginTop : 45,
   paddingHorizontal:25
  
  },
  lista:{
    padding :22,
    marginTop:5,
    marginLeft :20
  },
  lista1:{
    padding :16,
    marginTop:10
  }
  
})