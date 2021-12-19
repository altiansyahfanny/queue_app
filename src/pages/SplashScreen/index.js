import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { Logo } from '../../assets'
import { getData } from '../../utils'

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            getData('token').then((res) => {
                if (res) {
                    navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] })
                } else {
                    navigation.replace('SignIn')
                }
            })
        }, 2000)
    }, [])

    return (
        <View style={{ backgroundColor: '#1985a1', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Logo />
            <View style={{ height: 12 }}></View>
            <Text style={{ fontSize: 32, color: '#FFF', fontWeight: '500', letterSpacing: 2 }}>QuEuE</Text>
        </View>
    )
}

export default SplashScreen
