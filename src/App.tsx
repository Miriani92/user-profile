import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {AppContainer, NetworkStatus} from './components';

export const App = () => {
    return (
        <AppContainer>
            <NetworkStatus>
                <View style={styles.wrapper}>
                    <Text style={styles.text}>Hello World</Text>
                </View>
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
