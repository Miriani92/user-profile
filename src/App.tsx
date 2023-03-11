import React, {useEffect} from 'react';

import {MenuProvider} from 'react-native-popup-menu';
import {AppContainer, NetworkStatus} from './components';
import {ErrorHandler} from './components';
import {Root} from './Root';
import SplashScreen from 'react-native-splash-screen';

export const App = () => {
    useEffect(() => SplashScreen.hide(), []);
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
