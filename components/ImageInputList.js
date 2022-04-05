import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ImageInput from './ImageInput'

export default function ImageInputList({imageUris,onImageAdd}) {

    

    return (

        <View> 
            {console.log(imageUris)}
              <FlatList
        horizontal
        data={imageUris}
        keyExtractor={uri=>uri}
        renderItem={({imgUri})=> {
            console.log(imgUri)
            return <ImageInput imageUri={imgUri} onImageSelect={uri=>onImageAdd(uri)  } />
        }}
        />

           
        </View>
    )
}
const styles = StyleSheet.create({
    
})