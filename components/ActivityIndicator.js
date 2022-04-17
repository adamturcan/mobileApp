import React from 'react'
import LottieView from 'lottie-react-native'
import { View } from 'react-native';

export default function ActivityIndicator({visible=false}) {
    if(visible == false) return null;

    return <View style={{flex:1,justifyContent:"center",}}><LottieView autoPlay={true} loop={true} style={{width:100,alignSelf:"center"}}  source={require('../assets/animations/loader.json')}/></View>
}

