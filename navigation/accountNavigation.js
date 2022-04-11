import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';

const Stack = createNativeStackNavigator();

const AccountNavigation = () =>(

    <Stack.Navigator >
        <Stack.Screen name="AccountInfo" component={AccountScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Messages" component={MessagesScreen}/>
    </Stack.Navigator>
)
export default AccountNavigation