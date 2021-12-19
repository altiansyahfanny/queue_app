import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Gap, Header, Select, TextInput } from '../../components'
import { setLoading, signUpAction } from '../../redux/action'
import { useForm } from '../../utils'


const SignUpAddress = ({ navigation }) => {
    const [form, setForm] = useForm({
        phone_number: '',
        house_number: '',
        ward: '',
        city: 'Banjarmasin',
        province: '',
    })

    const { registerReducer, photoReducer } = useSelector((state) => state)
    const dispatch = useDispatch()

    const onSubmit = () => {
        const data = {
            ...form,
            ...registerReducer
        }
        dispatch(setLoading(true))
        dispatch(signUpAction(data, photoReducer, navigation))
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.page}>
                <Header title="Address" subTitle="Make sure it's valid" onBack={() => navigation.goBack()} />
                <View style={styles.container}>
                    <TextInput
                        label="Phone Number"
                        placeholder="Type your phone number"
                        value={form.phone_number}
                        onChangeText={(value) => setForm('phone_number', value)}
                    />
                    <Gap height={16} />
                    <TextInput
                        label="House Number"
                        placeholder="Type your house number"
                        value={form.house_number}
                        onChangeText={(value) => setForm('house_number', value)}
                    />
                    <Gap height={16} />
                    <TextInput
                        label="Ward"
                        placeholder="Type your ward"
                        value={form.ward}
                        onChangeText={(value) => setForm('ward', value)}
                    />
                    <Gap height={16} />
                    <Select
                        label="City"
                        value={form.city}
                        onSelectChange={(value) => setForm('city', value)}
                    />
                    <Gap height={24} />
                    <TextInput
                        label="Province"
                        placeholder="Type your province"
                        value={form.province}
                        onChangeText={(value) => setForm('province', value)}
                    />
                    <Gap height={16} />
                    <Button text="Sign Up Now" color="#1985a1" onPress={onSubmit} />
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUpAddress

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
        padding: 24
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
