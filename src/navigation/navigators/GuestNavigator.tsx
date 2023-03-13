import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignUp} from '../../components/screens/SignUp';
import {SignIn} from '../../components/screens/SignIn';

const Stack = createStackNavigator();

export const GuestNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
};
