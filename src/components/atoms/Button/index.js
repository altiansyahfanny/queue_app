import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Button = ({ text, color, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={styles.container(color)} >
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
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
