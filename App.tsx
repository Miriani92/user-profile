import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>Hello world</Text>
        </View>
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
    },
});

export default App;
