import React from 'react';
import {View, Platform, StatusBar, Text} from 'react-native';

const AppContainer = ({children}: any) => {
    return (
        <View className="flex-1">
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
