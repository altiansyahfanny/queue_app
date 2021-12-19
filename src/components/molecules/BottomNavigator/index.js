import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { IcAccountOff, IcAccountOn, IcBerandaOff, IcBerandaOn, IcChatOff, IcChatOn, IcHomeOn, IcTicketOff } from '../../../assets';

const Icon = ({ label, focus }) => {
    switch (label) {
        case 'Home':
            return focus ? <IcBerandaOn /> : <IcBerandaOff />
        case 'Queue':
            return focus ? <IcChatOn /> : <IcTicketOff />
        case 'Profile':
            return focus ? <IcAccountOn /> : <IcAccountOff />
        default:
            return <IcHomeOn />
    }
}

const BottomNavigator = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.container}>
            {
                state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            // The `merge: true` option makes sure that the params inside the tab screen are preserved
                            navigation.navigate({ name: route.name, merge: true });
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            key={index}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ alignItems: 'center' }}>
                            <Icon label={label} focus={isFocused} />
                        </TouchableOpacity>
                    );
                })
            }
        </View>
    )
}

export default BottomNavigator

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        // paddingTop: 15,
        // paddingBottom: 13,
        paddingTop: 10,
        paddingBottom: 8,
        paddingHorizontal: 50,
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderColor: '#dcdcdd',
    }
})
