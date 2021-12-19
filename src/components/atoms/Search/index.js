import React from 'react'
import { StyleSheet, Text, View, TextInput as TextInputRN, TouchableOpacity } from 'react-native'

const Search = ({ label, placeholder, onFocus, ...restProps }) => {
    return (
        <View>
            <TextInputRN style={styles.input} placeholder={placeholder} {...restProps} onFocus={onFocus} />
        </View >
    )
}

export default Search

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#fff',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        backgroundColor: '#fff',
        paddingVertical: 0,
        paddingLeft: 8,

    }
})
