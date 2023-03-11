import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GuestNavigator} from './navigation/navigators/GuestNavigator';

export const Root = () => {
    return (
        <NavigationContainer>
            <GuestNavigator />
        </NavigationContainer>
    );
};
