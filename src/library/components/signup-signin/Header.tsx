import React, {FC} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type HeaderProps = {
    title?: string;
};

export const Header: FC<HeaderProps> = ({title = 'Create your account'}) => {
    return (
        <View className="flex-auto self-center justify-center  ">
            <View className=" flex-row  justify-center mb-8 ">
                <Icon name="md-person-circle" size={70} color="#f3f4f6" />
            </View>
            <Text className="text-lg text-gray-100">{title}</Text>
        </View>
    );
};
