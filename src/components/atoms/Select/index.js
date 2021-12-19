import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker';


const Select = ({ label, value, onSelectChange }) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input}>
                <Picker
                    selectedValue={value}
                    onValueChange={(itemValue, itemIndex) =>
                        onSelectChange(itemValue)
                    }
                >
                    <Picker.Item label="Banjarmasin" value="Banjarmasin" />
                    <Picker.Item label="Banjarbaru" value="Banjarbaru" />
                    <Picker.Item label="Martapura" value="Martapura" />
                    <Picker.Item label="Pelaihari" value="Pelaihari" />
                </Picker>
            </View>

        </View>
    )
}

export default Select

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontWeight: '500'
    },
    input: {
        borderWidth: 1,
        borderColor: '#c5c3c6',
        borderRadius: 8,
        paddingHorizontal: 2,
        paddingVertical: 0,
        marginTop: 4
    }
})
