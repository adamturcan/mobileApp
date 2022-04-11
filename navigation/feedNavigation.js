import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListingsScreen from '../screens/ListingsScreen'
import ListingDetails from '../screens/ListingDetails'

const Stack = createNativeStackNavigator();

const FeedNavigation = () =>(

    <Stack.Navigator screenOptions={{presentation:"modal"}} s>
        <Stack.Screen name="Listings" component={ListingsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ListingDetails" component={ListingDetails} options={{headerShown:false}}/>
    </Stack.Navigator>
)
export default FeedNavigation