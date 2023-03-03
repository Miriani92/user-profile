import React from 'react';
import {NoInternet} from '../';
import {useNetInfo} from '@react-native-community/netinfo';

const NetworkStatus = ({children}: any) => {
    const {isConnected} = useNetInfo();
    return isConnected ? children : <NoInternet />;
};

export default NetworkStatus;
