import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text } from 'react-native'
import LoginScreen from '../screens/LoginScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import RegisterScreen from '../screens/RegisterScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigation from './mainNavigation'
import Screen from '../screens/Screen'



export default function AuthNavigation() {
 


 
const Stack = createNativeStackNavigator();
const AuthNavigation = ()=>(

  <Stack.Navigator >
      
    <Stack.Screen name="home" component={WelcomeScreen} options={{headerShown:false}}/>
    <Stack.Screen  name="Register" component={RegisterScreen}/>
    <Stack.Screen  name="Login" component={LoginScreen}/>
    
    
  </Stack.Navigator >



)


  return (
      
  <AuthNavigation/>
    
    
    
  );
}
