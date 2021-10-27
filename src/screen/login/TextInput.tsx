import React, { useState } from "react";
import { TextInput as RNTextInput, TextInputProps as RNTextInputProps, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Box, Text } from "../../components"

interface TextInputProps extends RNTextInputProps {
    leftIcon?: string;
    rightIcon?: string;
    title: string;
    width: number;
    password?: boolean;
    touched?: boolean,
    errors?: string,
}

const TextInput = ({ leftIcon, rightIcon, title, width, password, touched, errors, ...props }: TextInputProps) => {

    const hidePass = (password) ? true : false;
    const [hide, sethide] = useState(hidePass);
    const BoderColor = !touched ? "gray1" : (errors ? "redColor" : "greenLight");

    const ShowPassword = () => { if (password) { sethide(!hide); } }

    return (
        <Box>
            <Text variant="titlesmall">{title}</Text>
            <Box
                width={width}
                flexDirection="row"
                height={37}
                borderBottomWidth={1}
                borderBottomColor={BoderColor}
                alignItems="flex-end"
                padding="s"
            >
                {(leftIcon != null) && (
                    <AntDesign name={leftIcon} size={23} color="#22223b" />
                )}
                <RNTextInput
                    style={{
                        flex: 1, padding: 2, marginLeft:17, marginRight:17, fontFamily: 'SFUIText-Semibold'
                    }}
                    {...props}
                    secureTextEntry={hide}
                />
                {(rightIcon != null) && (hide) && (
                    <TouchableOpacity onPress={() => ShowPassword()}>
                        <AntDesign name={rightIcon} size={23} color="#22223b" />
                    </TouchableOpacity>
                )}
            </Box>
        </Box >
    )
}

export default TextInput;