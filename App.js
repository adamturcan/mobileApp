import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Button, Platform, View, Dimensions, ImageBackground,Text, TextInput, TouchableWithoutFeedback, Alert, Image } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {Keyboard} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer, useNavigation} from "@react-navigation/native"

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
import ImageInput from './components/ImageInput';
import ImageInputList from './components/ImageInputList';
import AuthNavigation from './navigation/authNavigation';
import MainNavigation from './navigation/mainNavigation';
import navigationTheme from './navigation/navigationTheme';


export default  function App() {
return (
  <NavigationContainer theme={navigationTheme}>
    <AuthNavigation/>
  </NavigationContainer>
)
}

