import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ItemListQueue = ({ image, point, agenda, date }) => {
    return (
        <View style={styles.content}>
            <View>
                <Image source={image} style={styles.items} />
            </View>
            <View style={{ flexDirection: 'column', marginLeft: 16, alignContent: 'center' }}>
                <Text style={{ fontWeight: '500', color: '#020202' }}>{point}</Text>
                <View style={{ marginTop: 4 }}>
                    <Text style={{ fontWeight: '400', color: '#8d92a3' }}>{agenda}</Text>
                    <Text style={{ fontWeight: '400', color: '#8d92a3', fontSize: 10 }}>{date}</Text>
                </View>
            </View>
        </View>
    )
}

export default ItemListQueue

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: 'rgba(197,195,198, 0.1)',
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16
    },
    items: {
        width: 60,
        height: 60,
        borderRadius: 8
    }
})
