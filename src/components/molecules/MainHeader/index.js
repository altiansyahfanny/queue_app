import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Search } from '../..'
import { IcSearch } from '../../../assets'

const MainHeader = ({ title, search }) => {
    const [searchKey, setSearchKey] = useState('');

    const searchSubmit = () => {
        console.log(searchKey)
    }
    return (
        <View style={styles.headerContainer}>
            <View style={styles.appNameContainer}>
                <Text style={styles.appName}>{title}</Text>
            </View>
            {
                search && (
                    <View style={styles.searchContainer}>
                        <View style={{ flex: 1 }}>
                            <Search
                                placeholder="Mau antri dimana?"
                                value={searchKey}
                                onChangeText={(value) => {
                                    setSearchKey(value)
                                    console.log(value)
                                }}
                            />
                        </View>
                        <View style={styles.iconSearchContainer}>
                            <TouchableOpacity activeOpacity={0.7} onPress={searchSubmit}>
                                <IcSearch />
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
        </View>
    )
}

export default MainHeader

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: '#1985a1',
        padding: 16,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    appNameContainer: {

    },
    appName: {
        fontSize: 22,
        fontWeight: '500',
        color: 'white',
        letterSpacing: 2
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    iconSearchContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: 2,
        paddingRight: 4,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
})
