import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'
import { useDispatch } from 'react-redux'
import { Button, Gap, Header, TextInput } from '../../components'
import { showMessage, useForm } from '../../utils'


const SignUp = ({ navigation }) => {
    const [form, setForm] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const dispatch = useDispatch()

    const onSubmit = () => {
        dispatch({ type: 'SET_REGISTER', value: form })
        navigation.navigate('SignUpAddress')
    }
    const [photo, setPhoto] = useState('')
    const addPhoto = () => {
        launchImageLibrary({
            quality: 0.5,
            maxHeight: 200,
            maxWidth: 200
        }, (response) => {

            if (response.didCancel || response.errorCode) {
                showMessage('Canceled')
            } else {
                const source = { uri: response.assets[0].uri }
                const dataImage = {
                    uri: response.assets[0].uri,
                    name: response.assets[0].fileName,
                    type: response.assets[0].type,
                }
                setPhoto(source)
                dispatch({
                    type: 'SET_PHOTO',
                    value: dataImage
                })
                dispatch({
                    type: 'SET_UPLOAD_PHOTO',
                    value: true
                })
            }

        })
    }
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.page}>
                <Header title="Sign Up" subTitle="Register new account" onBack={() => navigation.goBack()} />
                <View style={styles.container}>
                    <View style={styles.photo}>
                        <TouchableOpacity onPress={addPhoto}>
                            <View style={styles.borderPhoto}>
                                {
                                    photo
                                        ?
                                        <Image source={photo} style={styles.photoConteiner} />
                                        :
                                        <View style={styles.photoConteiner}>
                                            <Text style={styles.addPhotto}>Add Photo</Text>
                                        </View>
                                }
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        label="Full Name"
                        placeholder="Type your full name"
                        value={form.name}
                        onChangeText={(value) => setForm('name', value)}
                    />

                    <Gap height={16} />
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
                    <Button text="Continue" color="#1985a1" onPress={onSubmit} />
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUp

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
    photo: {
        alignItems: 'center',
        marginTop: 26,
        marginBottom: 16,
    },
    addPhotto: {
        fontSize: 14,
        fontWeight: '300',
        textAlign: 'center',
    },
    photoConteiner: {
        width: 90,
        height: 90,
        borderRadius: 90,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    borderPhoto: {
        borderWidth: 1,
        width: 110,
        height: 110,
        borderColor: "#8d93a3",
        borderRadius: 100,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
