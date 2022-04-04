import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {useFormikContext} from 'formik'

import ErrorMessage from './ErrorMessage'
import AppTextInput from '../AppTextInput'

export default function AppFormField({width,name,...otherProps}) {

    const {errors,touched,setFieldTouched,handleChange} = useFormikContext()

    return (
        <>
        <View style={{width:width?width:"100%"}}>
        <AppTextInput 
            onBlur={()=>setFieldTouched(name)}            
            onChangeText={handleChange(name)}
            {...otherProps}
            
            />
            </View>
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
             
        </>
    )
}

const styles = StyleSheet.create({
    
})