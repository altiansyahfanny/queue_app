import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SplashScreen, SignIn, SignUp, SignUpAddress, SuccessSignUp, Home, Queue, Profile, AllService, DetailService } from '../pages'
import { BottomNavigator } from '../components';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

function MainApp() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Queue" component={Queue} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

const Router = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignUpAddress" component={SignUpAddress} />
            <Stack.Screen name="SuccessSignUp" component={SuccessSignUp} />
            <Stack.Screen name="AllService" component={AllService} />
            <Stack.Screen name="MainApp" component={MainApp} />
            <Stack.Screen name="DetailService" component={DetailService} />
        </Stack.Navigator>
    )
}

export default Router
