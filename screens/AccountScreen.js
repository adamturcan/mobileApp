import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import Screen from './Screen'
import ListItem from '../components/ListItem'

import colors from '../config/colors'
import Icon from '../components/Icon'
import ListItemSeparator from '../components/ListItemSeparator'
import MessagesScreen from './MessagesScreen'
import routes from '../navigation/routes'

const menuItems =[
    {
        title:"My Listings",
        icon:{
            name:"format-list-bulleted",
            backgroundColor:colors.primary
        }
    },
    {
        title:"My Messages",
        icon:{
            name:"email",
            backgroundColor:colors.secondary
        },
        targetScreen:routes.MESSAGES_SCREEN
    }
]

export default  function AccountScreen({navigation}){
 
    return (
        <Screen style={styles.screen}>

            <View style={styles.container}>
            <ListItem title="Mosh Hamedani" subTitle="programmingwithMosh@gmail.com" image={require('../images/mosh.jpg')}/>
            </View>
            <View style={styles.container}>
                <FlatList data={menuItems}
                keyExtractor={menuItem=>menuItem.title}
                renderItem={({item})=>(
                    <ListItem title={item.title} IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />} onPress={()=>navigation.navigate(item.targetScreen)}/>
                )}
                ItemSeparatorComponent={ListItemSeparator}
                />
            </View>
            <ListItem
            title="Log Out"
            IconComponent={
                <Icon name="logout" backgroundColor="#ffe66d"/>
            }
            />
            

        </Screen>
    )

}
const styles = StyleSheet.create({
    container:{
        marginVertical:20
    },
    screen:{
        backgroundColor:'#f9f4f4'
    }
})