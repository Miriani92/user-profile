import React, {FC} from 'react';
import {View, Linking, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Brand from 'react-native-vector-icons/Ionicons';

const GoogleUrl = 'https://mail.google.com/';
const FacebookUrl = 'https://www.facebook.com/';
const TwitterUrl = 'https://twitter.com/';

type SocialProps = {
    title?: string;
};

export const Social: FC<SocialProps> = ({title}) => {
    const handleIconsPressed = (Url: string): void => {
        Linking.openURL(Url);
    };
    return (
        <View className="flex-auto gap-8 justify-center">
            <View className="flex-row gap-x-8  w-3/6 self-center">
                <TouchableOpacity onPress={() => handleIconsPressed(GoogleUrl)}>
                    <Icon name="google" size={40} color="#a5f3fc" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleIconsPressed(FacebookUrl)}>
                    <Icon name="facebook-f" size={40} color="#a5f3fc" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleIconsPressed(TwitterUrl)}>
                    <Brand name="logo-twitter" size={40} color="#a5f3fc" />
                </TouchableOpacity>
            </View>
            {title && <Text className="text-center">{title}</Text>}
        </View>
    );
};
