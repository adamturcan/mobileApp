import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function Card({title,subTitle,imageUrl, onPress}) {
  return (
 <TouchableWithoutFeedback onPress={onPress}>
     <View style={styles.card}>
         <Image style={styles.image} source={{uri:imageUrl}}/>
         <View style={{
             margin:15
         }}>
         <Text>{title}</Text>
         <Text style={styles.subTitle}>{subTitle}</Text>

         </View>
         
     </View>
    </TouchableWithoutFeedback>
   
  )
}
const styles = StyleSheet.create({
    card:{
       
        backgroundColor:"#fff",
        marginVertical:10,
        borderRadius:25,     
        overflow:'hidden'   
    },
    image:{
        width:"100%",
        height:200,
        
        


    },
    subTitle:{
        marginTop:5,
        color:"cyan"
    }
})