import React from 'react'
import { View,  StyleSheet, Image,TouchableWithoutFeedback } from 'react-native'

import *  as Yup from 'yup'

import Screen from './Screen'

import {Keyboard} from 'react-native'




import {AppForm,SubmitButton,AppFormField} from '../components/forms'
import colors from '../config/colors'



const validationSchema = Yup.object().shape({
email:Yup.string().required().email().label("Email"),

})

export default function LoginScreen() {



    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{flex:1,padding:10}}>
        
        <Screen >
            <AppForm
            initialValues={{email:''}}
            onSubmit={values=>console.log(values)}
            validationSchema={validationSchema}
            >
             
            <AppFormField  
            name="email"          
            autocCapitalize="none"
            autoCorrect={false}        
            icon="email"
            placeholder="Email"
            keyboardType="email-address"
            textContentType="emailAddress"
              />                
       
                <SubmitButton name="Login" color={colors.danger}/>
            
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