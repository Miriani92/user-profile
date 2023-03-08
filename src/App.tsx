import React from 'react';
import {Text, View} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import {AppContainer, NetworkStatus} from './components';
import {ErrorHandler} from './components';
import {Root} from './Root';

export const App = () => {
    return (
        <AppContainer>
            <NetworkStatus>
                <ErrorHandler>
                    <MenuProvider>
                        <Root />
                    </MenuProvider>
                </ErrorHandler>
            </NetworkStatus>
        </AppContainer>
    );
};
