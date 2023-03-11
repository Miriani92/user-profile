import React from 'react';
import {View} from 'react-native';
import {Header} from '../../library/components/signup/Header';
import {Form} from '../../library/components/signup/Form';
import {Social} from '../../library/components/signup/Social';

export const SignUp = () => {
    return (
        <View className="flex-1 bg-green-400">
            <Header />
            <Form />
            <Social />
        </View>
    );
};
