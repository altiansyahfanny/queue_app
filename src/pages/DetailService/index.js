import moment from 'moment';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, Gap, Header, TextInputDate } from '../../components';
import { makeQueue, setLoading } from '../../redux/action';

const DetailService = ({ navigation, route }) => {
    const dispatch = useDispatch()

    const { id, name } = route.params.item;
    const { progress } = route.params;

    const [when, setWhen] = useState(moment(new Date()).format('HH:mm'));
    const data = {
        'service_id': id,
        'user_id': 1,
        'queue_status_id': 1,
        'date': moment(new Date()).format('dddd, DD MMMM YYYY'),
        'when': when
    }

    dispatch(setLoading(false))

    const onSubmit = () => {
        dispatch(setLoading(true))
        dispatch(makeQueue(data, navigation))
    }
    return (
        <View style={styles.page}>
            <Header title="Buat Antrian" subTitle="Pastikan Tanggal dan Jam Sesuai" onBack={() => navigation.goBack()} />
            <View style={styles.content}>
                <View style={styles.container}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.name}>MY KLINIK</Text>
                        <View style={{ marginTop: 4, flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.subtitle}>{`${name} - 00:00 - 21:00 WITA`}</Text>
                        </View>
                    </View>
                    <View style={styles.cardBody}>
                        <View style={styles.dateContainer}>
                            <TextInputDate label="Pilih Jam" setWhen={setWhen} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 16 }}>
                            <View style={{ backgroundColor: 'white', flex: 1, alignItems: 'center', borderRightWidth: 0.5, borderRightColor: '#8d92a3' }}>
                                <Text style={styles.titleQueue}>Terakhir Dilayani</Text>
                                <Text style={styles.numberQueue}>-</Text>
                            </View>
                            <View style={{ backgroundColor: 'white', flex: 1, alignItems: 'center' }}>
                                <Text style={styles.titleQueue}>Menunggu</Text>
                                <Text style={styles.numberQueue}>{progress}</Text>
                            </View>
                        </View>
                        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View style={{}}>
                                <Text style={styles.titleQueue}>Menunggu</Text>
                                <Text style={styles.numberQueue2}>0</Text>
                            </View>
                            <View style={{}}>
                                <Text style={styles.titleQueue}>Batal</Text>
                                <Text style={styles.numberQueue2}>0</Text>
                            </View>
                            <View style={{}}>
                                <Text style={styles.titleQueue}>Jumlah Loket</Text>
                                <Text style={styles.numberQueue2}>1</Text>
                            </View>
                        </View> */}
                        <Gap height={8} />
                        <Button text="Daftar" color="#1985a1" onPress={onSubmit} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DetailService

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    content: {
        flex: 1,
        padding: 16
    },
    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden'
    },
    cardHeader: {
        backgroundColor: '#1985a1',
        padding: 16,
    },
    name: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
    },
    subtitle: {
        fontSize: 14,
        color: 'white',
        marginEnd: 6
    },
    time: {
        fontSize: 14,
        color: 'white',
    },
    cardBody: {
        padding: 16,
    },
    dateContainer: {
        paddingHorizontal: 0,
    },
    searchInput: {
        borderColor: '#1985a1',
        borderWidth: 1,
        marginTop: 4,
        paddingVertical: 2,
        paddingHorizontal: 12,
        width: '100%',
        borderRadius: 16,
    },
    titleQueue: {
        fontSize: 14,
        fontWeight: '500',
        color: '#8d92a3'
    },
    numberQueue: {
        fontSize: 48,
        fontWeight: '700',
        color: '#1985a1',
    },
    numberQueue2: {
        fontSize: 24,
        fontWeight: '600',
        color: '#1985a1'
    },
    buttonContainer: {
        marginTop: 8
    },
    button: {
        backgroundColor: '#1985a1',
        borderRadius: 16,
        alignItems: 'center',
        paddingVertical: 8
    },
})
