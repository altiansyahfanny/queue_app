import React, { useEffect } from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Jumbotron } from '../../assets'
import { Gap, MainHeader, ServiceCard } from '../../components'
import { getAllService, getServiceStatus, setLoading } from '../../redux/action'

const Home = ({ navigation }) => {
    const dispatch = useDispatch();
    const { service } = useSelector((state) => state.homeReducer);

    useEffect(() => {
        dispatch(getAllService());
    }, []);

    const makeQueue = (item) => {
        dispatch(setLoading(true))
        dispatch(getServiceStatus(navigation, item, 'progress', item.id))
    }

    return (
        <>
            <MainHeader title="QuEuE" search={true} />
            <ScrollView>
                <View>
                    <Image source={Jumbotron} style={styles.jumbotron} />
                </View>
                <View style={styles.serviceContainer}>
                    <View style={styles.serviceRow}>
                        {
                            service.map((item) => {
                                return (
                                    <ServiceCard key={item.id} image={{ uri: `${item.service_photo_path}` }} text={item.name} onPress={() => makeQueue(item)} />
                                )
                            })
                        }
                    </View>
                    <Gap height={16} />
                    <View style={styles.serviceRow}>
                        {
                            service.map((item) => {
                                return (
                                    <ServiceCard key={item.id} image={{ uri: `${item.service_photo_path}` }} text={item.name} onPress={() => makeQueue(item)} />
                                )
                            })
                        }
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default Home

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
    jumbotron: {
        width: '100%',
        height: 250,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },
    desc: {
        fontSize: 14,
        fontWeight: '300',
        color: 'white'
    },
    serviceContainer: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: 'white',
        marginTop: 24,
        paddingVertical: 48,
    },
    serviceRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },


})
