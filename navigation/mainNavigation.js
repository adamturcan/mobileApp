import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View, Text } from 'react-native'
import AccountScreen from '../screens/AccountScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import ListingsScreen from '../screens/ListingsScreen';
import Screen from '../screens/Screen';

export default function MainNavigation() {

    const Home = ()=>(
        <ListingsScreen/>
    )
    const AddList = ()=>(
      <ListingEditScreen/>
    )
    const Account = ()=>(
        <AccountScreen/>
    )

    const Tab = createBottomTabNavigator();
    const TabNavigator =()=>(
   <Tab.Navigator screenOptions={{headerShown:false}}>
     <Tab.Screen name="home" component={Home}/>
     <Tab.Screen name="add" component={AddList}/>
     <Tab.Screen name="account" component={Account}/>
    
   </Tab.Navigator>)
   return (
    <NavigationContainer>
   <TabNavigator/>
    </NavigationContainer>
        
      
   )
   }
