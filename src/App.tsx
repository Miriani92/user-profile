import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {AppContainer} from './components';
export const App = () => {
    return (
        <AppContainer>
            <View style={styles.wrapper}>
                <Text style={styles.text}>Hello eli</Text>
            </View>
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
