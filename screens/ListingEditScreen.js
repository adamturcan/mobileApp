import React, { useEffect, useState } from 'react'
import { View,  StyleSheet, Image,TouchableWithoutFeedback } from 'react-native'

import *  as Yup from 'yup'

import Screen from './Screen'


import {Keyboard} from 'react-native'



import {AppForm,SubmitButton,AppFormField,AppFormPicker} from '../components/forms'
import colors from '../config/colors'
import CategoryPickerItem from '../components/CategoryPickerItem'
import FormImageInputList from '../components/forms/FormImageInputList'
import useLocation from '../hooks/useLocation'



const validationSchema = Yup.object().shape({
 title:Yup.string().required().label("Title"),
price:Yup.number().required().min(1).max(10000).label("Price"),
description:Yup.string().label("Description"),
category:Yup.object().required().nullable().label("Category"),
images:Yup.array().min(1,"Please select at least one image").label("Images")

})




const categories =[
    {label:"Furniture",value:1, backgroundColor:"#fc5c65" ,icon:"floor-lamp"},
    {label:"Cars",value:2, backgroundColor:"#fd9644" ,icon:"car"},
    {label:"Cameras",value:3,backgroundColor:"#fed330" ,icon:"camera"},
    {label:"Games",value:4,backgroundColor:"#26de81" ,icon:"cards"},
    {label:"Clothing",value:5,backgroundColor:"#2bcbba" ,icon:"shoe-heel"},
    {label:"Sports",value:6,backgroundColor:"#45aaf2" ,icon:"basketball"},
    {label:"Movies & Music",value:7,backgroundColor:"#4b7bec" ,icon:"headphones"},
    {label:"Books",value:8,backgroundColor:"purple" ,icon:"book-open-variant"},
    {label:"other",value:9,backgroundColor:"gray" ,icon:"tab"},
    
]
export default function ListingEditScreen() {



    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{flex:1,padding:10}}>
        
        <Screen >
            <AppForm
            initialValues={{images:[],title:'',price:'',description:'',category:null,}}
            onSubmit={values=>console.log(location)}
            validationSchema={validationSchema}
            >
            <FormImageInputList name="images" />
            <AppFormField  
            name="title"          
            autocCapitalize="none"
            autoCorrect={false}        
            maxLength={255}
            multiline      
            numberOfLines={3} 
            placeholder="Title"
            keyboardType="default"
           
            
              />    
              
               <AppFormField 
             
            name="price"    
           
            autoCapitalize="none"
            autoCorrect={false}        
            width={120}
            placeholder="Price"
            keyboardType="number-pad"
            
              />       
              <AppFormPicker numberOfColumns={3} PickerItemComponent={CategoryPickerItem} width={200} items={categories} name="category"  placeholder="Category" />       
             <AppFormField
            autocCapitalize="none"
            autoCorrect={false}
            name="description"
            maxLength={255}
            multiline      
            numberOfLines={3} 
            placeholder="Description"
           
              />
                <SubmitButton name="Post" color={colors.danger}/>
            
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