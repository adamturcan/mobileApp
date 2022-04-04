import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {useFormikContext} from 'formik'

import {ErrorMessage} from './'
import AppTextInput from '../AppTextInput'

export default function AppFormField({name,...otherProps}) {

    const {errors,touched,setFieldTouched,handleChange} = useFormikContext()

    return (
        <>
        <AppTextInput 
            onBlur={()=>setFieldTouched(name)}            
            onChangeText={handleChange(name)}
            {...otherProps}
            />
            { touched.email && <ErrorMessage error={errors[name]} visible={touched[name]}/>}
             
        </>
    )
}

const styles = StyleSheet.create({
    
})