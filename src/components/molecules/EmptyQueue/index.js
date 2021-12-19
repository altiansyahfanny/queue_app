import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { EmptyData } from '../../../assets'
import { Button, Gap } from '../..'
import { useNavigation } from '@react-navigation/core'

const EmptyQueue = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.page}>
            <Image source={EmptyData} style={styles.emptyData} />
            <Gap height={30} />
            <Text style={styles.title}>Maaf :(</Text>
            <Gap height={6} />
            <Text tyle={styles.subTitle}>Belum ada antrian yang terdaftar</Text>
            <Gap height={30} />
            <View style={styles.buttonContainer}>
                <Button text="Cari" color="#1985a1" onPress={() => navigation.replace('MainApp')} />
            </View>
        </View>
    )
}

export default EmptyQueue

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyData: {
        width: 250,
        height: 250
    },
    title: {
        fontSize: 20,
        color: "#020202"
    },
    subTitle: {
        fontSize: '14',
        fontWeight: '300',
        color: "#8d92a3"
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 80
    }
})
