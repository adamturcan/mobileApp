import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import ListingEditScreen from '../screens/ListingEditScreen';
import AccountNavigation from './accountNavigation';
import FeedNavigation from './feedNavigation';
import { MaterialCommunityIcons} from "@expo/vector-icons";
import NewListingButton from './NewListingButton';
import routes from './routes';

export default function MainNavigation() {


    const Tab = createBottomTabNavigator();
    const TabNavigator =()=>(
   <Tab.Navigator screenOptions={{headerShown:false}}>
     <Tab.Screen name="Feed" component={FeedNavigation} options={{ headerShown:false,tabBarIcon:({color,size})=><MaterialCommunityIcons name="home" color={color} size={size} />}}/>
     <Tab.Screen name="ListingEdit" component={ListingEditScreen} options={({navigation,route})=>({tabBarButton:()=><NewListingButton onPress={()=>navigation.navigate(routes.LISTING_EDIT)}/>})}/>
     <Tab.Screen name="Account" component={AccountNavigation} options={{tabBarIcon:({color,size})=><MaterialCommunityIcons name="account" color={color} size={size} />}}/>
    
   </Tab.Navigator>)
   return (
    
   <TabNavigator/>
    
        
      
   )
   }
