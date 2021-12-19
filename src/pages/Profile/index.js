import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { ProfileDummy } from '../../assets'
import { Gap, ProfileTabSection } from '../../components'

const Profile = () => {
    return (
        <View style={styles.page}>
            <View style={styles.profileDetail}>
                <View style={styles.photo}>
                    <View style={styles.borderPhoto}>
                        <Image source={ProfileDummy} style={styles.photoConteiner} />
                    </View>
                </View>
                <Text style={styles.name}>Altiansyah Fanny</Text>
                <Text style={styles.email}>altiansyahfanny21@gmail.com</Text>
            </View>
            <Gap height={24} />
            <View style={{ flex: 1 }}>
                <ProfileTabSection />
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    profileDetail: {
        backgroundColor: 'white',
        paddingBottom: 26
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
    },
    name: {
        fontSize: 18,
        fontWeight: '500',
        color: '#020202',
        textAlign: 'center'
    },
    email: {
        fontSize: 13,
        fontWeight: '300',
        color: '#8d92a3',
        textAlign: 'center'
    }
})
