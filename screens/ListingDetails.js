import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import ListItem from '../components/ListItem'
export default function ListingDetails({image,title,subTitle}) {
  return (
    <View style={{
        flex:0.35,
    }}>
      <Image source={image} style={styles.image} />
      <View style={{
          margin:20,
          
      }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
          <View style={{
              marginVertical:40
          }}>
          <ListItem
            image={require('../images/mosh.jpg')}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />

          </View>
          
          
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:"100%"
    },
    title:{
        marginBottom:10,
        fontSize:20,
        fontWeight:"400"
    },
    subTitle:{
        color:"cyan",
        fontSize: 18,
        fontWeight:"500"
    }
})