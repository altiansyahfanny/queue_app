import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { Button, Gap, Header, TextInput } from '../../components'
import { setLoading, SignInAction } from '../../redux/action'
import { useForm } from '../../utils'

const SignIn = ({ navigation }) => {
    const [form, setForm] = useForm({
        email: '',
        password: ''
    })

    const dispatch = useDispatch()

    const onSubmit = () => {
        dispatch(setLoading(true))
        dispatch(SignInAction(form, navigation))
    }
    return (
        <View style={styles.page}>
            <Header title="Sign In" subTitle="Make it all more easy" />
            <View style={styles.container}>
                <TextInput
                    label="Email Address"
                    placeholder="Type your email address"
                    value={form.email}
                    onChangeText={(value) => setForm('email', value)}
                />
                <Gap height={16} />
                <TextInput
                    label="Password"
                    placeholder="Type your password"
                    value={form.password}
                    onChangeText={(value) => setForm('password', value)}
                    secureTextEntry
                />
                <Gap height={24} />
                <Button text="Sign In" color="#1985a1" onPress={onSubmit} />
                <Gap height={12} />
                <Button text="Create New Account" color="#c5c3c6" onPress={() => navigation.navigate('SignUp')} />
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
