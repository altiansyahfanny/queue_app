import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput as TextInputRN, TouchableOpacity, View } from 'react-native'
import DatePicker from 'react-native-date-picker'
import { IcCalendar } from '../../../assets'
import moment from 'moment';

const TextInputDate = ({ label, setWhen }) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <>
            <View>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.content}>
                    <TextInputRN style={styles.input} editable={false} value={moment(date).format('HH:mm')} />
                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => setOpen(true)} activeOpacity={0.7}>
                            <Image source={IcCalendar} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <DatePicker
                    modal
                    mode="time"
                    is24hourSource={true}
                    locale='id'
                    textColor='#1985a1'
                    cancelText='Batal'
                    confirmText='Pilih'
                    title='Pilih Jam'
                    minuteInterval={30}
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                        setWhen(moment(date).format('HH:mm'))

                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
            </View>
        </>
    )
}

export default TextInputDate

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row'
    },
    button: {
        paddingHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#c5c3c6',
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    label: {
        fontSize: 16,
        fontWeight: '500'
    },
    input: {
        paddingLeft: 8,
        flex: 1,
        borderColor: '#c5c3c6',
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        color: 'black',
        fontSize: 16
    },
    icon: {
        width: 20,
        height: 20
    }
})
