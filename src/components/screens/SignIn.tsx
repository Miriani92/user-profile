import React from 'react';
import {Header} from '../../library/components/signup-signin/Header';
import {Form} from '../../library/components/signup-signin/Form';
import {Social} from '../../library/components/signup-signin/Social';
import LinearGradient from 'react-native-linear-gradient';

export const SignIn = () => {
    const headerTitle: string = 'Login to your account';
    const socialTitle: string = "Don't have an account?";
    return (
        <LinearGradient
            className="flex-1"
            colors={['#4f46e5', '#2563eb']}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 1}}>
            <Header title={headerTitle} />
            <Form isSignIn={false} />
            <Social title={socialTitle} />
        </LinearGradient>
    );
};
