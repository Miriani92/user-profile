import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NoInternet = () => {
    console.log('hello world');
    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>No Internet Connection</Text>
        </View>
    );
};

export default NoInternet;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#383838',
    },
    text: {
        color: 'white',
        fontSize: 22,
    },
});
