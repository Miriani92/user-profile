import React from 'react';
import {View, Platform, StyleSheet, StatusBar} from 'react-native';

const AppContainer = ({children}: any) => {
    return (
        <View style={styles.container}>
            {Platform.OS === 'android' ? (
                <StatusBar
                    barStyle={'light-content'}
                    backgroundColor={'#383838'}
                />
            ) : (
                <StatusBar barStyle={'light-content'} />
            )}
            {children}
        </View>
    );
};

export default AppContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
