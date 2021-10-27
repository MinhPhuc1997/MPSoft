import React, { useState } from "react";
import { View, Dimensions, TouchableOpacity, Modal, Alert, Picker, Platform, Image ,Text} from "react-native";
import { Formik } from 'formik';
import * as Yup from 'yup';

import TextInput from "./TextInput"
import ButtonLogin from "./ButtonLogin";
import CheckRemember from "./CheckRemember";
import { Box } from "../../components";
const { width, height } = Dimensions.get("window");
const WIDTH_INPUT = width * 0.7;
const Login =()=>{

    const LoginSchema = Yup.object().shape({
        password: Yup.string()
            .min(4," lan.shortInput")
            .max(50, "lan.longInput")
            .required("lan.plaseInput"),
        username: Yup.string()
            .min(4, "lan.shortInput")
            .max(50, "lan.longInput")
            .required("lan.plaseInput"),
    });


    return(
        <Box flex={1}>
            <Box flex={0.4} width >
                <Image
                    style={{
                        width,
                        resizeMode: "stretch",
                        height: height * 0.4
                    }}
                    source={require('../../components/Assets/assets/loginBG.jpg')} >
                </Image>
                <Box marginLeft="s" marginTop="s" padding="m" position="absolute" width={width} flex={1} bottom={100}>
                    <Text style={{fontFamily:"Roboto-Black"}}>Welcome</Text>
                    
                </Box>
            </Box>
            <View style={{
                position: "absolute",
                backgroundColor: "#fff",
                width,
                height: height * 0.7,
                bottom: 0,
                borderTopLeftRadius: 35,
                borderTopRightRadius: 35,
                padding: 17
            }}>
          
            </View>

           
        </Box>
    )
}

export default Login;