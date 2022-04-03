import React from 'react';
import {Image, StyleSheet, View} from "react-native"
import {MaterialCommunityIcons} from "@expo/vector-icons"

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
            <MaterialCommunityIcons name="close" size={35} color="white"/>
            </View>
            <View style={styles.deleteIcon}>
                     <MaterialCommunityIcons name="trash-can-outline" size={35} color="white"/>
            </View>
            <Image resizeMode='contain' style={styles.image} source={require("../images/chair.jpg")}/>
        </View>
            
        
    );
}
const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:"100%"
    },
    container:{
        backgroundColor:"#000",
        flex:1
    },
    closeIcon:{
        width:50,
        height:50,
        position:"absolute",
        top:50,
        left:20,
        alignItems:"center",
        justifyContent:"center"
    },
    deleteIcon:{
        width:50,
        height:50,
        position:"absolute",
        top:50,
        right:20,
        alignItems:"center",
        justifyContent:"center"
    },

})

export default ViewImageScreen;