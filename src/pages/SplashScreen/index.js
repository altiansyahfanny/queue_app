import React from 'react'
import { View, Text } from 'react-native'
import { Logo } from '../../assets'

const SplashScreen = () => {
    return (
        <View style={{ backgroundColor: '#1985a1', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Logo />
            <View style={{ height: 12 }}></View>
            <Text style={{ fontSize: 32, color: '#FFF', fontWeight: '500', letterSpacing: 2 }}>QuEuE</Text>
        </View>
    )
}

export default SplashScreen
