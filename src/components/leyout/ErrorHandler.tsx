import React from 'react';
import {View, Text} from 'react-native';

class ErrorHandler extends React.Component<any> {
    constructor(props: any) {
        super(props);
        this.state = {
            errorMessage: null,
        };
    }
    componentDidCatch(error: any) {
        this.setState({errorMessage: error});
    }
    render(): React.ReactNode {
        const {isError}: any = this.state;
        return isError ? (
            <View>
                <Text>Something Went Wrong!</Text>
            </View>
        ) : (
            this.props.children
        );
    }
}

export default ErrorHandler;
