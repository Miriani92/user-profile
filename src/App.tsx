import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import {AppContainer, NetworkStatus} from './components';
import {ErrorHandler} from './components';

export const App = () => {
    return (
        <AppContainer>
            <NetworkStatus>
                <ErrorHandler>
                    <MenuProvider>
                        <View style={styles.wrapper}>
                            <Text style={styles.text}>Hello World</Text>
                        </View>
                    </MenuProvider>
                </ErrorHandler>
            </NetworkStatus>
        </AppContainer>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
});
