import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import ListItem from '../components/ListItem'
export default function ListingDetails({route}) {

const listing = route.params

  return (
    <View style={{flex:1}}>
    <View style={{
        flex:0.35,
    }}>
      <Image source={{uri:listing.images[0].url}} style={styles.image} />
      <View style={{
          margin:20,
          
      }}>
          <Text style={styles.title}>{listing.title}</Text>
          <Text style={styles.subTitle}>{listing.price}</Text>
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