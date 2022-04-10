import React from 'react'
import { StyleSheet,ImageBackground,View,Image,Text } from 'react-native'
import AppButton from '../components/AppButton'
import colors from '../config/colors'

export default function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
    style={styles.background}
    source={require("../images/background.jpg")}
    blurRadius={10}
    >
      <View style={{
        top:70,
        position:"absolute",
        alignItems:"center"
      }}>
      <Image style={{
          width:100,
          height:100,
         
        }} source={require("../images/logo-red.png")}></Image>
        <Text style={{
          marginTop:15,
          fontSize:20,
          fontWeight:'bold'
         
        }}>Sell What You Don't Need</Text>
      </View>
        


     <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={()=>navigation.navigate("Login")} color={colors.primary} />
        <AppButton title="register" onPress={()=>navigation.navigate("Register")} color={colors.secondary}  />

     </View>
       
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background:{
   flex:1,
   justifyContent:"flex-end",
   alignItems:"center"
    
  },
  buttonsContainer:{
    padding:20,
    width:"100%"
  }

})
