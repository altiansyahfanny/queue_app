import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { EmptyQueue, Gap, Header, QueueTabSection } from '../../components';

const Queue = () => {

    const [isEmpty, setIsEmpty] = useState(false)
    return (

        <View style={styles.page}>
            {
                isEmpty ? <EmptyQueue /> :
                    <View style={{ flex: 1 }}>
                        <Header title="Tiket Saya" subTitle="Daftar antrian anda" />
                        <Gap height={24} />
                        <View style={{ flex: 1 }}>
                            <QueueTabSection />
                        </View>
                    </View>
            }
        </View>
    )
}

export default Queue

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
})
