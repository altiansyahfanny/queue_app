import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IlSuccessSignUp } from '../../assets'
import { Button, Gap } from '../../components'

const SuccessSignUp = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <IlSuccessSignUp />
            <Gap height={30} />
            <Text style={styles.title}>Congratulation!</Text>
            <Gap height={6} />
            <Text tyle={styles.subTitle}>Your Registration is Completed</Text>
            <Gap height={30} />
            <View style={styles.buttonContainer}>
                <Button text="Find" color="#1985a1" onPress={() => navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] })} />
            </View>
        </View>
    )
}

export default SuccessSignUp

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
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
