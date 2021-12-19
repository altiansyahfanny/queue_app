import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { ItemListProfile } from '..';

const renderTabBar = props => (
    <TabBar
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

const Account = () => {
    const navigation = useNavigation()
    const logout = () => {
        AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
            navigation.reset({ index: 0, routes: [{ name: 'SignIn' }] })
        })
    }
    return (
        <View style={{ backgroundColor: 'white', flex: 1, paddingHorizontal: 24, paddingTop: 7 }}>
            <ItemListProfile title="Edit Profile" />
            <ItemListProfile title="Home Address" />
            <ItemListProfile title="Security" />
            <ItemListProfile title="Payments" />
            <ItemListProfile title="Logout" onPress={logout} />
        </View >
    );
}

const Queue = () => (
    <View style={{ backgroundColor: 'white', flex: 1, paddingHorizontal: 24, }}>
        <ItemListProfile title="Rate App" />
        <ItemListProfile title="Help Center" />
        <ItemListProfile title="Privasy & Policy" />
        <ItemListProfile title="Term & Condition" />
    </View>
);

const renderScene = SceneMap({
    1: Account,
    2: Queue,
});

const ProfileTabSection = () => {

    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: '1', title: 'Account' },
        { key: '2', title: 'QuEuE' },
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

export default ProfileTabSection

const styles = StyleSheet.create({})
