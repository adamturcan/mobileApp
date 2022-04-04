import React from 'react'
import { View,  StyleSheet, Image,TouchableWithoutFeedback } from 'react-native'

import *  as Yup from 'yup'

import Screen from './Screen'

import {Keyboard} from 'react-native'




import {AppForm,SubmitButton,AppFormField} from '../components/forms'
import colors from '../config/colors'



const validationSchema = Yup.object().shape({
 name:Yup.string().required().label("Name"),
email:Yup.string().required().email().label("Email"),
password:Yup.string().required().min(4).label("Password"),

})

export default function LoginScreen() {



    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{flex:1,padding:10}}>
        
        <Screen >
            <AppForm
            initialValues={{name:'',email:'',password:''}}
            onSubmit={values=>console.log(values)}
            validationSchema={validationSchema}
            >
               
            <AppFormField  
            name="name"          
            autocCapitalize="none"
            autoCorrect={false}        
            icon="account"
            placeholder="Name"
            keyboardType="default"
            textContentType="name"
              />     
               <AppFormField  
            name="email"          
            autocCapitalize="none"
            autoCorrect={false}        
            icon="email"
            placeholder="Email"
            keyboardType="email-address"
            textContentType="emailAddress"
              />             
             <AppFormField
            autocCapitalize="none"
            autoCorrect={false}
            name="password"
            icon="lock"
            placeholder="Password"
            secureTextEntry
            textContentType="password"  />
                <SubmitButton name="Register" color={colors.danger}/>
            
                </AppForm>        

           
        </Screen>
        </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    logo:{
        width:80,
        height:80,
        alignSelf:"center",
        marginTop:50,
        marginBottom:20,
    }
})