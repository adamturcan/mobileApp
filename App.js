import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Button, Platform, View, Dimensions, ImageBackground,Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';
import AppButton from './components/AppButton';
import Card from './components/Card';
import ListingDetails from './screens/ListingDetails';
import MessagesScreen from './screens/MessagesScreen';
import Screen from './screens/Screen';
import Icon from './components/Icon';
import ListItem from './components/ListItem';
import AccountScreen from './screens/AccountScreen';
import ListingsScreen from './screens/ListingsScreen';
import AppTextInput from './components/AppTextInput';
import AppPicker from './components/AppPicker';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ListingEditScreen from './screens/ListingEditScreen'
import {Keyboard} from 'react-native'


export default function App() {



  return (
  

      <ListingEditScreen/>    

      
    
    
    
  );
}

