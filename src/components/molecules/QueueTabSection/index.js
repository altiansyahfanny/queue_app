import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import { ItemListQueue } from '..';
import { Fever, Pregnant, Tooth } from '../../../assets';
import { getQueueByUserID } from '../../../redux/action';

const renderTabBar = props => (
    <TabBar
        op
        {...props}
        indicatorStyle={{ backgroundColor: '#1985a1', height: 3, width: 0.4 }}
        style={{ backgroundColor: 'white', elevation: 0, shadowOpacity: 0, borderBottomColor: '#f2f2f2', borderBottomWidth: 1 }}
        tabStyle={{ width: 'auto', paddingHorizontal: 24 }}
        renderLabel={({ route, focused, color }) => (
            <Text style={{ color: focused ? '#020202' : '#8d92a3', fontWeight: '500' }}>
                {route.title}
            </Text>
        )}
    />
);

const InProgress = () => {
    const dispatch = useDispatch();
    const { inProgress } = useSelector((state) => state.queueReducer);

    useEffect(() => {
        dispatch(getQueueByUserID('1'));
    }, []);

    return (
        <ScrollView style={{ backgroundColor: 'white', flex: 1, paddingHorizontal: 24 }}>
            {
                inProgress.map((item) => {
                    console.log(item)
                    return (
                        <ItemListQueue key={item.id} image={{ uri: item.service.service_photo_path }} point="MY DENTIST" agenda={item.service.name} date={`${item.date} ${item.when}`} />
                    )
                })
            }
        </ScrollView>
    )
};


const PastQueues = () => {
    const dispatch = useDispatch();
    const { past } = useSelector((state) => state.queueReducer);

    useEffect(() => {
        dispatch(getQueueByUserID('2'));
    }, []);

    return (
        <ScrollView style={{ backgroundColor: 'white', flex: 1, paddingHorizontal: 24 }}>
            {
                past.map((item) => {
                    console.log(item)
                    return (
                        <ItemListQueue key={item.id} image={{ uri: item.service.service_photo_path }} point="MY DENTIST" agenda={item.service.name} date={`${item.date} ${item.when}`} />
                    )
                })
            }
        </ScrollView>
    )
};

const renderScene = SceneMap({
    1: InProgress,
    2: PastQueues,
});

const QueueTabSection = ({ queue }) => {

    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: '1', title: 'In Progress' },
        { key: '2', title: 'Past Queues' },
    ]);
    return (
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    )
}

export default QueueTabSection

const styles = StyleSheet.create({})
