import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NoInternet = () => {
    return (
        <View className="flex-1 justify-center align-middle bg-slate-400">
            <Text className="text-center text-3xl">loading...</Text>
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
