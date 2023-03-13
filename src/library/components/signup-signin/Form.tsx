import React, {useState, FC} from 'react';
import {View, TextInput} from 'react-native';
type FromProps = {
    isSignIn: boolean;
};
export const Form: FC<FromProps> = ({isSignIn}) => {
    const [value, setValue] = useState('');
    const onChange = () => {
        console.log('Hello we changed text');
    };
    return (
        <View className="flex-auto self-center gap-4  w-3/4  justify-center ">
            <TextInput
                className="h-10 self-center flex-row w-60 border-x-2
                border-gray-300 border-y-2"
                placeholder="Email"
                onChangeText={onChange}
                value={value}
            />
            <TextInput
                className="h-10  flex-row w-60 border-x-2 self-center 
                border-y-2 border-gray-300"
                placeholder="Password"
            />
            {isSignIn && (
                <TextInput
                    className="h-10  flex-row w-60 border-x-2 self-center 
                    border-y-2 border-gray-300"
                    placeholder="Confirm password"
                />
            )}
        </View>
    );
};
