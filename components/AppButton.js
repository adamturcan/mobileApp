import { View, Text, Button, StyleSheet,TouchableOpacity } from 'react-native'

import React from 'react'
import colors from '../config/colors'

export default function AppButton({title,onPress,color}) {
  return (

    <TouchableOpacity style={{...styles.button,backgroundColor:color}} onPress={onPress}>
    <View >
      <Text style={styles.text} >{title}</Text>
    </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    button:{
       borderRadius:25,
       width:"100%",
       padding:15,
       justifyContent:"center",
       alignItems:"center",
       marginVertical:10,


    },
    text:{
      color:"#fff",
      fontSize:18,
      textTransform:'uppercase',
      fontWeight:"bold"

    }
})