import { View, Text,StyleSheet,Image, TouchableHighlight } from 'react-native'
import React from 'react'
import  Swipeable  from 'react-native-gesture-handler/Swipeable'

export default function ListItem({title,subTitle,image,IconComponent,onPress,renderRightActions}) {
  return (
      <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress}
      underlayColor={"#f9f4f4"}
      >
    <View style={styles.container}>
      {image &&<Image source={image} style={styles.image} />}
        {IconComponent}
      <View style={{
          
          marginLeft:10,
          justifyContent:"center"
         
      }}>
          <Text style={styles.title}>{title}</Text>
         {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      </View>
    </View>
    </TouchableHighlight>
    </Swipeable>
  )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:15,
        backgroundColor:"#fff"
    
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
       
    },
    title:{
        fontWeight:"500",
        marginBottom:3
        
    },
    subTitle:{
        color:"#6e6969"
        
    }
})