import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ServiceCard = ({ image, text, onPress }) => {
    return (
        <TouchableOpacity style={styles.imageContainer} activeOpacity={0.7} onPress={onPress}>
            <Image source={image} style={styles.image} />
            <Text style={styles.imageText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default ServiceCard

const styles = StyleSheet.create({
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 90,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 3,

    },
    imageText: {
        fontSize: 12,
        color: '#8d92a3',
        marginTop: 4
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 32,
    },
})
