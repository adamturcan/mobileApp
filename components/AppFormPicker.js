import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {useFormikContext} from 'formik'

import {ErrorMessage} from './forms'
import AppTextInput from './AppTextInput'

import AppPicker from './AppPicker'

export default function AppFormPicker({...otherProps}) {

    const {errors,touched,setFieldTouched,handleChange} = useFormikContext()

    return (
        <>
       <AppPicker {...otherProps}/>

     { touched.email && <ErrorMessage error={errors[name]} visible={touched[name]}/>}
             
        </>
    )
}

const styles = StyleSheet.create({
    
})