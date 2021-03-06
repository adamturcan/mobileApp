import { View, Text, StyleSheet, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import Screen from './Screen'
import Card from '../components/Card'
import routes from '../navigation/routes'
import listingsApi from '../api/listings'
import AppText from '../components/AppText'
import Button from '../components/AppButton'
import ActivityIndicator from '../components/ActivityIndicator'
import AppButton from '../components/AppButton'


export default function ListingsScreen({navigation}) {
const [listings,setListings] = useState([])
const [error,setError] = useState(false)
const [loading,setLoading] = useState(false)
useEffect(() => {
 loadListings()
}, [])

const loadListings = async()=>{
    setLoading(true)
    const response = await listingsApi.getListings();
    setLoading(false)
    if(!response.ok) return setError(true);

    setError(false)
    setListings(response.data)
    
}

  return (
   <Screen style={styles.screen}>
       {error && <>
       
         <AppText>Couldn't retrieve the listings</AppText>
       <AppButton title="Retry" color="tomato" onPress={loadListings}/>
       </>} 
       <ActivityIndicator visible={loading} />
      
       {!loading && <FlatList
        data={listings}
        keyExtractor={listing=>listing.id.toString()}
        renderItem={({item})=><Card title={item.title} subTitle={'$'+item.price} imageUrl={item.images[0].url} onPress={()=>navigation.navigate(routes.LISTING_DETAILS,item)}/>}
       />}
   </Screen>
  )
}
const styles = StyleSheet.create({
    screen:{
        padding:20,
        backgroundColor:'#f9f4f4',
       flex:1
    }
})