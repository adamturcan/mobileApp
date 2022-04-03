import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

export default function Card({title,subTitle,image}) {
  return (
 
     <View style={styles.card}>
         <Image style={styles.image} source={image}/>
         <View style={{
             margin:15
         }}>
         <Text>{title}</Text>
         <Text style={styles.subTitle}>{subTitle}</Text>

         </View>
         
     </View>
      
   
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