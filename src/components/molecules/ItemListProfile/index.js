import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IcNext } from '../../../assets'

const ItemListProfile = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <IcNext />
            </View>
        </TouchableOpacity>
    )
}

export default ItemListProfile

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 7
    },
    title: {
        fontSize: 14,
        color: '#020202'
    },
})
