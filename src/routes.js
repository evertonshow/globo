import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Login from './pages/Login'
import Welcome from './pages/Welcome'
import Register from './pages/Register'

export default function Routes(){
  return(
    <NavigationContainer>
    <AppStack.Navigator  screenOptions={{headerShown:false}}  >

    <AppStack.Screen name="Login" component={Login}/>
    <AppStack.Screen name="Welcome"component={Welcome}/>
    <AppStack.Screen name="Register"component={Register}/>

    </AppStack.Navigator>

    </NavigationContainer>
  )
}