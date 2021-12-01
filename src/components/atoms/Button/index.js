import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Button = ({ text, color }) => {
    return (
        <View style={styles.container(color)}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    container: (color) => ({
        backgroundColor: color,
        padding: 12,
        borderRadius: 8
    }),
    text: {
        fontSize: 14,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center'
    }
})
