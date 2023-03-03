import React, {useEffect} from 'react';
import NoInternet from '../screens/NoInternet';
import {useNetInfo} from '@react-native-community/netinfo';

const NetworkStatus = ({children}: any) => {
    const {isConnected} = useNetInfo();
    return isConnected ? children : <NoInternet />;
};

export default NetworkStatus;
