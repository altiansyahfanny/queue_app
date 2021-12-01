import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, TextInput } from '../../components'

const SignIn = () => {
    return (
        <View style={styles.page}>
            <Header title="Sign In" subTitle="Make it all more easy" />
            <View style={styles.container}>
                <TextInput label="Email Address" placeholder="Type your email address" />
                <Gap height={16} />
                <TextInput label="Password" placeholder="Type your password" />
                <Gap height={24} />
                <Button text="Sign In" color="#1985a1" />
                <Gap height={12} />
                <Button text="Create New Account" color="#c5c3c6" />
            </View>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: 24
    },
})
