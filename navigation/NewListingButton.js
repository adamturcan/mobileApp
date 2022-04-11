import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native-gesture-handler'
import listingsApi from '../api/listings'

export default function NewListingButton({onPress}) {
  
  const loadListings = async()=>{
    console.log('a')
    const response = await listingsApi.getListings();
   
    console.log(response.data)
}

  return (
      <TouchableOpacity onPress={()=>loadListings()}>
    <View style={styles.container}>
        <MaterialCommunityIcons name="plus-circle" color={colors.white} size={40}/>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        backgroundColor: colors.primary,
        borderColor:colors.white,
        borderWidth:10,
        height:80,
        width:80,
        borderRadius:40,
        bottom:20,
        justifyContent:"center",
    }
})